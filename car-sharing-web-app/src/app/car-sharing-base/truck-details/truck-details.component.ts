import { Component, OnInit, Input } from '@angular/core';
import { Truck } from 'src/models/truck';

@Component({
  selector: 'app-truck-details',
  templateUrl: './truck-details.component.html',
  styleUrls: ['./truck-details.component.scss']
})
export class TruckDetailsComponent implements OnInit {

  @Input() truck: Truck;

  constructor() { }

  ngOnInit() {
    console.log(this.truck.hasBedroom+"\n"+this.truck.hasCBRadio+"\n"+this.truck.maxLoad);
  }

}
