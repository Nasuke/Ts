
    //1. type表示导入的是一个类型
    //2. 这些可以让一个非TS编译器比如Babel swc或者esbuild知道什么样的导入可以被安全移除(不用经过语法解析)
import type{ IPerson, IDtype } from './utils/type'

// 3. 来自type.d.ts文件
const Lin: IPerson = {
    name: "sheldon",
    age: 20
}
const id:IDtype = 5




// 
export {}