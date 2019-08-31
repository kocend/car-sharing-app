import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoanDesktopComponent } from './car-sharing-base/loan-desktop/loan-desktop.component';
import { ClientsListComponent } from './car-sharing-base/clients-list/clients-list.component';
import { LoanListComponent } from './car-sharing-base/loan-list/loan-list.component';
import { LoanFormComponent } from './car-sharing-base/loan-form/loan-form.component';
import { CarsOverviewComponent } from './car-sharing-base/cars-overview/cars-overview.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'loan-desktop', component: LoanDesktopComponent },
    { path: 'cars-overview', component: CarsOverviewComponent },
    { path: 'clients-list', component: ClientsListComponent },
    { path: 'loan-list', component: LoanListComponent },
    { path: 'loan-form', component: LoanFormComponent },
])],
  exports: [RouterModule]
})

export class AppRoutingModule { }
