import { Component, OnInit, Input } from '@angular/core';
import { Motorcycle } from 'src/models/motorcycle';

@Component({
  selector: 'app-motorcycle-details',
  templateUrl: './motorcycle-details.component.html',
  styleUrls: ['./motorcycle-details.component.scss']
})
export class MotorcycleDetailsComponent implements OnInit {

  @Input() motorcycle: Motorcycle;

  constructor() { }

  ngOnInit() {
  }

}
