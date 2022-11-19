// 对象类型的写法

// 1. 这样写的话相当于是一个空对象 不能读取也不能
    //1.1 info.name X -> 不能读取
let info: object = {
    name: "sheldon",
    age: 14
}
// 2. 明确指定类型
    // 2.1 类型的定义和赋值需要一一对应 不多不少
let myInfo: {
    name: string,
    age: number,
    // height: number X -> 赋值语句没有height
} = {
    name: "sheldon",
    age: 14
}
console.log(myInfo.name, myInfo.age);

// 3. type关键字
    // 3.1 ?表可选
type InfoType = {
    name: string,
    age: number,
    hair?: string
}
let sdInfo: InfoType = {
    name: "sheldon",
    age: 14
}
console.log(sdInfo.name, sdInfo.age);


export {}