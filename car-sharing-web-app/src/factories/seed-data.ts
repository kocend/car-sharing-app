import { Repository } from 'src/repositories/repository';
import { VehicleRepository } from 'src/repositories/vehicle-repository';
import { BusFactory } from './bus-factory';
import { MotorcycleFactory } from './motorcycle-factory';
import { PassengerCarFactory } from './passenger-car-factory';
import { TruckFactory } from './truck-factory';

export class SeedData {
    
    private repository: VehicleRepository;

    constructor(repository: VehicleRepository){
        this.repository = repository;
    }

    public seed(amount: number): void{

        let busFactory = new BusFactory();
        let motorcycleFactory = new MotorcycleFactory();
        let passengerCarFactory = new PassengerCarFactory();
        let truckFactory = new TruckFactory();

        for(let i = 0; i < amount; i++){
            let type = Math.random()*4;
            switch(type){
                case 0: this.repository.add(busFactory.create());
                break;
                case 1: this.repository.add(motorcycleFactory.create());
                break;
                case 2: this.repository.add(passengerCarFactory.create());
                break;
                case 3: this.repository.add(truckFactory.create());
                break;
            }
        }
    }


}
