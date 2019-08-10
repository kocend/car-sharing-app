import { ILendable } from 'src/models/ilendable';
import { LendStatus } from 'src/models/lend-status.enum';
import { Subject, Observable } from 'rxjs';

export class LendService {

    private  onObjectLendedEvent: Subject<ILendable> = new Subject<ILendable>();
    private  onObjectRentalEndEvent: Subject<ILendable> = new Subject<ILendable>();

    public onObjectLended(): Observable<ILendable>{
        return this.onObjectLendedEvent.asObservable();
    }

    public onObjectRentalEnd(): Observable<ILendable>{
        return this.onObjectRentalEndEvent.asObservable();
    }

    public lend(object: ILendable): void{
        if(object.lendStatus!=LendStatus.ReadyToBorrow){
            console.log("sorry, i cannot lend this vehicle");
        }
        else{
            object.lendStatus=LendStatus.Borrowed;
            this.onObjectLendedEvent.next(object);
        }
    }

    public finishLend(object: ILendable): void{
        if(object.lendStatus!=LendStatus.Borrowed){
            console.log("sorry, i cannot end rental of this vehicle");
        }
        else{
            object.lendStatus=LendStatus.ReadyToBorrow;
            this.onObjectRentalEndEvent.next();
        }
    }
}
