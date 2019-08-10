import { LendService } from './lend-service';
import { ILendable } from 'src/models/ilendable';
import { VehicleService } from './vehicle-service';
import { TrailerService } from './trailer-service';
import { Vehicle } from 'src/models/vehicle';

export class LoggerService {

    constructor(private lendService: LendService,
                private vehicleService: VehicleService,
                private trailerService: TrailerService){
        this.subscribe();
    }

    private subscribe(){
        this.lendService.onObjectLended().subscribe(l => this.onObjectLended(l));
        this.lendService.onObjectRentalEnd().subscribe(l => this.onObjectRentalEnd(l));
        this.vehicleService.onBeforeObjectAdd().subscribe(l =>this.onAfterObjectAdd(l));
        this.vehicleService.onAfterObjectAdd().subscribe(l =>this.onBeforeObjectAdd(l));
        this.vehicleService.onBeforeObjectDelete().subscribe(l =>this.onBeforeObjectDelete(l));
        this.vehicleService.onAfterObjectDelete().subscribe(l =>this.onAfterObjectDelete(l));
        this.trailerService.onBeforeObjectAdd().subscribe(l =>this.onAfterObjectAdd(l));
        this.trailerService.onAfterObjectAdd().subscribe(l =>this.onBeforeObjectAdd(l));
        this.trailerService.onBeforeObjectDelete().subscribe(l =>this.onBeforeObjectDelete(l));
        this.trailerService.onAfterObjectDelete().subscribe(l =>this.onAfterObjectDelete(l));
    }

    private onObjectLended(l: ILendable){
        this.log(l.getName() + " has been lended.");
    }

    private onObjectRentalEnd(l: ILendable){
        this.log("rental of " +l.getName()+ " has been ended");
    }

    private onBeforeObjectAdd(l: ILendable){
        this.log(l.getName() + " will be added.");
    }

    private onAfterObjectAdd(l: ILendable){
        this.log(l.getName() + " has been added.");
    }

    private onBeforeObjectDelete(l: ILendable){
        this.log(l.getName() + " will be deleted.");
    }

    private onAfterObjectDelete(l: ILendable){
        this.log(l.getName() + " has been deleted.");
    }



    public log(message: string):void{
        console.log(message);
    }
}
