import { Component, OnInit } from '@angular/core';
import { VehicleRepository } from 'src/repositories/vehicle-repository';
import { Vehicle } from 'src/models/vehicle';

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.scss']
})
export class PriceListComponent implements OnInit {

  private vehicleList: Vehicle[];

  constructor(private readonly vehicleRepo: VehicleRepository) {
    this.vehicleList = this.vehicleRepo.getAll();
   }

  ngOnInit() {
    this.vehicleList.sort((a,b)=>{
       if(a.lendCost > b.lendCost) return 1;
       if(a.lendCost < b.lendCost) return -1;
       return 0;
      });
  }

}
