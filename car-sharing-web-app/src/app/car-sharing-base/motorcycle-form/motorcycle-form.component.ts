import { Component, OnInit, OnChanges, EventEmitter, Input, Output } from '@angular/core';
import { Motorcycle } from 'src/models/motorcycle';

@Component({
  selector: 'app-motorcycle-form',
  templateUrl: './motorcycle-form.component.html',
  styleUrls: ['./motorcycle-form.component.scss']
})
export class MotorcycleFormComponent implements OnInit, OnChanges {

  @Input() selectedMotorcycle: Motorcycle;
  @Output() changesSubmitted = new EventEmitter<boolean>();

  draftCopyOfMotorcycle: Motorcycle;

  success_class = "border border-success";
  error_class = "border border-danger";

  hasTrunk_input_CSS_class: String;
  hasMovableSplasher_input_CSS_class: String;
  hasGearBox_input_CSS_class: String;

  constructor() { 
  }

  ngOnInit() {
  }

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    this.draftCopyOfMotorcycle = Object.assign({}, this.selectedMotorcycle);
    this.hasTrunk_input_CSS_class="";
    this.hasMovableSplasher_input_CSS_class="";
    this.hasGearBox_input_CSS_class="";
  }

  submitChanges(){
    //it is necessary to call both function
    let isTrunkCorrect = this.checkTrunk();
    let isMovableSplasherCorrect = this.checkMovableSplasher();
    let isGearBoxCorrect = this.checkGearBox();
    if(isTrunkCorrect&&isMovableSplasherCorrect&&isGearBoxCorrect){
      this.selectedMotorcycle.hasTrunk=this.draftCopyOfMotorcycle.hasTrunk;
      this.selectedMotorcycle.hasMovableSplasher=this.draftCopyOfMotorcycle.hasMovableSplasher;
      this.selectedMotorcycle.hasGearBox=this.draftCopyOfMotorcycle.hasGearBox;
    }
    this.changesSubmitted.emit(isTrunkCorrect&&isMovableSplasherCorrect&&isGearBoxCorrect);
  }

  checkTrunk(){
    let choice: String = String(this.draftCopyOfMotorcycle.hasTrunk);
    if (choice == "true" ||
      choice == "false") {
      this.hasTrunk_input_CSS_class = this.success_class;
      return true;
    }
    else {
      this.hasTrunk_input_CSS_class = this.error_class;
      return false;
    }
  }

  checkMovableSplasher(){
    let choice: String = String(this.draftCopyOfMotorcycle.hasMovableSplasher);
    if (choice == "true" ||
      choice == "false") {
      this.hasMovableSplasher_input_CSS_class = this.success_class;
      return true;
    }
    else {
      this.hasMovableSplasher_input_CSS_class = this.error_class;
      return false;
    }
  }

  checkGearBox(){
    let choice: String = String(this.draftCopyOfMotorcycle.hasGearBox);
    if (choice == "true" ||
      choice == "false") {
      this.hasGearBox_input_CSS_class = this.success_class;
      return true;
    }
    else {
      this.hasGearBox_input_CSS_class = this.error_class;
      return false;
    }
  }
}
