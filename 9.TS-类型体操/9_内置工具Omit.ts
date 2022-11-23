

interface IPerson {
    name: string,
    age: number,
    slogan?: string
}

// 1.效果-忽略属性
type IPersonOmit = Omit<IPerson, "name" | "slogan">

// 2.实现
    //2.1 传进来的K必须是T中的
type myOmit<T, K extends keyof T> = {
    //2.2 首先遍历T中的key作为P 看P是否在K中 在就用never排除 
    [P in keyof T as P extends K ? never : P]: T[P]
}
type IPO = myOmit<IPerson, "name" | "slogan">
export { }
