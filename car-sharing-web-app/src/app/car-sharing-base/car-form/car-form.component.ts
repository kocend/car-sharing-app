import { Component, OnInit, Input } from '@angular/core';
import { Vehicle } from 'src/models/vehicle';
import { VehicleRepository } from 'src/repositories/vehicle-repository';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.scss']
})
export class CarFormComponent implements OnInit {

  @Input() selectedVehicle: Vehicle;

  constructor(private vehicleRepo: VehicleRepository) { }


  ngOnInit() {
  }

}
