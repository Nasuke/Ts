

    // 现在就可以传其它类型啦~
function useState<Type>(initialState: Type):[Type, (newState: Type) => void] {
    
    let state = initialState
    function setState(newState: Type) {
        state = newState
    }

    return [state, setState]
}
    // 1. 简写自动推导
const [count, setCount] = useState(5)
const [msg, setMsg] = useState('msg')
    // 1.1 这里简写的方式并没有遇到推导出 never[]的情况
const [banner, setBanner] = useState([])

    //2. 现在想要乱来就不行了
setCount('let me') // no
setMsg(555) // no




export {}