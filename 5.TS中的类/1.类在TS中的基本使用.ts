

class Person {
// 1. 在ts中 默认情况下属性是需要初始化的
    // 1.1 使用默认值初始化 进行类型推导
    name = ''
    // 1.2 使用非空类型断言
    age!: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    // 1.3 不需要return 默认返回当前实例
    }
    show() {
        console.log(this.name);
        
    }
}

const p1 = new Person("sheldon", 30)
p1.show() // sheldon


export {}