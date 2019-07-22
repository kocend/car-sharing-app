import { Bus } from 'src/models/bus';
import { VehicleFactory } from './vehicle-factory';
import { VehicleType } from 'src/models/vehicle-type.enum';

export class BusFactory extends VehicleFactory {

    constructor(){
        super(VehicleType.Bus);
    }

    create(): Bus {
        return new Bus();
    }
}
