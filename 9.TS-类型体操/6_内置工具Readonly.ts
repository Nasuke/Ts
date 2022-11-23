interface IPerson {
    name: string,
    age: number
}

// 1.效果-把属性都变成只读
type IPersonReadonly = Readonly<IPerson>

// 2.实现(映射)
type myReadonly<T> = {
    readonly[P in keyof T]: T[P]
}
type IPO = myReadonly<IPerson>
export { }