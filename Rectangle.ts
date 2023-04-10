import {Shape} from "./Shape";
import {Resizeable} from "./Resizeable";

export class Rectangle extends Shape implements Resizeable {
    width: number;
    height: number;

    constructor(width: number,
                height: number,
                name: string) {
        super(name);
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }

    calculatePerimeter(): number {
        return (this.width + this.height) * 2;
    }

    resize() {
        this.width = (Math.floor(Math.random() * 100 + 1) / 100 + 1) * this.width;
        this.height = (Math.floor(Math.random() * 100 + 1) / 100 + 1) * this.height;
    }
}
