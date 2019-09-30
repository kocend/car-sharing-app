import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Bus } from 'src/models/bus';

@Component({
  selector: 'app-bus-form',
  templateUrl: './bus-form.component.html',
  styleUrls: ['./bus-form.component.scss']
})
export class BusFormComponent implements OnInit, OnChanges {

  @Input() selectedBus: Bus;
  @Output() changesSubmitted = new EventEmitter<boolean>();

  draftCopyOfBus: Bus;

  success_class = "border border-success";
  error_class = "border border-danger";

  hasToilet_input_CSS_class: String;
  doorsCount_input_CSS_class: String;

  constructor() { 
  }

  ngOnInit() {
  }

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    this.draftCopyOfBus = Object.assign({}, this.selectedBus);
    this.hasToilet_input_CSS_class="";
    this.doorsCount_input_CSS_class="";
  }

  submitChanges(){
    //it is necessary to call both function
    let isToiletCorrect = this.checkToilet();
    let isDoorsCountCorrect = this.checkDoorsCount();
    if(isToiletCorrect&&isDoorsCountCorrect){
      this.selectedBus.hasToilet=this.draftCopyOfBus.hasToilet;
      this.selectedBus.doorsCount=this.draftCopyOfBus.doorsCount;
    }
    this.changesSubmitted.emit(isToiletCorrect&&isDoorsCountCorrect);
  }

  checkToilet(){
    let choice: String = String(this.draftCopyOfBus.hasToilet);
    if (choice == "true" ||
      choice == "false") {
      this.hasToilet_input_CSS_class = this.success_class;
      return true;
    }
    else {
      this.hasToilet_input_CSS_class = this.error_class;
      return false;
    }
  }

  checkDoorsCount(){
    if(this.draftCopyOfBus.doorsCount>0 && this.draftCopyOfBus.doorsCount<11){
      this.doorsCount_input_CSS_class=this.success_class;
      return true;
    }
    else{
      this.doorsCount_input_CSS_class=this.error_class;
      return false;
    }
  }
}
