import { Component, OnInit } from '@angular/core';
import { InstrumentService } from '../services/instrument.service';
import { merge, Subscription } from 'rxjs';
import { first, mapTo } from 'rxjs/operators';

@Component({
  selector: 'app-observable-pricing',
  templateUrl: './observable-pricing.component.html',
  styleUrls: ['./observable-pricing.component.css']
})
export class ObservablePricingComponent implements OnInit {

  microsoftStockPrice: number;
  openingPriceMicrosoft: Subscription;
  openingPriceMicrosoftValue: number;
  changeMicrosoftStockPrice: string;

  usdPlnPrice: number;
  changeUSDPln: string;

  openingPriceUsd: number;

  microsoftPriceInPln: number;

  constructor(private instrumentService: InstrumentService) { }

  ngOnInit() {


    this.openingPriceMicrosoft = this.instrumentService.microsoftSubject.subscribe( price => {
      this.openingPriceMicrosoftValue = price as number;
      this.openingPriceMicrosoft.unsubscribe()
    })

    console.log('first', this.instrumentService.usdplnSubject.pipe(first()))

    //
    // this.openingPriceUsdPln = this.instrumentService.usdplnSubject.subscribe( price => {
    //   this.openingPriceUsdPlnValue = price as number;
    //   this.openingPriceUsdPln.unsubscribe();
    // })

    this.instrumentService.usdplnSubject.pipe(first()).subscribe( price => {
      this.openingPriceUsd = price as number;
    })

    this.instrumentService.microsoftSubject.subscribe(price => {
      this.microsoftStockPrice = price as number;
      this.changeMicrosoftStockPrice = ((this.microsoftStockPrice - this.openingPriceMicrosoftValue)*100/this.openingPriceMicrosoftValue).toFixed(2) + '%';
    })

    this.instrumentService.usdplnSubject.subscribe( price => {
      this.usdPlnPrice = price as number;
      this.changeUSDPln = ((this.usdPlnPrice - this.openingPriceUsd)*100/this.openingPriceUsd).toFixed(2) + '%';
    })


    const mergedValues = merge(
      this.instrumentService.usdplnSubject.pipe(mapTo('first')),
      this.instrumentService.microsoftSubject.pipe(mapTo('second'))
    )

    mergedValues.subscribe( val =>
      this.microsoftPriceInPln = this.microsoftStockPrice * this.usdPlnPrice
    )
  }
}
