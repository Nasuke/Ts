// 默认string类型
interface ILin<T = string> {
    name: T,
    age: number,
    slogan: T
}

    // 指定string
const azl: ILin<string> = {
    name: 'sheldon',
    age: 14,
    slogan: 'show me what you can'
}
    // 指定number
const azl1: ILin<number> = {
    name: 7,
    age: 14,
    slogan: 77
}
    // 不指定就默认类型
const azl2: ILin = {
    name: 'cooper',
    age: 14,
    slogan: 'bazinga'
}   


export {}