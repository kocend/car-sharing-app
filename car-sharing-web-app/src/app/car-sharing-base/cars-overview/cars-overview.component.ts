import { Component, OnInit, Input } from '@angular/core';
import { Vehicle } from 'src/models/vehicle';

@Component({
  selector: 'app-cars-overview',
  templateUrl: './cars-overview.component.html',
  styleUrls: ['./cars-overview.component.scss']
})
export class CarsOverviewComponent implements OnInit {

  selectedVehicle: Vehicle;

  constructor() { }

  ngOnInit() {
  }

  onVehicleSelected(vehicle: Vehicle){
    this.selectedVehicle=vehicle;
    console.log("object complete: "+this.selectedVehicle.car_mileage_in_kilometers);
  }

}
