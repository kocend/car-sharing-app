import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { VehicleRepository } from 'src/repositories/vehicle-repository';
import { Vehicle } from 'src/models/vehicle';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})
export class CarsListComponent implements OnInit {

  private vehicleList: Vehicle[];
  @Output() clickedVehicle = new EventEmitter<Vehicle>();


  constructor(private readonly vehicleRepo: VehicleRepository) {
    this.vehicleList = vehicleRepo.getAll();
   }

   private onClickedRow(index){
      this.clickedVehicle.emit(this.vehicleList[index]);
   }

  ngOnInit() {
    this.vehicleList.sort();
  }
}
