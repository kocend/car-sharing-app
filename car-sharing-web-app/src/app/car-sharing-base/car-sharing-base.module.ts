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
import { ClientFormComponent } from './client-form/client-form.component';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { RouterModule } from '@angular/router';



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
    ClientFormComponent,
    ClientsListComponent,
    NavigationBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
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
    ClientFormComponent,
    ClientsListComponent,
    NavigationBarComponent
  ]
})
export class CarSharingBaseModule { }
