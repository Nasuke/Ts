
// 接口可以被类实现 并且类可以实现多个接口

interface IPerson {
    name: string
    age: number
    hobby: () => void
}
interface ILin {
    skating: () => void
}


class Person implements IPerson, ILin {
    constructor(public name: string, public age: number) { }
    hobby() { }
    skating() { }
}
// 实现效果
const lin = new Person('azl', 21)
console.log(lin.name, lin.age)
lin.hobby()
lin.skating()




export {}




export {}