import { VehicleFactory } from './vehicle-factory';
import { VehicleType } from 'src/models/vehicle-type.enum';
import { Motorcycle } from 'src/models/motorcycle';
import { ColorFactory } from './color-factory';
import { RegistrationFactory } from './registration-factory';

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
        motorcycle.weight = Math.floor(this.getMinWeight()+Math.random()*(this.getMaxWeight()-this.getMinWeight()));
        motorcycle.car_mileage_in_kilometers = Math.floor(Math.random()*100000);
        motorcycle.hasGearBox = Math.random() >= 0.5;
        motorcycle.hasAirConditioning = Math.random() >= 0.5;
        motorcycle.hasMovableSplasher = Math.random() >= 0.5;
        motorcycle.hasTrunk = Math.random() >= 0.5;
        motorcycle.power = Math.floor(10 + Math.random()*300);
        motorcycle.seats = Math.floor(1+ Math.random()*2);
        motorcycle.type = VehicleType.Motorcycle;
        motorcycle.registration_number = new RegistrationFactory().getUniqueRegistrationNumber();
        motorcycle.color = new ColorFactory().getRandomColor();
        return motorcycle;
    }

    
}
