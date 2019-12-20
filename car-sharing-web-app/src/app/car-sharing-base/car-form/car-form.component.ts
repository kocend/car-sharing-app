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

  success_class = "border border-success";
  error_class = "border border-danger";

  type_input_CSS_class: String;
  car_mileage_in_kilometers_input_CSS_class: String;
  color_input_CSS_class: String;
  registration_number_input_CSS_class: String;
  power_input_CSS_class: String;
  seats_input_CSS_class: String;
  hasAirConditioning_input_CSS_class: String;
  weight_input_CSS_class: String;

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    this.vehicleCopy = Object.assign({}, this.selectedVehicle);
    this.type_input_CSS_class = "";
    this.car_mileage_in_kilometers_input_CSS_class = "";
    this.color_input_CSS_class = "";
    this.registration_number_input_CSS_class = "";
    this.power_input_CSS_class = "";
    this.seats_input_CSS_class = "";
    this.hasAirConditioning_input_CSS_class = "";
    this.weight_input_CSS_class = "";
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
      this.type_input_CSS_class = this.success_class;
      return true;
    }
    else {
      this.type_input_CSS_class = this.error_class;
      return false;
    }
  }

  checkColor(): boolean {
    if (Object.values(Colors).includes(this.vehicleCopy.color)) {
      this.color_input_CSS_class = this.success_class;
      return true;
    }
    else {
      this.color_input_CSS_class = this.error_class;
      return false;
    }
  }

  checkRegistrationNumber(): boolean {
    //TODO validation
    if (this.vehicleCopy.registration_number == null || this.vehicleCopy.registration_number.trim() == "") {
      this.registration_number_input_CSS_class = this.error_class;
      return false;
    }
    else {
      this.registration_number_input_CSS_class = this.success_class;
      return true;
    }
  }

  checkCarMileage(): boolean {
    if (this.vehicleCopy.car_mileage_in_kilometers >= 50
      &&
      this.vehicleCopy.car_mileage_in_kilometers < 1000000) {
        console.log("true"+this.vehicleCopy.car_mileage_in_kilometers);
      this.car_mileage_in_kilometers_input_CSS_class = this.success_class;
      return true;
    }
    else {
      console.log("false"+this.vehicleCopy.car_mileage_in_kilometers);
      this.car_mileage_in_kilometers_input_CSS_class = this.error_class;
      return false;
    }
  }

  checkNumberOfSeats(): boolean {
    if (this.vehicleCopy.seats >= 1 && this.vehicleCopy.seats < 100) {
      this.seats_input_CSS_class = this.success_class;
      return true;
    }
    else {
      this.seats_input_CSS_class = this.error_class;
      return false;
    }
  }

  checkPower(): boolean {
    if (this.vehicleCopy.power >= 1
      &&
      this.vehicleCopy.power < 10000) {
      this.power_input_CSS_class = this.success_class;
      return true;
    }
    else {
      this.power_input_CSS_class = this.error_class;
      return false;
    }
  }

  checkWeight(): boolean {
    if (this.vehicleCopy.weight >= 50
      &&
      this.vehicleCopy.weight < 100000) {
      this.weight_input_CSS_class = this.success_class;
      return true;
    }
    else {
      this.weight_input_CSS_class = this.error_class;
      return false;
    }
  }

  checkAirConditioning(): boolean {
    let choice: String = String(this.vehicleCopy.hasAirConditioning);
    if (choice == "true" ||
      choice == "false") {
      this.hasAirConditioning_input_CSS_class = this.success_class;
      return true;
    }
    else {
      this.hasAirConditioning_input_CSS_class = this.error_class;
      return false;
    }
  }
}
