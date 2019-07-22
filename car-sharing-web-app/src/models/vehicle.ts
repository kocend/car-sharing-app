import { VehicleType } from './vehicle-type.enum';

export abstract class Vehicle {
   public type: VehicleType;
   public registration_number: string;
   public car_mileage_in_kilometers: number;
   public seats: number;
   public power: number;
   public hasAirConditioning: boolean;

   //fajnie jakby był jakiś enum
   public color: string;
}
