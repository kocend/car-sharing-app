import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './carSharingBase/home/home.component';
import { LoanDesktopComponent } from './carSharingBase/loan-desktop/loan-desktop.component';
import { CarsListComponent } from './carSharingBase/cars-list/cars-list.component';
import { ClientsListComponent } from './carSharingBase/clients-list/clients-list.component';
import { LoanListComponent } from './carSharingBase/loan-list/loan-list.component';
import { LoanFormComponent } from './carSharingBase/loan-form/loan-form.component';


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

/*
[
    { path: 'loan-desktop', component: LoanDesktopComponent },
    { path: 'cars-list', component: CarsListComponent },
    { path: 'clients-list', component: ClientsListComponent },
    { path: 'loan-list', component: LoanListComponent },
    { path: 'loan-form', component: LoanFormComponent },
]
*/
export class AppRoutingModule { }
