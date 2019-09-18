import { HookType } from './hook-type.enum';
import { ILendable } from './ilendable';
import { LendStatus } from './lend-status.enum';


export class Trailer implements ILendable {
    public getName(): string {
        return "Trailer";
    }
    lendStatus: LendStatus;
    lendCost: number;
    
    public maxOverload: number;
    public tiresCount: number;
    public hookType: HookType;
    public hasCover: boolean;
}
