// 语法糖来喽~
class Person {
    // 添加一个可见性修饰符 public private protected 或者 readonly 来创建参数属性
    // 最后这些类属性字段也会得到这些修饰符
    constructor(public name: string, readonly age: number) {        
    }
}

const sheldon = new Person("sheldon", 30)

console.log(sheldon.name, sheldon.age);




export {}
