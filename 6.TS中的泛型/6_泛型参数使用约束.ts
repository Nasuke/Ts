// 1. 解决问题
// 实现一个函数通过key去拿obj中对应的value 对obj和key(key必须是obj中的key)进行约束

// 2. 先了解一个操作符 keyof
interface ILin {
    name: string,
    age: number
}
type lin = keyof ILin // 相当于 "name" | "age"的联合类型

// 约束key必须为Object中的key
function getProperty<O, K extends keyof O>(obj: O, key: K) {
    return obj[key]
}

const Lin = {
    name: 'lin',
    age: 21
}
getProperty(Lin, 'name')
// 3. 约束成功: 类型“"qz"”的参数不能赋给类型“"name" | "age"”的参数
getProperty(Lin, 'qz') 




export {}
