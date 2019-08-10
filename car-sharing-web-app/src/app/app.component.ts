import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../models/vehicle';
import { Client } from '../models/client';
import { LoanInfo } from '../models/loan-info';
import { VehicleType } from 'src/models/vehicle-type.enum';
import { LoanStatus } from 'src/models/loan-status.enum';
import { PassengerCar } from 'src/models/passenger-car';
import { PassengerCarFactory } from 'src/factories/passenger-car-factory';
import { VehicleRepository } from 'src/repositories/vehicle-repository';
import { SeedData } from 'src/factories/seed-data';
import { RegistrationFactory } from 'src/factories/registration-factory';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'car-sharing-web-app';

  constructor( private readonly seedData: SeedData,
               private readonly vehicleRepository: VehicleRepository){
    
  }

  ngOnInit(){
    this.seedData.seed(100);

    let passengersCars: Vehicle[] = this.vehicleRepository.getByVehicleType(VehicleType.PassengerCar);

    for(let i = 0; i<passengersCars.length; i++){
      console.log(passengersCars[i].toString());
    }
  }
}
