import { Repository } from './repository';
import { Trailer } from 'src/models/trailer';
import { HookType } from 'src/models/hook-type.enum';

export class TrailerRepository extends Repository<Trailer> {
    public getByHookType(hookType: HookType): Trailer[]{
        return this.items.filter(trailer=>trailer.hookType==hookType);
    }
}
