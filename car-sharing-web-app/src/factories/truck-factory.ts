import { VehicleFactory } from './vehicle-factory';
import { VehicleType } from 'src/models/vehicle-type.enum';
import { Truck } from 'src/models/truck';
import { ColorFactory } from './color-factory';
import { RegistrationFactory } from './registration-factory';
import { Injectable } from '@angular/core';

@Injectable()
export class TruckFactory extends VehicleFactory {
    protected getMinWeight(): number {
        return 3000;
    }    
    protected getMaxWeight(): number {
       return 150000;
    }

    constructor(){
        super(VehicleType.Truck)
    }

    public create(): Truck{
        let truck = new Truck();
        truck.weight = Math.floor(this.getMinWeight()+Math.random()*(this.getMaxWeight()-this.getMinWeight()));
        truck.car_mileage_in_kilometers = Math.floor(Math.random()*100000);
        truck.hasBedroom = Math.random() >=0.5
        truck.hasAirConditioning = Math.random() >= 0.5;
        truck.hasCBRadio = Math.random() >= 0.5;
        truck.maxLoad = Math.floor(20 + Math.random()*30);
        truck.power = Math.floor(300 + Math.random()*1200);
        truck.seats = Math.floor(1+ Math.random()*3);
        truck.type = VehicleType.Truck;
        truck.registration_number = new RegistrationFactory().getUniqueRegistrationNumber();
        truck.color = new ColorFactory().getRandomColor();
        return truck;
    }
}
