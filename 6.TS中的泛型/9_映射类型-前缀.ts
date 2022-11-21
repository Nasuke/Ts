// 1. 通过前缀 - 或者 + 删除或者添加这些修饰符 如果没有写前缀，相当于使用了 + 前缀

type mapPerson<T> = {
    // 2. 我要定制化！！！(╯▔皿▔)╯
    -readonly [property in keyof T] -?: T[property]
}

interface IPerson {
    readonly name: string,
    age: number,
    height?: number
}
type NewPerson = mapPerson<IPerson>

const lin: NewPerson = { name: 'azl', age: 21, height: 108 }
    // 3. 六根清净 才没有什么?和readonly来打扰
lin.name = 'lcz'

export {}