import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsyncPricingComponent } from './async-pricing/async-pricing.component';
import { ObservablePricingComponent } from './observable-pricing/observable-pricing.component';

@NgModule({
  declarations: [
    AppComponent,
    AsyncPricingComponent,
    ObservablePricingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
