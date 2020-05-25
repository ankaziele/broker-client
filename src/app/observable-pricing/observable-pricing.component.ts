import { Component, OnInit } from '@angular/core';
import { InstrumentService } from '../services/instrument.service';

@Component({
  selector: 'app-observable-pricing',
  templateUrl: './observable-pricing.component.html',
  styleUrls: ['./observable-pricing.component.css']
})
export class ObservablePricingComponent implements OnInit {

  microsoftStockPrice;
  usdPLNprice;

  constructor(private instrumentService: InstrumentService) { }

  ngOnInit() {
    this.instrumentService.microsoftSubject.subscribe(price => {
      this.microsoftStockPrice = price;
    })
    this.instrumentService.usdplnSubject.subscribe( price => {
      this.usdPLNprice = price
    })
  }

}
