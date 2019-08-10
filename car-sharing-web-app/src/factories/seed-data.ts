import { Repository } from 'src/repositories/repository';
import { VehicleRepository } from 'src/repositories/vehicle-repository';
import { BusFactory } from './bus-factory';
import { MotorcycleFactory } from './motorcycle-factory';
import { PassengerCarFactory } from './passenger-car-factory';
import { TruckFactory } from './truck-factory';
import { Injectable } from '@angular/core';

@Injectable()
export class SeedData {

    constructor(private readonly repository: VehicleRepository,
                private readonly busFactory: BusFactory,
                private readonly motorcycleFactory: MotorcycleFactory,
                private readonly passengerCarFactory: PassengerCarFactory,
                private readonly truckFactory: TruckFactory){
    }

    public seed(amount: number): void{

        //console.log("amount: "+ amount);

        //console.log("beginning od seed function");

        for(let i = 0; i < amount; i++){
            //console.log("beginning of for ");
            let type = Math.floor(Math.random()*4);
            //console.log("generated number: "+type);
            switch(type){
                case 0: this.repository.add(this.busFactory.create());
                //console.log("case 0");
                break;
                case 1: this.repository.add(this.motorcycleFactory.create());
                //console.log("case 1");
                break;
                case 2: this.repository.add(this.passengerCarFactory.create());
                //console.log("case 2");
                break;
                case 3: this.repository.add(this.truckFactory.create());
                //console.log("case 3");
                break;
            }
        }

        console.log("amount od elements in repo: " + this.repository.getAll().length);

        //console.log("end of seed function");
    }


}
