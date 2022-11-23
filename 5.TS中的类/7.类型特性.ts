
class Person { }
// 类的特性
// 1. 可以创建类对应的实例对象
// 2. 类本身可以作为这个实例的类型

const p: Person = new Person()
// 3. 类可以当作一个有构造签名的函数
function factory(constructor: new () => void) { }
factory(Person)




export {}