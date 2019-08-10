import { Repository } from './repository';
import { Vehicle } from 'src/models/vehicle';
import { VehicleType } from 'src/models/vehicle-type.enum';
import { Injectable } from '@angular/core';

@Injectable()
export class VehicleRepository extends Repository<Vehicle> {
    public getByVehicleType(vehicleType: VehicleType): Vehicle[]{
        let specifiedVehicleList: Vehicle[] = this.items.filter(vehicle=>vehicle.type==vehicleType);
        console.log(specifiedVehicleList.length);
        return specifiedVehicleList;
    }
}
