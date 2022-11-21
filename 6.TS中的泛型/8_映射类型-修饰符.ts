// 1. 映射类型中的修饰符: readonly | ?


type mapPerson<T> = {
    readonly[property in keyof T]?: T[property]
}

interface IPerson {
    name: string,
    age: number
}
type NewPerson = mapPerson<IPerson>

const lin: NewPerson = { name: 'azl', age: 21 }
// 2. 修改失败 name是只读属性
lin.name = 'lcz'









export {}