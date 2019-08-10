import { VehicleType } from 'src/models/vehicle-type.enum';
import { Injectable } from '@angular/core';

@Injectable()
export abstract class VehicleFactory {
    protected abstract getMinWeight(): number;
    protected abstract getMaxWeight(): number;

    constructor( type: VehicleType){

    }
}
