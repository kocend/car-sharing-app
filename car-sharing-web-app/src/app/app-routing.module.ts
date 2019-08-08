import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './car-sharing-base/home/home.component';
import { LoanDesktopComponent } from './car-sharing-base/loan-desktop/loan-desktop.component';
import { CarsListComponent } from './car-sharing-base/cars-list/cars-list.component';
import { ClientsListComponent } from './car-sharing-base/clients-list/clients-list.component';
import { LoanListComponent } from './car-sharing-base/loan-list/loan-list.component';
import { LoanFormComponent } from './car-sharing-base/loan-form/loan-form.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'loan-desktop', component: LoanDesktopComponent },
    { path: 'cars-list', component: CarsListComponent },
    { path: 'clients-list', component: ClientsListComponent },
    { path: 'loan-list', component: LoanListComponent },
    { path: 'loan-form', component: LoanFormComponent },
])],
  exports: [RouterModule]
})

export class AppRoutingModule { }
