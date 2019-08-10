import { BaseService } from './base-service';
import { Vehicle } from 'src/models/vehicle';
import { VehicleRepository } from 'src/repositories/vehicle-repository';
import { Injectable } from '@angular/core';

@Injectable()
export class VehicleService extends BaseService<Vehicle> {
    constructor(vehicleRepository: VehicleRepository){
        super(vehicleRepository);
    }
}
