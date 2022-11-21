
// 1. 函数的调用方式很多 所以不能自行进行类型推断
function sumNum(num1: number, num2: number) {
    return num1 + num2
}

sumNum(1,2)
// sumNum(1,'3') X -> no

export {}