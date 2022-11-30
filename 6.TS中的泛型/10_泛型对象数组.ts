
//

/** 
 * 从接口请求数据的时候 可以把需要的字段用 JSON TO TS转成接口
 * 这样就可以用泛型对象数组了
*/


interface IRowsItem {
    [propName: string]: string | number
}
// 方法A Array<泛型定义>
interface TablePropsV1 {
    rows: Array<IRowsItem>
}
// 方法B 泛型定义[]
interface TablePropsV2 {
    rows: IRowsItem[]
}
// 方法C 指定对象类型
interface TablePropsV3 {
    rows: Record<string, string | number>
}

// 适用对象
[
    {
        name: "Paul",
        age: 18,
        desc: "I am Paul, the vegetable frontend."
    }
]