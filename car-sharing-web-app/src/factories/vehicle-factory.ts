import { VehicleType } from 'src/models/vehicle-type.enum';
import { Vehicle } from 'src/models/vehicle';

export abstract class VehicleFactory {
    protected abstract getMinWeight(): number;
    protected abstract getMaxWeight(): number;

    constructor( type: VehicleType){

    }

    protected fillBaseData(vehicle: Vehicle){
        vehicle.weight = this.getMinWeight()+Math.random()*(this.getMaxWeight()-this.getMinWeight());
    }
}
