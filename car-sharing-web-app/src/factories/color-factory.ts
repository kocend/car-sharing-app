import { Colors } from 'src/models/colors.enum';

export class ColorFactory {

    public getRandomColor(): Colors{
        let randomNumber = Math.floor(Math.random()*7);

        switch(randomNumber){
            case 0: return Colors.purple;
            case 1: return Colors.navy_blue;
            case 2: return Colors.blue;
            case 3: return Colors.green;
            case 4: return Colors.yellow;
            case 5: return Colors.orange;
            case 6: return Colors.red;
        }
    }
}
