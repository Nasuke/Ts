
// 1. ts中如果一个函数没有返回值 那它返回值类型就是void
// 2. 如果返回值类型是void ts编译器也允许我们返回undefined
function sub(num1: number, num2: number): void {
    console.log(num1 + num2);
    return undefined
}

// 3. 函数类型 () => void
type fooType = () => void
let foo: fooType = () => { }

// 4. 此处forEach基于上下文的类型推导为void时 也可以返回其它值 但意义不大
const fruits: string[] = ["apple", "banana"]
fruits.forEach((item, index, array) => {
    return 1
})