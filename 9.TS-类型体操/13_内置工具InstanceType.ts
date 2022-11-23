class Person { }
class Dog { }

// typeof Person: 构造函数具体类型
// InstanceType: 构造函数创建出来的实例对象的类型
type SDPerson = InstanceType<typeof Person>

function factory<T extends new (...args: any[]) => any>(ctor:T): myInstaneType<T> {
    return new ctor()
}
const kobe = factory(Person)
const Lucky = factory(Dog)

// 实现

type myInstaneType<T extends new (...arg) => any> = T extends new (...arg) => infer R ? R : never







export {}