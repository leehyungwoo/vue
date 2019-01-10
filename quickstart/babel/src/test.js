class Polygon {
    constructor(height, width) {
        this.name = 'Polygon';
        this.height = height;
        this.width = width;
    }
}

class Square extends Polygon {
    constructor(length) {
        super(length, length);
        this.name = 'Square';
    }
}

var a = new Polygon(20, 30);
var b = new Square(50)
console.log(a)
console.log(b)