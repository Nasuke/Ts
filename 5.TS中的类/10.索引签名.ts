
const fruits = ['apple', 'banana']
console.log(fruits[0]);
console.log(fruits[1]);
const fruitInfo: [category: string, price: number] = ['apple', 20]
console.log(fruitInfo[0]);
console.log(fruitInfo[1]);

// 有些时候我们不知道一个类型所有类型的名字 但我们知道值的特征
// 这种时候用一个索引签名来描述可   值的类型

interface IterableItem {
    // index string/number 二选一 但可以写两个
    [index: string]: any
    length: number
}

function logIterableItem(item: IterableItem) {    
    for (let i = 0; i < item.length; i++){
        console.log(item[i]);
    }
}

logIterableItem(fruits) // 索引签名不兼容
logIterableItem(fruitInfo) // 索引签名不兼容
logIterableItem({ name: 'sheldon', length: 10 })





export {}