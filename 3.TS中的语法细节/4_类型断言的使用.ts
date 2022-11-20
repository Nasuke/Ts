
// TS有时候无法获取具体的类型信息 这时候需要使用类型断言

// 1.以类名获取元素只会推断出Element
const imgEl = document.querySelector('.img')

    // 1.1 使用类型断言as
const imgElas = document.querySelector('.img') as HTMLImageElement
imgElas.src = ""
imgElas.alt = ""

// 2.TypeScript只允许类型断言转换为 更具体或者不太具体 的类型版本，此规则可防止不可能的强制转换

const name = "sheldon" as number // X

const myName = ("sheldon" as unknown) as number // OK


// 3. 非空类型断言
interface ILin {
    name: string,
    age: number,
    friend?: {
        name: string
    } 
}
const info: ILin = { name: 'azl', age: 21 }
    // 这个操作有点危险 确保friend有值再用 
info.friend!.name = "wj"

export {}