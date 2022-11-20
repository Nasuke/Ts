
// 先给出总分 再去看区别
// 1. 总结: 如果是非对象类型的定义就用type 如果是对象类型的声明就用interface



// 2. 区别
// 2.1 interface只能用于定义对象类型
interface Ipoint {
    x: number,
    y: number
}

// 2.2 interface可多次定义(但都得满足)
interface Ipoint {
    z: number
}
const cdu: Ipoint = {x: 1, y: 2, z : 3}

// 2.3 interface支持继承 所以拓展性也高
interface Ischool extends Ipoint {
    city: string
}
const mySchool: Ischool = { x: 1, y: 2, z: 3, city: 'cd'}

// 2.4 interface可以被类实现
// class Position implements Ipoint {

// }


export {}