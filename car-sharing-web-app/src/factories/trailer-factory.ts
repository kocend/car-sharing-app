import { Trailer } from 'src/models/trailer';
import { HookType } from 'src/models/hook-type.enum';


export class TrailerFactory{
    public create(): Trailer{
        let trailer = new Trailer();
        trailer.hasCover = Math.random() >=0.5;
        let randomNumber = Math.floor(Math.random()*4);
        switch(randomNumber){
            case 0: trailer.hookType = HookType.None;
            break;
            case 1: trailer.hookType = HookType.Light;
            break;
            case 2: trailer.hookType = HookType.Truck;
            break;
            case 3: trailer.hookType = HookType.HeavyTruck;
            break;
        }
        trailer.maxOverload = 101 + Math.random()*1000;
        trailer.tiresCount = Math.floor(1 + Math.random()*2)*2;
        return trailer;
    }
}
