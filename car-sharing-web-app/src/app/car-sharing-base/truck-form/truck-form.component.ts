import { Component, OnInit, EventEmitter, OnChanges, Input, Output } from '@angular/core';
import { Truck } from 'src/models/truck';

@Component({
  selector: 'app-truck-form',
  templateUrl: './truck-form.component.html',
  styleUrls: ['./truck-form.component.scss']
})
export class TruckFormComponent implements OnInit, OnChanges {

  @Input() selectedTruck: Truck;
  @Output() changesSubmitted = new EventEmitter<boolean>();

  draftCopyOfTruck: Truck;

  success_class = "border border-success";
  error_class = "border border-danger";

  maxLoad_input_CSS_class: String;
  hasBedroom_input_CSS_class: String;
  hasCBRadio_input_CSS_class: String;

  constructor() { 
  }

  ngOnInit() {
  }

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    this.draftCopyOfTruck = Object.assign({}, this.selectedTruck);
    this.maxLoad_input_CSS_class="";
    this.hasBedroom_input_CSS_class="";
    this.hasCBRadio_input_CSS_class="";
  }

  submitChanges(){
    //it is necessary to call both function
    let isMaxLoadCorrect = this.checkMaxLoad();
    let isBedroomCorrect = this.checkBedroom();
    let isCBRadioCorrect = this.checkCBRadio();
    if(isMaxLoadCorrect&&isBedroomCorrect&&isCBRadioCorrect){
      this.selectedTruck.maxLoad=this.draftCopyOfTruck.maxLoad;
      this.selectedTruck.hasBedroom=this.draftCopyOfTruck.hasBedroom;
      this.selectedTruck.hasCBRadio=this.draftCopyOfTruck.hasCBRadio;
    }
    this.changesSubmitted.emit(isMaxLoadCorrect&&isBedroomCorrect&&isCBRadioCorrect);
  }

  checkMaxLoad(){
    let choice: number = this.draftCopyOfTruck.maxLoad;
    if (choice >= 20 &&
      choice <= 50) {
      this.maxLoad_input_CSS_class = this.success_class;
      return true;
    }
    else {
      this.maxLoad_input_CSS_class = this.error_class;
      return false;
    }
  }

  checkBedroom(){
    let choice: String = String(this.draftCopyOfTruck.hasBedroom);
    if (choice == "true" ||
      choice == "false") {
      this.hasBedroom_input_CSS_class = this.success_class;
      return true;
    }
    else {
      this.hasBedroom_input_CSS_class = this.error_class;
      return false;
    }
  }

  checkCBRadio(){
    let choice: String = String(this.draftCopyOfTruck.hasCBRadio);
    if (choice == "true" ||
      choice == "false") {
      this.hasCBRadio_input_CSS_class = this.success_class;
      return true;
    }
    else {
      this.hasCBRadio_input_CSS_class = this.error_class;
      return false;
    }
  }
}
