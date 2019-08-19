import { Component, OnInit } from '@angular/core';
import { VehicleRepository } from 'src/repositories/vehicle-repository';
import { PassengerCar } from 'src/models/passenger-car';
import { VehicleType } from 'src/models/vehicle-type.enum';
import { Vehicle } from 'src/models/vehicle';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})
export class CarsListComponent implements OnInit {

  private vehicleList: Vehicle[];

  constructor(private readonly vehicleRepo: VehicleRepository) {
    this.vehicleList = vehicleRepo.getAll();
   }

  ngOnInit() {
    this.vehicleList.sort();
  }

}
