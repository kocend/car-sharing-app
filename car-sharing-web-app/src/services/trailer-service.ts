import { BaseService } from './base-service';
import { Trailer } from 'src/models/trailer';
import { TrailerRepository } from 'src/repositories/trailer-repository';

export class TrailerService extends BaseService<Trailer> {
    constructor(trailerRepository: TrailerRepository){
        super(trailerRepository);
    }
}
