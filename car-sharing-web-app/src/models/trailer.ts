import { HookType } from './hook-type.enum';
import { ILendable } from './ilendable';


export class Trailer implements ILendable {
    public getName(): string {
        return "Trailer";
    }
    lendStatus: import("./lend-status.enum").LendStatus;
    lendCost: number;
    
    public maxOverload: number;
    public tiresCount: number;
    public hookType: HookType;
    public hasCover: boolean;
}
