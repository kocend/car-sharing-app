import { Subject, Observable } from 'rxjs';
import { ILendable } from 'src/models/ilendable';
import { Repository } from 'src/repositories/repository';
import { Injectable } from '@angular/core';

@Injectable()
export abstract class BaseService<T> {

    private onBeforeObjectAddEvent: Subject<T> = new Subject<T>();
    private onAfterObjectAddEvent: Subject<T> = new Subject<T>();
    private onBeforeObjectDeleteEvent: Subject<T> = new Subject<T>();
    private onAfterObjectDeleteEvent: Subject<T> = new Subject<T>();

    constructor(protected repository: Repository<T>){}

    public add(object: T){
        this.actionBeforeAdd(object);
        this.onBeforeObjectAddEvent.next(object);
        this.addObjectToRepository(object);
        this.actionAfterAdd(object);
        this.onAfterObjectAddEvent.next(object);
    }

    public delete(object: T){
        this.actionBeforeDelete(object);
        this.onBeforeObjectDeleteEvent.next(object);
        this.deleteObjectFromRepository(object);
        this.actionAfterDelete(object);
        this.onAfterObjectDeleteEvent.next(object);
    }

    public getAll(): T[]{
        return this.repository.getAll();
    }

    public deleteLastAddedObject(){
        this.popLastObjectFromRepository();
    }

    public onBeforeObjectAdd(): Observable<T>{
        return this.onBeforeObjectAddEvent.asObservable();
    }

    public onAfterObjectAdd(): Observable<T>{
        return this.onAfterObjectAddEvent.asObservable();
    }

    public onBeforeObjectDelete(): Observable<T>{
        return this.onBeforeObjectDeleteEvent.asObservable();
    }

    public onAfterObjectDelete(): Observable<T>{
        return this.onAfterObjectDeleteEvent.asObservable();
    }



    protected actionBeforeAdd(object: T){}
    protected actionAfterAdd(object: T){}

    protected actionBeforeDelete(object: T){}
    protected actionAfterDelete(object: T){}

    protected addObjectToRepository(object: T){
        this.repository.add(object);
    }

    protected deleteObjectFromRepository(object: T){
        this.repository.delete(object);
    }

    protected popLastObjectFromRepository(){
        this.repository.deleteLastAddedElement();
    }





}
