import { VehicleFactory } from './vehicle-factory';
import { VehicleType } from 'src/models/vehicle-type.enum';
import { Motorcycle } from 'src/models/motorcycle';

export class MotorcycleFactory extends VehicleFactory {
    protected getMinWeight(): number {
        return 50;
    }    
    
    protected getMaxWeight(): number {
        return 300;
    }

    constructor(){
        super(VehicleType.Bus);
    }

    public create(): Motorcycle{
        let motorcycle = new Motorcycle();
        motorcycle.weight = this.getMinWeight()+Math.random()*(this.getMaxWeight()-this.getMinWeight());
        motorcycle.car_mileage_in_kilometers = Math.random()*100000;
        motorcycle.hasGearBox = Math.random() >= 0.5;
        motorcycle.hasAirConditioning = Math.random() >= 0.5;
        motorcycle.hasMovableSplasher = Math.random() >= 0.5;
        motorcycle.hasTrunk = Math.random() >= 0.5;
        motorcycle.power = 10 + Math.random()*300;
        motorcycle.seats = 1+ Math.random()*2;
        motorcycle.type = VehicleType.Motorcycle;
        motorcycle.registration_number = "ACB!@#";
        return motorcycle;
    }

    
}
