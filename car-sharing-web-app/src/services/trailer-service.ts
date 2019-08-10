import { BaseService } from './base-service';
import { Trailer } from 'src/models/trailer';
import { TrailerRepository } from 'src/repositories/trailer-repository';
import { Injectable } from '@angular/core';

@Injectable()
export class TrailerService extends BaseService<Trailer> {
    constructor(trailerRepository: TrailerRepository){
        super(trailerRepository);
    }
}
