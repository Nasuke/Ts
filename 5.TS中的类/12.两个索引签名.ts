


interface IIndexType {

    [index: number]: string
    [key: string]: any
    

// 下面这样写法是错误的 
// 结论: 因为数字类型的返回值类型必须是字符串类型的子类型
// 原因: 所有数字类型都会转换成字符串类型去对象中获取内容 所有数字类型要保证拿到的不能和字符串类型拿到的冲突
    // [index: number]: string | number
    // [key: string]: string
}

const fruits: IIndexType = ['apple', 'banana']

const fruitO = fruits[0]
const fruitK = fruits['forEach']

export {}





export {}