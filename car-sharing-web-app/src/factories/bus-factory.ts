import { Bus } from 'src/models/bus';
import { VehicleFactory } from './vehicle-factory';
import { VehicleType } from 'src/models/vehicle-type.enum';
import { Colors } from 'src/models/colors.enum';
import { ColorFactory } from './color-factory';
import { RegistrationFactory } from './registration-factory';
import { Injectable } from '@angular/core';

@Injectable()
export class BusFactory extends VehicleFactory {
    protected getMinWeight(): number {
        return 3000;
    }
    protected getMaxWeight(): number {
        return 20000;
    }

    constructor(){
        super(VehicleType.Bus);
    }

    create(): Bus {
        let bus = new Bus();
        bus.weight = Math.floor(this.getMinWeight()+Math.random()*(this.getMaxWeight()-this.getMinWeight()));
        bus.car_mileage_in_kilometers = Math.floor(Math.random()*100000);
        bus.doorsCount = Math.floor(Math.random()*10);
        bus.hasAirConditioning = Math.random() >= 0.5;
        bus.hasToilet = Math.random() >= 0.5;
        bus.power = Math.floor(100 + Math.random()*500);
        bus.seats = Math.floor(1+ Math.random()*80);
        bus.type = VehicleType.Bus;
        bus.registration_number = new RegistrationFactory().getUniqueRegistrationNumber();
        bus.color = new ColorFactory().getRandomColor();
        return bus;
    }
}
