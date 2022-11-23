class Person {
    name: string
    constructor(name: string) {
        this.name = name
    }
}

// 当new操作符调用的时候 ts会认为这是一个构造函数 因为会产生一个新的对象
interface IConsPerson {
   new (name: string): Person
}


function factory(fn: IConsPerson) {
    return new fn("sheldon")
}

factory(Person)