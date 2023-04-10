import {Rectangle} from "./Rectangle";
import {Resizeable} from "./Resizeable";

export class Square extends Rectangle implements Resizeable {
    constructor(name: string,
                width: number) {
        super(width, width, name);
    }

    calculateArea(): number {
        return super.calculateArea();
    }

    calculatePerimeter(): number {
        return super.calculatePerimeter();
    }

    resize() {
        this.width = (Math.floor(Math.random() * 100 + 1) / 100 + 1) * this.width;
    }
}
