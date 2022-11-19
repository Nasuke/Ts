
function getLength(args: string | string[]) {
    return args.length
}

console.log(getLength('asd')); // 3
console.log(getLength(123)); // no
console.log(getLength(['a', 'b'])); 
console.log(getLength(['a', 'b', 1])); // no 
console.log(getLength()); // no


function getObjLength(params: {length : number}) {
    return params.length
}

const info = {
    length: 20
}

getObjLength(info)
getObjLength('asd')  // 包装类进行了处理
getObjLength([1,2,3]) // 数组也是对象


// ts应当是一个模块文件 不导出的话就去全局了
export {}