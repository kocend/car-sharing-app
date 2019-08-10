import { VehicleFactory } from './vehicle-factory';
import { VehicleType } from 'src/models/vehicle-type.enum';
import { PassengerCar } from 'src/models/passenger-car';
import { ColorFactory } from './color-factory';
import { RegistrationFactory } from './registration-factory';
import { Injectable } from '@angular/core';


@Injectable()
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
        passengerCar.weight = Math.floor(this.getMinWeight()+Math.random()*(this.getMaxWeight()-this.getMinWeight()));
        passengerCar.car_mileage_in_kilometers = Math.floor(Math.random()*100000);
        passengerCar.hasGPS = Math.random() >= 0.5;
        passengerCar.hasAirConditioning = Math.random() >= 0.5;
        passengerCar.hasMultimediaSystem = Math.random() >= 0.5;
        passengerCar.hasRoofRack = Math.random() >= 0.5;
        passengerCar.power = Math.floor(60 + Math.random()*450);
        passengerCar.seats = Math.floor(1+ Math.random()*9);
        passengerCar.type = VehicleType.PassengerCar;
        passengerCar.registration_number = new RegistrationFactory().getUniqueRegistrationNumber();
        passengerCar.color = new ColorFactory().getRandomColor();
        return passengerCar;
    }

}
