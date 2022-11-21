



// 在之前的学习中 函数的参数我们会用类型注释来确定类型
// 但实际上类型也可以参数化

function print<Type>(arg: Type): Type {
    return arg
}
// 1. 完整写法
const resNumber = print<number>(123) // number
const resString = print<string>("sheldon") // string
const resObj = print<object>({ name: 'cooper' }) // object

// 2. 缩略写法 会自动进行类型推导
    // 2.1 const推导出为字面量类型
const abbNum = print(123)
const abbStr = print("sheldon")
const abbObj = print({ name: 'cooper' })
    // 2.2 let 推导与1一致
let addNumber = print(123)


 

export {}