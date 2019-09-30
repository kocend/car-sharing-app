import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { PassengerCar } from 'src/models/passenger-car';

@Component({
  selector: 'app-passenger-form',
  templateUrl: './passenger-form.component.html',
  styleUrls: ['./passenger-form.component.scss']
})
export class PassengerFormComponent implements OnInit, OnChanges {

  @Input() selectedPassengerCar: PassengerCar;
  @Output() changesSubmitted = new EventEmitter<boolean>();

  draftCopyOfPassengerCar: PassengerCar;

  success_class = "border border-success";
  error_class = "border border-danger";

  hasGPS_input_CSS_class: String;
  hasRoofRack_input_CSS_class: String;
  hasMultimediaSystem_input_CSS_class: String;

  constructor() { 
  }

  ngOnInit() {
  }

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    this.draftCopyOfPassengerCar = Object.assign({}, this.selectedPassengerCar);
    this.hasGPS_input_CSS_class="";
    this.hasRoofRack_input_CSS_class="";
    this.hasMultimediaSystem_input_CSS_class="";
  }

  submitChanges(){
    //it is necessary to call both function
    let isGPSCorrect = this.checkGPS();
    let isRoofRackCorrect = this.checkRoofRack();
    let isMultimediaSystemCorrect = this.checkMultimediaSystem();
    if(isGPSCorrect&&isRoofRackCorrect&&isMultimediaSystemCorrect){
      this.selectedPassengerCar.hasGPS=this.draftCopyOfPassengerCar.hasGPS;
      this.selectedPassengerCar.hasRoofRack=this.draftCopyOfPassengerCar.hasRoofRack;
      this.selectedPassengerCar.hasMultimediaSystem=this.draftCopyOfPassengerCar.hasMultimediaSystem;
    }
    this.changesSubmitted.emit(isGPSCorrect&&isRoofRackCorrect&&isMultimediaSystemCorrect);
  }

  checkGPS(){
    let choice: String = String(this.draftCopyOfPassengerCar.hasGPS);
    if (choice == "true" ||
      choice == "false") {
      this.hasGPS_input_CSS_class = this.success_class;
      return true;
    }
    else {
      this.hasGPS_input_CSS_class = this.error_class;
      return false;
    }
  }

  checkRoofRack(){
    let choice: String = String(this.draftCopyOfPassengerCar.hasRoofRack);
    if (choice == "true" ||
      choice == "false") {
      this.hasRoofRack_input_CSS_class = this.success_class;
      return true;
    }
    else {
      this.hasRoofRack_input_CSS_class = this.error_class;
      return false;
    }
  }

  checkMultimediaSystem(){
    let choice: String = String(this.draftCopyOfPassengerCar.hasMultimediaSystem);
    if (choice == "true" ||
      choice == "false") {
      this.hasMultimediaSystem_input_CSS_class = this.success_class;
      return true;
    }
    else {
      this.hasMultimediaSystem_input_CSS_class = this.error_class;
      return false;
    }
  }
}
