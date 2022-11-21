
// 1.背景: 有时候一个类型基于另一个类型 但是不想拷贝 这时候可以使用映射类型
// 1.1 大部分内置的工具都是通过映射类型来实现的
// 1.2 大多数类型体操的题目也是通过映射类型完成的
// 1.3 映射类型由type实现

type mapPerson<T> = {
    // in循环T中键名(联合类型)创建一个类型
    [property in keyof T]: T[property]
}

interface IPerson {
    name: string,
    age: number
}
    // 2. 映射成功
type NewPerson = mapPerson<IPerson>











export {}