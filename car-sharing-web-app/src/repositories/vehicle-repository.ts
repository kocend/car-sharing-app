import { Repository } from './repository';
import { Vehicle } from 'src/models/vehicle';
import { VehicleType } from 'src/models/vehicle-type.enum';

export class VehicleRepository extends Repository<Vehicle> {
    public getByVehicleType(vehicleType: VehicleType): Vehicle[]{
        return this.items.filter(vehicle=>vehicle.type==vehicleType);
    }
}
