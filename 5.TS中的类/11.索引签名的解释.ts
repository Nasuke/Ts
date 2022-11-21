

interface IIndexType{
    
    // [index: number]: string
    // [index: string]: any
     [index: string]: string | (() => void) 
    
}

// 1 函数签名[index: number]: string OK
// 2 函数签名[index: string]: any OK
    // 2.1 arr[0] => arr['0']




// 3 函数签名[index: string]: string No
    // 3.1 严格字面量赋值检测  fruits['forEach']返回的是一个fn
const fruits: IIndexType = ['apple', 'banana']









export {}