import { VehicleFactory } from './vehicle-factory';
import { VehicleType } from 'src/models/vehicle-type.enum';
import { Truck } from 'src/models/truck';

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
        truck.weight = this.getMinWeight()+Math.random()*(this.getMaxWeight()-this.getMinWeight());
        truck.car_mileage_in_kilometers = Math.random()*100000;
        truck.hasBedroom = Math.random() >=0.5
        truck.hasAirConditioning = Math.random() >= 0.5;
        truck.hasCBRadio = Math.random() >= 0.5;
        truck.power = 300 + Math.random()*1200;
        truck.seats = 1+ Math.random()*3;
        truck.type = VehicleType.Truck;
        truck.registration_number = "ACB!@#";
        return truck;
    }
}
