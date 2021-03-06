import {Level} from '../engine/Level';
import {Ground} from './Ground';
import {
    GroundBlocking,
    images
} from '../engine/constants'

export class Stone extends Ground {
    constructor(x: number, y: number, level: Level) {
        var blocking = GroundBlocking.all;
        super(x, y, blocking, level);
        this.setImage(images.objects, 550, 160);
    }
}