import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './carSharingBase/home/home.component';
import { LoanHeaderComponent } from './carSharingBase/loan-header/loan-header.component';
import { LoanFooterComponent } from './carSharingBase/loan-footer/loan-footer.component';
import { LoanDesktopComponent } from './carSharingBase/loan-desktop/loan-desktop.component';
import { LoanDetailsComponent } from './carSharingBase/loan-details/loan-details.component';
import { LoanFormComponent } from './carSharingBase/loan-form/loan-form.component';
import { LoanListComponent } from './carSharingBase/loan-list/loan-list.component';
import { CarDetailsComponent } from './carSharingBase/car-details/car-details.component';
import { CarFormComponent } from './carSharingBase/car-form/car-form.component';
import { CarsListComponent } from './carSharingBase/cars-list/cars-list.component';
import { ClientFormComponent } from './carSharingBase/client-form/client-form.component';
import { ClientsListComponent } from './carSharingBase/clients-list/clients-list.component';
import { NavigationBarComponent } from './carSharingBase/navigation-bar/navigation-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoanHeaderComponent,
    LoanFooterComponent,
    LoanDesktopComponent,
    LoanDetailsComponent,
    LoanFormComponent,
    LoanListComponent,
    CarDetailsComponent,
    CarFormComponent,
    CarsListComponent,
    ClientFormComponent,
    ClientsListComponent,
    NavigationBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
