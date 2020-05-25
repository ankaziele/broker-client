import { Component, OnInit } from '@angular/core';
import { InstrumentService } from '../services/instrument.service';

@Component({
  selector: 'app-async-pricing',
  templateUrl: './async-pricing.component.html',
  styleUrls: ['./async-pricing.component.css']
})
export class AsyncPricingComponent implements OnInit {

  constructor(private instrumentService: InstrumentService) { }

  ngOnInit() {
  }

}
