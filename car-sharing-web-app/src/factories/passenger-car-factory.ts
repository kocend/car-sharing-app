import { VehicleFactory } from './vehicle-factory';
import { VehicleType } from 'src/models/vehicle-type.enum';
import { PassengerCar } from 'src/models/passenger-car';

export class PassengerCarFactory extends VehicleFactory {
    protected getMinWeight(): number {
        return 1200;
    }    
    protected getMaxWeight(): number {
        return 2500;
    }

    constructor(){
        super(VehicleType.PassengerCar);
    }

    public create(): PassengerCar{
        let passengerCar = new PassengerCar();
        passengerCar.weight = this.getMinWeight()+Math.random()*(this.getMaxWeight()-this.getMinWeight());
        passengerCar.car_mileage_in_kilometers = Math.random()*100000;
        passengerCar.hasGPS = Math.random() >= 0.5;
        passengerCar.hasAirConditioning = Math.random() >= 0.5;
        passengerCar.hasMultimediaSystem = Math.random() >= 0.5;
        passengerCar.hasRoofRack = Math.random() >= 0.5;
        passengerCar.power = 60 + Math.random()*450;
        passengerCar.seats = 1+ Math.random()*9;
        passengerCar.type = VehicleType.PassengerCar;
        passengerCar.registration_number = "ACB!@#";
        return passengerCar;
    }

}
