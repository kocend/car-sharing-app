import { Component, OnInit, Input } from '@angular/core';
import { Vehicle } from 'src/models/vehicle';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss']
})
export class CarDetailsComponent implements OnInit {

  @Input() vehicle: Vehicle;

  constructor() { }

  ngOnInit() {
  }
}
