interface IPerson {
    name: string,
    age: number
}
type city = "LA" | "NY" | "GS" 

// 1.效果- 把city中联合类型每个成员作为key IPerson作为值
type IPersonRecord = Record<city,IPerson>

// 2.实现
    // 2.1 可以作为联合类型的就是以下三种
type Res = keyof any // string | number | symbol
    // 2.2 确保K一定是作为联合类型的key
type myRecord<K extends keyof any,T> = {
    [P in K]?: T
}
type IPO = myRecord<city, IPerson>

const LAP: IPO = {
    "GS": {
        name: 'sd',
        age:14
    },
    "NY": {
        name: 'le',
        age: 41
    }
}

export { }