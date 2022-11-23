
interface IPerson {
    name: string,
    age: number,
    slogan?: string
}

// 1.效果-部分属性
type IPersonPick= Pick<IPerson, "name" | "age">

// 2.实现
    //2.1 传进来的K必须是T中的
type myPick<T, K extends keyof T> = {
    [P in K]: T[P]
}
type IPO = myPick<IPerson, "name" | "age">
export { }