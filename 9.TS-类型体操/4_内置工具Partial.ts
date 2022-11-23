
interface IPerson {
    name: string,
    age: number
}



// 1.效果-把属性都变成可选的
type IPersonOptional = Partial<IPerson>

// 2.实现(映射)
type myPartital<T> = {
    [P in keyof T]?: T[P]
}
type IPO = myPartital<IPerson>
export {}