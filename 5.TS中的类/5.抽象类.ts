
abstract class Shape {
// 1. 抽象类和抽象方法
    //1.1  抽象类并不能被实例化 不能通过new调用
    //1.2  抽象方法必须放到抽象类中 
    //1.3  抽象方法父类没有实现 子类自行实现且必须实现
    abstract getArea(): number
}
class Rect extends Shape {
    constructor(public width: number, public height: number) {
        super()
    }
    getArea() {
        return this.width * this.height
    }
}


class Circle extends Shape {
    constructor(public radius: number) {
        super()
    }
    getArea() {
        return 3.14 * this.radius ** 2
    }
}
// 2.多态
// 相当于 const r1: Shape = new Rect(3, 4)
// 可以理解成 父类引用指向子类对象 这就是多态!!!
function calcArea(shape: Shape) {
    return shape.getArea()
}

console.log(calcArea(new Rect(3, 4)));
console.log(calcArea(new Circle(3)));






export {}