import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/models/vehicle';
import { VehicleType } from 'src/models/vehicle-type.enum';
import { VehicleRepository } from 'src/repositories/vehicle-repository';
import { Bus } from 'src/models/bus';
import { Motorcycle } from 'src/models/motorcycle';
import { PassengerCar } from 'src/models/passenger-car';
import { Truck } from 'src/models/truck';

@Component({
  selector: 'app-cars-overview',
  templateUrl: './cars-overview.component.html',
  styleUrls: ['./cars-overview.component.scss']
})
export class CarsOverviewComponent implements OnInit {

  selectedVehicle: Vehicle;
  editButtonClicked: boolean;
  newButtonClicked: boolean;

  types = [ VehicleType.Bus, VehicleType.Motorcycle, VehicleType.PassengerCar, VehicleType.Truck ];
  typeOfNewVehicle: VehicleType;

  constructor(private vehicleRepo: VehicleRepository) {
    this.typeOfNewVehicle = VehicleType.Bus;
    this.editButtonClicked = false;
    this.newButtonClicked = false;
   }

   typeOfVehicleChosen(){
     console.log(this.typeOfNewVehicle + " has been selected.");
     switch(this.typeOfNewVehicle){
       case VehicleType.Bus: this.selectedVehicle = new Bus();
       this.selectedVehicle.type = VehicleType.Bus;
       break;
       case VehicleType.Motorcycle: this.selectedVehicle = new Motorcycle();
       this.selectedVehicle.type = VehicleType.Motorcycle;
       break;
       case VehicleType.PassengerCar: this.selectedVehicle = new PassengerCar();
       this.selectedVehicle.type = VehicleType.PassengerCar;
       break;
       case VehicleType.Truck: this.selectedVehicle = new Truck();
       this.selectedVehicle.type = VehicleType.Truck;
       break;
     }
     this.newButtonClicked = false;
     this.editButtonClicked = true;
   }

  ngOnInit() {
  }

  onVehicleSelected(vehicle: Vehicle) {
    this.selectedVehicle = vehicle;
    this.editButtonClicked = false;
    this.newButtonClicked = false;
  }

  deleteSelectedVehicle() {
    let choice = confirm("Are you sure you want to delete "+this.selectedVehicle.type+" identify by: '"+this.selectedVehicle.registration_number+"' from database?");
    if (choice) {
      this.vehicleRepo.delete(this.selectedVehicle);
      this.selectedVehicle = null;
    }
  }

  editSelectedVehicle(){
    this.editButtonClicked = true;
    if(this.selectedVehicle == null)
    this.selectedVehicle = this.vehicleRepo.getAll()[0];
  }

  addNewVehicle(){
    this.newButtonClicked = true;
  }

  changesSubmitted(value: boolean){
    this.editButtonClicked = false;
    this.vehicleRepo.add(this.selectedVehicle);
  }

}
