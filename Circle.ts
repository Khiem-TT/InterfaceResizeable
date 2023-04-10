import {Shape} from "./Shape";
import {Rectangle} from "./Rectangle";
import {Resizeable} from "./Resizeable";

export class Circle extends Shape implements Resizeable {
    radius: number;

    constructor(name: string, radius: number) {
        super(name);
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }

    calculatePerimeter(): number {
        return Math.PI * this.radius * 2;
    }

    resize() {
        this.radius = (Math.floor(Math.random() * 100 + 1) / 100 + 1) * this.radius;
    }
}
