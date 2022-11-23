 
// 1. 函数签名表示函数作为对象 还可以有其它属性
 // 1.1 定义函数类型
interface IFruit {
    city: string,
    // 1.2 定义调用签名  (参数): 返回值(并非=>)
    (category: string, price: number): number
}

const Fruit: IFruit = (category: string, price: number) => {
    return 3 * price
}
    // 1.3 给函数对象添加属性
Fruit.city = "gy"
    // 1.4 调用
Fruit('apple', 21)

// 2. 开发中如何选择
    // 2.1 如果只是描述函数类型本身 那就要函数类型表达式
    // 2.2 如果在描述函数作为对象可以调用 同时还有其它属性 那就用函数签名


export {}