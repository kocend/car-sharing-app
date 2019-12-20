import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoanDesktopComponent } from './car-sharing-base/loan-desktop/loan-desktop.component';
import { ClientsListComponent } from './car-sharing-base/clients-list/clients-list.component';
import { LoanListComponent } from './car-sharing-base/loan-list/loan-list.component';
import { LoanFormComponent } from './car-sharing-base/loan-form/loan-form.component';
import { CarsOverviewComponent } from './car-sharing-base/cars-overview/cars-overview.component';
import { TrailerListComponent } from './car-sharing-base/trailer-list/trailer-list.component';
import { PriceListComponent } from './car-sharing-base/price-list/price-list.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'cars-overview', component: CarsOverviewComponent },
    { path: 'loan-desktop', component: LoanDesktopComponent },
    { path: 'trailer-list', component: TrailerListComponent },
    { path: 'clients-list', component: ClientsListComponent },
    { path: 'loan-list', component: LoanListComponent },
    { path: 'price-list', component: PriceListComponent },
    { path: 'loan-form', component: LoanFormComponent }
])],
  exports: [RouterModule]
})

export class AppRoutingModule { }
