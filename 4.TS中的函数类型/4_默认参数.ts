

// 1. 如果使用默认参数 参数的类型注解可以省略
// 2. 有默认值的参数 我们也可以传入一个undefiend
function foo(x: number, y = 100) {
    
}
foo(5)
foo(10, undefined)

export {}