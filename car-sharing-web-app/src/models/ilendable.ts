import { LendStatus } from './lend-status.enum';
import { INamable } from './inameable';

export interface ILendable extends INamable {
    lendStatus: LendStatus;
    lendCost: number;
}
