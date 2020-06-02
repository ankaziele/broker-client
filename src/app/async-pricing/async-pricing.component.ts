import { Component, OnInit } from '@angular/core';
import { InstrumentService } from '../services/instrument.service';
import { first, map, tap } from 'rxjs/operators';
import { combineLatest, Observable } from 'rxjs';

@Component({
  selector: 'app-async-pricing',
  templateUrl: './async-pricing.component.html',
  styleUrls: ['./async-pricing.component.css']
})
export class AsyncPricingComponent implements OnInit {

  openingMicrosoftPrice: Observable<number>;
  openingUSDPLNPrice: Observable<number>;
  microsoftPriceInPLN: Observable<number>;
  microsoftPriceChange: Observable<string>;
  currentMicrosoftPrice: Observable<number>;
  currentUsdPlnPrice: Observable<number>;
  usdPlnPriceChange: Observable<string>;

  constructor(private instrumentService: InstrumentService) { }

  ngOnInit() {
    this.currentMicrosoftPrice = this.instrumentService.microsoftSubject.pipe()
    this.currentUsdPlnPrice = this.instrumentService.usdplnSubject.pipe()
    this.openingMicrosoftPrice = this.instrumentService.microsoftSubject.pipe(first());
    this.openingUSDPLNPrice = this.instrumentService.usdplnSubject.pipe(first());
    this.microsoftPriceInPLN = combineLatest(
      this.instrumentService.microsoftSubject.pipe(),
      this.instrumentService.usdplnSubject.pipe()
    ).pipe(
        //tap(val => console.log(val)), pomaga zobaczyc jaka jest wartosc z observable na danym etapie
        map((price) =>price[0] * price[1]),
      );
    this.microsoftPriceChange = combineLatest(this.currentMicrosoftPrice, this.openingMicrosoftPrice).pipe(
      map(([current, opening]: any) => {
       return ((current - opening)/opening*100).toFixed(2)
    })
    )

    this.usdPlnPriceChange = combineLatest(this.openingUSDPLNPrice, this.currentUsdPlnPrice).pipe(
      map(([opening, current]: any) => {
        return ((current - opening)/opening*100).toFixed(2)
    })
    )
  }
}
