import { Component, OnInit, Input } from '@angular/core';
import { Bus } from 'src/models/bus';

@Component({
  selector: 'app-bus-form',
  templateUrl: './bus-form.component.html',
  styleUrls: ['./bus-form.component.scss']
})
export class BusFormComponent implements OnInit {

  @Input() selectedBus: Bus;

  success = "border border-success";
  error = "border border-danger";

  hasToilet: String;
  doorsCount: String;

  constructor() { }

  ngOnInit() {
  }

  checkToilet(){
//TODO
  }

  checkDoorsCount(){
//TODO
  }

}
