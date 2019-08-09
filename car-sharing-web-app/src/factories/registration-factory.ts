
export class RegistrationFactory {

    public getUniqueRegistrationNumber(): string{

        let registrationNumber: String ="";

        registrationNumber += String.fromCharCode(Math.floor(65 + Math.random()*26));
        registrationNumber += String.fromCharCode(Math.floor(65 + Math.random()*26));
        registrationNumber += " ";
        registrationNumber += Math.floor(Math.random()*100000).toString();

        return registrationNumber.toString();
    }
}
