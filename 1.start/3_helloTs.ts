
// 1. String | string 的区别
// string是ts提供给我们的类型 给变量提供类型的过程叫做类型注解(Type Annotation) String是js中的包装类
let msg: string = 'Hello Ts'

msg = "Thank you"
// msg = 123 --- Type 'number' is not assignable to type 'string'
console.log(msg);

// 2. ts的运行
// 2.1 tsc 对应的文件 => 生成对应的js文件
// 2.2 

export {}