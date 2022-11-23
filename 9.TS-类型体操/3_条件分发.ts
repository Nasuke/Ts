


type toArr<T> = T[]

// number[]
type NumArray = toArr<number>
// (string | number)[]
type conbineArray = toArr<number | string>

// 如果我们想获得 string[] | number[] 就需要运用分发类型
type toArrP<T> = T extends any ? T[] : never
// 在泛型中使用条件类型的时候 传入联合类型 这个条件类型会运用到每个联合类型的成员
type trueConbineArr = toArrP<number | string> // string[] | number[]


export {}