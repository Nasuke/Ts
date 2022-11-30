


type CalcFnType = (num1: number, num2: number) => number

function foo() {
    return "abc"
}
// infer关键字 可以从正在比较的类型中推断类型 在true分支里面引用结果
type MyReturnType<T extends (...arg: any[]) => any> = T extends (...arg: any[]) => infer R ? R : never
type MyParamsType<T extends (...arg: any[]) => any> = T extends (...arg: infer A) => any ? A: never

 
// 获取函数的返回值类型
type calcReturnType = MyReturnType<CalcFnType>
// 获取函数的参数类型
type calcParamsType = MyParamsType<CalcFnType>

type fooReturnType = MyReturnType<typeof foo>


export {}