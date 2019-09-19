import { Component, OnInit, Input } from '@angular/core';
import { Vehicle } from 'src/models/vehicle';
import { VehicleRepository } from 'src/repositories/vehicle-repository';

@Component({
  selector: 'app-cars-overview',
  templateUrl: './cars-overview.component.html',
  styleUrls: ['./cars-overview.component.scss']
})
export class CarsOverviewComponent implements OnInit {

  selectedVehicle: Vehicle;
  editButtonClicked: boolean;

  constructor(private vehicleRepo: VehicleRepository) {
    this.editButtonClicked=false;
   }

  ngOnInit() {
  }

  onVehicleSelected(vehicle: Vehicle) {
    this.selectedVehicle = vehicle;
    console.log("object complete: " + this.selectedVehicle.car_mileage_in_kilometers);
  }

  deleteSelectedVehicle() {
    let choice = confirm("Are you sure you want to delete this vehicle from database?");
    if (choice) {
      this.vehicleRepo.delete(this.selectedVehicle);
      this.selectedVehicle = null;
    }
  }

  editSelectedVehicle(){
    this.editButtonClicked=true;
  }

}
