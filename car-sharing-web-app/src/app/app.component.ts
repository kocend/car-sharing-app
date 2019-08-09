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

  ngOnInit(){

    let carFactory: PassengerCarFactory = new PassengerCarFactory();
    let vehicleRepo: VehicleRepository = new VehicleRepository();
    let seedData: SeedData = new SeedData(vehicleRepo);
    seedData.seed(100);

    let passengersCars: Vehicle[] = vehicleRepo.getByVehicleType(VehicleType.PassengerCar);

    console.log(passengersCars.length);

    for(let i = 0; i<passengersCars.length; i++){
      console.log(passengersCars[i].toString());
      // console.log(passengersCars[i].type.toString());
      // console.log(passengersCars[i].car_mileage_in_kilometers);
      // console.log(passengersCars[i].registration_number);
      // console.log(passengersCars[i].seats);
    }


    new RegistrationFactory().getUniqueRegistrationNumber();

    // let vehicle = new PassengerCar();
    // vehicle.car_mileage_in_kilometers = 0;
    // vehicle.color = "red";
    // vehicle.power = 300;
    // vehicle.registration_number = "WA 9032P2";
    // vehicle.seats = 5;
    // vehicle.type = VehicleType.PassengerCar;

    // let client = new Client();
    // client.name = "Jan";
    // client.second_name = "Kowalski";
    // client.identity_card_number = "CCG 76832";
    // client.PESEL = 9312072354;

    // let loan = new LoanInfo();
    // loan.client = client;
    // loan.vehicle = vehicle;
    // loan.additionalInsurance = true;
    // loan.borrowDate = new Date();
    // loan.costPerKilometer = 12.3;
    // loan.status = LoanStatus.InProgress;
    // loan.notes = "zarysowany  lewy tylny błotnik";

    // console.log(loan.client.name);
    // console.log(loan.client.second_name);
    // console.log(loan.client.identity_card_number);
    // console.log(loan.client.PESEL);

    // console.log(loan.vehicle.type);
    // console.log(loan.vehicle.power);
    // console.log(loan.vehicle.seats);
    // console.log(loan.vehicle.registration_number);
    // console.log(loan.vehicle.car_mileage_in_kilometers);
    // console.log(loan.vehicle.color);

    
    // console.log(loan.status);
    // console.log(loan.borrowDate);
    // console.log(loan.costPerKilometer);
    // console.log(loan.additionalInsurance);
    // console.log(loan.notes);
  }
}
