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

  success = "border border-success";
  error = "border border-danger";

  hasToilet: String;
  doorsCount: String;

  constructor() { 
  }

  ngOnInit() {
  }

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    this.draftCopyOfBus = Object.assign({}, this.selectedBus);
    this.hasToilet="";
    this.doorsCount="";
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
      this.hasToilet = this.success;
      return true;
    }
    else {
      this.hasToilet = this.error;
      return false;
    }
  }

  checkDoorsCount(){
    if(this.draftCopyOfBus.doorsCount>0 && this.draftCopyOfBus.doorsCount<11){
      this.doorsCount=this.success;
      return true;
    }
    else{
      this.doorsCount=this.error;
      return false;
    }
  }

}
