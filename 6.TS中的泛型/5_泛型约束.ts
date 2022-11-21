
// 问题: 有时我们希望传入的参数有些共性 但这些共性可能不在一个类型中
interface ILength {
    length: number
}

function printLength(item: ILength) {
    return item
}
    // 1. 类型丢失 统一变为ILength类型
const len1 = printLength('asd')
const len2 = printLength(['a', 'b'])

    // 2.  T相当于一个变量 用于记录本次调用的类型 在函数执行的整个生命周期 一直都保留着参数的类型
    //     这里表示传入的类型必须要有这个属性
function printLengthV1<T extends ILength>(item: T): T {
    return item
}
    // 没有类型丢失
const l1 = printLengthV1('asd') 
const l2 = printLengthV1(['a','b'])
const l3 = printLengthV1({ length: 6 })
const l4 = printLengthV1(123) // X no 没有length属性







export { }