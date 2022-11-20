
// 总结: 可以联合的尽量联合 有时候也可以考虑一下用对象来实现(21年母胎了 不考虑这个做法)

// 1. any实现
function getLength(arg) {
    return arg.length
}
// 2. 联合类型实现
type ArgType = "string" | any[]
function getLengthV1(arg :ArgType) {
    return arg.length
}

// 3. 函数重载实现
function getLengthV2(arg: string): number
function getLengthV2(arg: any[]): number
function getLengthV2(arg: any) {
    return arg.length
}

// 4. 对象类型实现 
function getLengthV3(arg: {length: number}) {
    return arg.length
}


export {}