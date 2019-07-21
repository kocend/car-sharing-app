import { LoanStatus } from './loan-status.enum';
import { Client } from './client';
import { Vehicle } from './vehicle';

export class LoanInfo {
    public status: LoanStatus;
    public borrowDate: Date;
    public costPerKilometer: number;
    public additionalInsurance: boolean;
    public client: Client;
    public vehicle: Vehicle;
    public notes: string;
}
