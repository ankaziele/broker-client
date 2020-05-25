import { Component, OnInit } from '@angular/core';
import { InstrumentService } from './services/instrument.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'broker-client';
  openingPriceUsdPln;
  microsofrPrice: number;
  usdPLNprice: number;
  currentPriceChange: any;
  microsoftPricePLN: number;
  openingPriceUsdPlnSubscription: Subscription;


  constructor(
   public instrumentService: InstrumentService
  ) {}

  ngOnInit(): void {
    this.instrumentService.microsoftSubject.subscribe(price => {
      this.microsofrPrice = price as number;
      this.microsoftPricePLN = this.microsofrPrice * this.usdPLNprice;
      }
    )

    this.openingPriceUsdPlnSubscription = this.instrumentService.usdplnSubject.subscribe(price => {
      this.openingPriceUsdPln = price;
      this.openingPriceUsdPlnSubscription.unsubscribe();
    });

    this.instrumentService.usdplnSubject.subscribe( price => {
      this.usdPLNprice = price;
      this.currentPriceChange = ((this.usdPLNprice - this.openingPriceUsdPln)*100).toFixed(2) + '%';
      this.microsoftPricePLN = this.microsofrPrice * this.usdPLNprice;
    })
  }
}
