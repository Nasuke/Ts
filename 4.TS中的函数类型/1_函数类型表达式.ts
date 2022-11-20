
// 1. 某些语言中 可能参数名称num1和num2是可以省略 但是TypeScript是不可以的
type calcFn = (num1: number, num2: number) => number

function calc(fn: calcFn) {
    const num1 = 1
    const num2 = 2

    const res = fn(num1, num2)
    return res
}

function sum(num1: number, num2: number) {
    return num1 + num2
}
calc(sum)
// 2. 此处我们可以看到没有传参 说明ts在此处没有对参数个数进行限制 这个点之后会有补充(forEach中同样)
calc(function () {
    return 123
})


export {}