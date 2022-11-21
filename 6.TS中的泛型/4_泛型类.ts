class Point<T> {
    constructor(public x:T, public y:T){}
}

const p1 = new Point(3, 4)
console.log(p1.x, p1.y);

const p2 = new Point('3', '4')
console.log(p2.x, p2.y);



export {}