import { ILendable } from 'src/models/ilendable';
import { LendStatus } from 'src/models/lend-status.enum';

export class LendService {

    public lend(object: ILendable): void{
        if(object.lendStatus!=LendStatus.ReadyToBorrow){
            console.log("sorry, i cannot lend this vehicle");
        }
        else{
            object.lendStatus=LendStatus.Borrowed;
        }
    }

    public finishLend(object: ILendable): void{
        if(object.lendStatus!=LendStatus.Borrowed){
            console.log("sorry, i cannot end rental of this vehicle");
        }
        else{
            object.lendStatus=LendStatus.ReadyToBorrow;
        }
    }
}
