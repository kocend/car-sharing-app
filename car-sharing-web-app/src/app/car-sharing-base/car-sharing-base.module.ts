import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoanHeaderComponent } from './loan-header/loan-header.component';
import { LoanFooterComponent } from './loan-footer/loan-footer.component';
import { LoanDesktopComponent } from './loan-desktop/loan-desktop.component';
import { LoanDetailsComponent } from './loan-details/loan-details.component';
import { LoanFormComponent } from './loan-form/loan-form.component';
import { LoanListComponent } from './loan-list/loan-list.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { CarFormComponent } from './car-form/car-form.component';
import { CarsListComponent } from './cars-list/cars-list.component';
import { CarsOverviewComponent } from './cars-overview/cars-overview.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { RouterModule } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { PassengerDetailsComponent } from './passenger-details/passenger-details.component';
import { BusDetailsComponent } from './bus-details/bus-details.component';
import { MotorcycleDetailsComponent } from './motorcycle-details/motorcycle-details.component';
import { TruckDetailsComponent } from './truck-details/truck-details.component';
import { FormsModule } from '@angular/forms';
import { TrailerListComponent } from './trailer-list/trailer-list.component';
import { PriceListComponent } from './price-list/price-list.component';
import { BusFormComponent } from './bus-form/bus-form.component';
import { PassengerFormComponent } from './passenger-form/passenger-form.component';
import { MotorcycleFormComponent } from './motorcycle-form/motorcycle-form.component';
import { TruckFormComponent } from './truck-form/truck-form.component'



@NgModule({
  declarations: [
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
    CarsOverviewComponent,
    ClientFormComponent,
    ClientsListComponent,
    NavigationBarComponent,
    PassengerDetailsComponent,
    BusDetailsComponent,
    MotorcycleDetailsComponent,
    TruckDetailsComponent,
    TrailerListComponent,
    PriceListComponent,
    BusFormComponent,
    PassengerFormComponent,
    MotorcycleFormComponent,
    TruckFormComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    DataTablesModule,
    FormsModule
  ],
  exports: [
    CommonModule,
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
    CarsOverviewComponent,
    ClientFormComponent,
    ClientsListComponent,
    NavigationBarComponent
  ]
})
export class CarSharingBaseModule { }
