import { LendStatus } from './lend-status.enum';

export interface ILendable {
    lendStatus: LendStatus;
    lendCost: number;
}
