

interface IIndexType{
    
    // 只能是二者其一  不能是二者的联合类型
    // [index: number]: string
    // [index: string]: any
     [index: string]: string | (() => void) 
    
}

// 1 函数签名[index: number]: string OK
// 2 函数签名[index: string]: any OK
    // 2.1 arr[0] => arr['0']




// 3 函数签名[index: string]: string No
    // 3.1 严格字面量赋值检测  数组实例还可以用.forEach的方法来访问 但fruits['forEach'] => fn不满足string
const fruits: IIndexType = ['apple', 'banana']









export {}