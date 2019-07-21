import { VehicleType } from './vehicle-type.enum';

export class Vehicle {
   public type: VehicleType;
   public registration_number: string;
   public car_mileage_in_kilometers: number;
   public seats: number;
   public power: number;

   //fajnie jakby był jakiś enum
   public color: string;
}
