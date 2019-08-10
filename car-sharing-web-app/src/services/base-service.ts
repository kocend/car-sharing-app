import { Subject, Observable } from 'rxjs';
import { ILendable } from 'src/models/ilendable';
import { Repository } from 'src/repositories/repository';

export abstract class BaseService<T> {

    private onBeforeObjectAddEvent: Subject<T> = new Subject<T>();
    private onAfterObjectAddEvent: Subject<T> = new Subject<T>();

    constructor(protected repository: Repository<T>){}

    public add(object: T){
        this.actionBeforeAdd(object);
        this.onBeforeObjectAdd();
        this.addObjectToRepository(object);
        this.actionAfterAdd(object);
        this.onAfterObjectAdd();
    }

    public onBeforeObjectAdd(): Observable<T>{
        return this.onBeforeObjectAddEvent.asObservable();
    }

    public onAfterObjectAdd(): Observable<T>{
        return this.onAfterObjectAddEvent.asObservable();
    }

    protected actionBeforeAdd(object: T){}
    protected actionAfterAdd(object: T){}

    protected addObjectToRepository(object: T){
        this.repository.add(object);
    }





}
