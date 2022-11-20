
// 1. 交叉类型表示多种类型要同时满足
// 2. 交叉类型一般用于对象类型的交叉 与interface搭配使用


interface IKun {
    name: string,
    age: number
}
interface ILin {
    name: string,
    hobby: () => void
}

type IKLin = IKun & ILin

const info: IKLin = {
    name: 'azl',
    age: 21,
    hobby: function () {
    }
}


export {}