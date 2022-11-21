
// 鸭子类型: 如果一只鸟 看起来像duck 游起来像duck 吃起来(不是)像duck 那它就是一只duck
class Person {
    constructor(public name: string, public age: number){}
}
class Dog {
    constructor(public name: string, public age: number) { }
}
    // 你是真的狗~
const sheldon: Person = new Dog("cooper", 30) 

function printPerson(person:Person) {
    console.log(person.name, person.age);
}
printPerson(new Person("babala", 20))
    // 以下操作都是可行的
printPerson(new Dog("lucky", 2))
printPerson({ name: 'leonard', age: 5 })

export { }