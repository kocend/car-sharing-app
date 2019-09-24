import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Vehicle } from 'src/models/vehicle';
import { VehicleType } from 'src/models/vehicle-type.enum';
import { Colors } from 'src/models/colors.enum';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.scss']
})
export class CarFormComponent implements OnInit, OnChanges {

  @Input() selectedVehicle: Vehicle;
  @Output() changesSubmitted = new EventEmitter<boolean>();

  vehicleCopy: Vehicle;

  success = "border border-success";
  error = "border border-danger";

  type: String;
  car_mileage_in_kilometers: String;
  color: String;
  registration_number: String;
  power: String;
  seats: String;
  hasAirConditioning: String;
  weight: String;

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    this.vehicleCopy = Object.assign({}, this.selectedVehicle);
    this.type = "";
    this.car_mileage_in_kilometers = "";
    this.color = "";
    this.registration_number = "";
    this.power = "";
    this.seats = "";
    this.hasAirConditioning = "";
    this.weight = "";
  }

  constructor() { }
  ngOnInit() { }

  submitChanges(answerFromChild: boolean) {
    if (this.checkType() &&
      this.checkColor() &&
      this.checkRegistrationNumber() &&
      this.checkCarMileage() &&
      this.checkNumberOfSeats() &&
      this.checkPower() &&
      this.checkWeight() &&
      this.checkAirConditioning() &&
      answerFromChild) {

      this.selectedVehicle.type = this.vehicleCopy.type;
      this.selectedVehicle.car_mileage_in_kilometers = this.vehicleCopy.car_mileage_in_kilometers;
      this.selectedVehicle.color = this.vehicleCopy.color;
      this.selectedVehicle.registration_number = this.vehicleCopy.registration_number;
      this.selectedVehicle.power = this.vehicleCopy.power;
      this.selectedVehicle.hasAirConditioning = this.vehicleCopy.hasAirConditioning;
      this.selectedVehicle.seats = this.vehicleCopy.seats;
      this.selectedVehicle.weight = this.vehicleCopy.weight;

      this.changesSubmitted.emit();
    }
    else {
      this.checkType();
      this.checkColor();
      this.checkRegistrationNumber();
      this.checkCarMileage();
      this.checkNumberOfSeats();
      this.checkPower();
      this.checkWeight();
      this.checkAirConditioning();
    }
  }

  checkType(): boolean {
    if (Object.values(VehicleType).includes(this.vehicleCopy.type)) {
      this.type = this.success;
      return true;
    }
    else {
      this.type = this.error;
      return false;
    }
  }

  checkColor(): boolean {
    if (Object.values(Colors).includes(this.vehicleCopy.color)) {
      this.color = this.success;
      return true;
    }
    else {
      this.color = this.error;
      return false;
    }
  }

  checkRegistrationNumber(): boolean {
    //TODO validation
    this.registration_number = this.success;
    return true;
  }

  checkCarMileage(): boolean {
    if (this.vehicleCopy.car_mileage_in_kilometers >= 0
      &&
      this.vehicleCopy.car_mileage_in_kilometers < 100000) {
      this.car_mileage_in_kilometers = this.success;
      return true;
    }
    else {
      this.car_mileage_in_kilometers = this.error;
      return false;
    }
  }

  checkNumberOfSeats(): boolean {
    if (this.vehicleCopy.seats >= 1 && this.vehicleCopy.seats < 100) {
      this.seats = this.success;
      return true;
    }
    else {
      this.seats = this.error;
      return false;
    }
  }

  checkPower(): boolean {
    if (this.vehicleCopy.power >= 1
      &&
      this.vehicleCopy.power < 10000) {
      this.power = this.success;
      return true;
    }
    else {
      this.power = this.error;
      return false;
    }
  }

  checkWeight(): boolean {
    if (this.vehicleCopy.weight >= 50
      &&
      this.vehicleCopy.weight < 100000) {
      this.weight = this.success;
      return true;
    }
    else {
      this.weight = this.error;
      return false;
    }
  }

  checkAirConditioning(): boolean {
    let choice: String = String(this.vehicleCopy.hasAirConditioning);
    if (choice == "true" ||
      choice == "false") {
      this.hasAirConditioning = this.success;
      return true;
    }
    else {
      this.hasAirConditioning = this.error;
      return false;
    }
  }
}
