class Polygon {
    constructor(name) {
        this.name = name;
    }
    area() { // will be overwritten 
        }
    toString() {
        return `Shape is ${this.name}`;
    }
}

class Rectangle extends Polygon {
    #width;
    #height;
    constructor(width, height) {
        super("Rectangle");
        this.#width = width;
        this.#height = height;
    }
    area() {
        return this.#width * this.#height;
    }
    toString() {
        return `${super.toString()}
            Width = ${this.#width}
            Height = ${this.#height}
            Area = ${this.area()}`;
    }
}

class Square extends Polygon {
    #side;
    constructor(side) {
        super("Square");
        this.#side = side;
    }
    area() {
        return this.#side * this.#side;
    }
    toString() {
        return `${super.toString()}
            Side = ${this.#side}
            Area = ${this.area()}`;
    }
}

class Circle extends Polygon {
    #radius;
    constructor(radius) {
        super("Circle");
        this.#radius = radius;
    }
    area() {
        return Math.PI * this.#radius * this.#radius;
    }
    toString() {
        return `${super.toString()}
            Radius = ${this.#radius}
            Area = ${this.area().toFixed(3)}`;
    }
}

class Triangle extends Polygon {
    #base;
    #height;
    constructor(base, height) {
        super("Triangle");
        this.#base = base;
        this.#height = height;
    }
    area() {
        return 0.5 * this.#base * this.#height;
    }
    toString() {
        return `${super.toString()}
            Base = ${this.#base}
            Height = ${this.#height}
            Area = ${this.area()}`;
    }
}

let rect = new Rectangle(10, 5);
console.log(rect.toString());

let square = new Square(4);
console.log(square.toString());

let circle = new Circle(7);
console.log(circle.toString());

let triangle = new Triangle(8, 6);
console.log(triangle.toString());