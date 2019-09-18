import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarSharingBaseModule } from './car-sharing-base/car-sharing-base.module';
import { VehicleRepository } from 'src/repositories/vehicle-repository';
import { TrailerRepository } from 'src/repositories/trailer-repository';
import { VehicleService } from 'src/services/vehicle-service';
import { TrailerService } from 'src/services/trailer-service';
import { LendService } from 'src/services/lend-service';
import { BusFactory } from 'src/factories/bus-factory';
import { MotorcycleFactory } from 'src/factories/motorcycle-factory';
import { PassengerCarFactory } from 'src/factories/passenger-car-factory';
import { TruckFactory } from 'src/factories/truck-factory';
import { SeedData } from 'src/factories/seed-data';
import { TrailerFactory } from 'src/factories/trailer-factory';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CarSharingBaseModule,
  ],
  providers: [
    { provide: VehicleRepository, useClass: VehicleRepository },
    { provide: TrailerRepository, useClass: TrailerRepository },
    { provide: VehicleService, useClass: VehicleService },
    { provide: TrailerService, useClass: TrailerService },
    { provide: LendService, useClass: LendService },
    { provide: BusFactory, useClass: BusFactory },
    { provide: MotorcycleFactory, useClass: MotorcycleFactory },
    { provide: PassengerCarFactory, useClass: PassengerCarFactory },
    { provide: TruckFactory, useClass: TruckFactory },
    { provide: TrailerFactory, useClass: TrailerFactory },
    { provide: SeedData, useClass: SeedData }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
