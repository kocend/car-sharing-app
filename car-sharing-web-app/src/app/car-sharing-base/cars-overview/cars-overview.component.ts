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
  newButtonClicked: boolean;

  busChosen: boolean;

  constructor(private vehicleRepo: VehicleRepository) {
    this.editButtonClicked = false;
    this.newButtonClicked = false;
   }

   typeOfVehicleChosen(){
     console.log(this.busChosen+" bus button");
   }

  ngOnInit() {
  }

  onVehicleSelected(vehicle: Vehicle) {
    this.selectedVehicle = vehicle;
    this.editButtonClicked = false;
    this.newButtonClicked = false;
  }

  deleteSelectedVehicle() {
    let choice = confirm("Are you sure you want to delete "+this.selectedVehicle.type+" identify by: "+this.selectedVehicle.registration_number+" from database?");
    if (choice) {
      this.vehicleRepo.delete(this.selectedVehicle);
      this.selectedVehicle = null;
    }
  }

  editSelectedVehicle(){
    this.editButtonClicked = true;
  }

  addNewVehicle(){
    this.newButtonClicked = true;
  }

  changesSubmitted(value: boolean){
    this.editButtonClicked = false;
  }

}
