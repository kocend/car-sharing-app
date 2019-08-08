import { Bus } from 'src/models/bus';
import { VehicleFactory } from './vehicle-factory';
import { VehicleType } from 'src/models/vehicle-type.enum';

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
        bus.weight = this.getMinWeight()+Math.random()*(this.getMaxWeight()-this.getMinWeight());
        bus.car_mileage_in_kilometers = Math.random()*100000;
        bus.doorsCount = Math.random()*10;
        bus.hasAirConditioning = Math.random() >= 0.5;
        bus.hasToilet = Math.random() >= 0.5;
        bus.power = 100 + Math.random()*500;
        bus.seats = 1+ Math.random()*80;
        bus.type = VehicleType.Bus;
        bus.registration_number = "ACB!@#";
        return bus;
    }
}
