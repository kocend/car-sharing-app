import { Component, OnInit, Input } from '@angular/core';
import { PassengerCar } from 'src/models/passenger-car';

@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrls: ['./passenger-details.component.scss']
})
export class PassengerDetailsComponent implements OnInit {

  @Input() passengerCar: PassengerCar;

  constructor() { }

  ngOnInit() {
  }

}
