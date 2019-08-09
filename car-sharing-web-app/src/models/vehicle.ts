import { VehicleType } from './vehicle-type.enum';
import { Colors } from './colors.enum';

export abstract class Vehicle {
   public type: VehicleType;
   public registration_number: string;
   public car_mileage_in_kilometers: number;
   public seats: number;
   public power: number;
   public weight: number;
   public hasAirConditioning: boolean;

   //fajnie jakby był jakiś enum
   public color: Colors;

   public toString(): String{
      return "type of vehicle: " + this.type + "\n"
             + "registration number: " + this.registration_number + "\n"
             + "car mileage(km): " + this.car_mileage_in_kilometers + "\n"
             + "amount of seats: " + this.seats + "\n"
             + "power(hp): " + this.power + "\n"
             + "weight(kg): " + this.weight + "\n"
             + "has air conditioning: " + this.hasAirConditioning + "\n"
             + "color: " + this.color + "\n";
   }
}
