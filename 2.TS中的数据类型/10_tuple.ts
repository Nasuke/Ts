
// js中并没有元组的概念 但在其它语言像是python中就有这个概念

// 1. 元组数据结构中可以存放不同的数据类型 取出来的item也是有明确对应的类型
// const myInfos: [string, number, boolean] = ["sheldon", 21, false]
// const name = myInfos[0] // string
// const age = myInfos[1] // number

// 2. 在函数中元组类型的使用很多(返回值)
function useState(initialState: number): [number, (newState: number) => void] {
    let state = initialState
    function setState(newState: number) {
        state = newState
    }
    return [state, setState]
}
const [state, setState] = useState(21)

console.log(state);
console.log(setState);




export {}