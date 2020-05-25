import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstrumentService {
  private microsoft = {
    name: "Microsoft",
    price: 240.00
  }

  private usdpln = {
    name: "USD/PLN",
    price: 4.14,
  }

  microsoftSubject = new Subject();
  usdplnSubject = new Subject<number>();

  constructor() { 
    this.emitNewPriceMicrosoft()
    this.emitNewPricePln()
  }

  private emitNewPriceMicrosoft() {
    this.microsoftSubject.next(this.microsoft.price * (0.99 + Math.random()* 0.02))
    setTimeout(this.emitNewPriceMicrosoft.bind(this), Math.random() * 2 * 1000 + 500)
  }

  private emitNewPricePln() {
    //const offerType =  Math.random() > 0.5 ? 'bid' : 'ask'
    this.usdplnSubject.next(
      this.usdpln.price * (0.99 + Math.random()* 0.02)
    )
    setTimeout(this.emitNewPricePln.bind(this), Math.random() * 2 * 1000 + 500)
  }
}
