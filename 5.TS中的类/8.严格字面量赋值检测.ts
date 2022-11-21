
// 1. 奇怪现象
interface IPerson {
    name: string,
    age: number,
}

const linInfo = { name: 'azl', age: 21, height: 50 }
// const lin: IPerson = {name:'azl', age: 21, height: 50}  X -> height不在IPerson中
    // 1.1
const lin: IPerson = linInfo // 烦恼消失?

function printILin(info: IPerson) { 
    for (let key in info) {
        console.log(key); // name age height
    }
}
    // 1.2
// printILin({ name: 'azl', age: 21, height: 50 }) // no
printILin(linInfo) // yes

// 2. 原因
// ahejlsbetg在issue#3823里进行了回答
// 2.1 每个对象字面量最初都被认为是新鲜的(fresh)
// 2.2 当一个新的对象字面量分配给一个变量(1.1)或传递给一个非空目标类型的参数(1.2)时 对象字面量指定目标类型中不存在的属性是错误的
// 2.3 当类型断言或对象字面量的类型扩大时 新鲜度会消失 2.2的错误就会避免

export {}