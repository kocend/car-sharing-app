import { Component, OnInit, Input } from '@angular/core';
import { Bus } from 'src/models/bus';

@Component({
  selector: 'app-bus-details',
  templateUrl: './bus-details.component.html',
  styleUrls: ['./bus-details.component.scss']
})
export class BusDetailsComponent implements OnInit {

  @Input() bus: Bus;

  constructor() { }

  ngOnInit() {
  }

}
