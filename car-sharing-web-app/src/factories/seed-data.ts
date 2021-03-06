import { VehicleRepository } from 'src/repositories/vehicle-repository';
import { BusFactory } from './bus-factory';
import { MotorcycleFactory } from './motorcycle-factory';
import { PassengerCarFactory } from './passenger-car-factory';
import { TruckFactory } from './truck-factory';
import { Injectable } from '@angular/core';
import { TrailerRepository } from 'src/repositories/trailer-repository';
import { TrailerFactory } from './trailer-factory';

@Injectable()
export class SeedData {

    constructor(private readonly repository: VehicleRepository,
                private readonly trailerRepository: TrailerRepository,
                private readonly trailerFactory: TrailerFactory,
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
            this.repository.items[i].lendCost = Math.floor(100 + Math.random()*2000);
        }

        for(let i = 0; i < amount; i++){
            this.trailerRepository.add(this.trailerFactory.create());
            this.trailerRepository.items[i].lendCost = Math.floor(50 + Math.random()*1000);
        }
    }
}
