// 如果声明时直接赋值 会根据赋值的类型推导出对应的类型注解
// 这个过程称为类型推导
    // let进行类型推导 推导出来的是通用类型
    // const进行类型推导 推导出来的是字面量类型
let msg = "Hello Sheldon"
msg = "Cooper"
//  msg = 401 X->Type 'number' is not assignable to type 'string'

const bob = 123
// bob = 456 X->无法分配到 "bob" ，因为它是常数

export {}