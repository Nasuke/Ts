
// 函数重载
// function sum(num1: number, num2: number): numer
// function sum(num1: string, num2: string): string

// 如果想写成一个表达式
// 错误做法
// function sum(num1: number | string, num2: number | string): number | string
// 正确做法
function sum<T>(num1: T, num2: T): T extends number ? number : string 

function sum(num1: any, num2: any) {
    return num1 + num2
}

const res1 = sum(1,2)
const res2 = sum('sheldon','cooper')



export {}