
interface IPerson {
    name?: string,
    age?: number
}

// 1.效果-把属性都变成必选的
type IPersonRequired = Required<IPerson>

// 2.实现(映射)
type myRequired<T> = {
    [P in keyof T]-?: T[P]
}
type IPO = myRequired<IPerson>
export { }