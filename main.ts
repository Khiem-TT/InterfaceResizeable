import {Circle} from "./Circle";
import {Rectangle} from "./Rectangle";
import {Square} from "./Square";

let circle = new Circle('Hinh tron', 2);
console.log(`Dien tich hinh tron ban dau: ${circle.calculateArea()}`);
circle.resize();
console.log(`Dien tich hinh tron moi: ${circle.calculateArea()}`);

let rectangle = new Rectangle(2, 3, 'hinh chu nhat');
console.log(`Dien tich hinh chu nhat ban dau: ${rectangle.calculateArea()}`);
rectangle.resize();
console.log(`Dien tich hinh chu nhat moi: ${rectangle.calculateArea()}`);

let square = new Square('Hinh vuong', 3);
console.log(`Dien tich hinh vuong ban dau: ${square.calculateArea()}`);
square.resize();
console.log(`Dien tich hinh vuong moi: ${square.calculateArea()}`);
