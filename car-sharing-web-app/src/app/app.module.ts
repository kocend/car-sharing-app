import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarSharingBaseModule } from './car-sharing-base/car-sharing-base.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarSharingBaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
