//// [sourceMap-FileWithComments.ts]

// Interface
interface IPoint {
    getDist(): number;
}

// Module
module Shapes {

    // Class
    export class Point implements IPoint {
        // Constructor
        constructor(public x: number, public y: number) { }

        // Instance member
        getDist() { return Math.sqrt(this.x * this.x + this.y * this.y); }

        // Static member
        static origin = new Point(0, 0);
    }

    // Variable comment after class
    var a = 10;

    export function foo() {
    }

    /**  comment after function
    * this is another comment 
    */
    var b = 10;
}

/** Local Variable */
var p: IPoint = new Shapes.Point(3, 4);
var dist = p.getDist();

//// [sourceMap-FileWithComments.js]
var Shapes;
(function (Shapes) {
    var Point = (function () {
        function Point(x, y) {
            this.x = x;
            this.y = y;
        }
        Point.prototype.getDist = function () {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        };
        Point.origin = new Point(0, 0);
        return Point;
    })();
    Shapes.Point = Point;
    var a = 10;
    function foo() {
    }
    Shapes.foo = foo;
    var b = 10;
})(Shapes || (Shapes = {}));
var p = new Shapes.Point(3, 4);
var dist = p.getDist();
//# sourceMappingURL=sourceMap-FileWithComments.js.map