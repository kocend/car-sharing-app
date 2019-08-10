import { BaseService } from './base-service';
import { Vehicle } from 'src/models/vehicle';
import { VehicleRepository } from 'src/repositories/vehicle-repository';

export class VehicleService extends BaseService<Vehicle> {
    constructor(vehicleRepository: VehicleRepository){
        super(vehicleRepository);
    }
}
