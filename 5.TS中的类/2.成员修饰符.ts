
// public 修饰的是在任何地方可见、公有的属性或方法，默认编写的属性就是public的
// private 修饰的是仅在同一类中可见、私有的属性或方法
// protected 修饰的是仅在类自身及子类中可见、受保护的属性或方法

class Person {
    private name = ''
    protected age!: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    show() {
        console.log(this.name); // Yes
    }
}

const p1 = new Person("sheldon", 30)
console.log(p1.name, p1.age); // X NO

class Children extends Person {
    constructor(name: string, age: number) {
        super(name, age)
    }
    eating() {
        console.log(this.name); // X no
        console.log(this.age); // Yes
    }
}









export { }