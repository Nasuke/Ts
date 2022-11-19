// 数组的类型注释有两种书写方式
// 但需要注意的是 实际开发中数组里的元素类型应该要保持一致


// 1. 数组类型并且存储的是字符串
const fruits: string[] = ["apple", "banana"]
fruits.push("orange")
// fruits.push(1) X -> no 

// 2. 范型的写法
const sports: Array<string> = ["basketbal", "soccer"]
sports.push("ping-pong")

export {}