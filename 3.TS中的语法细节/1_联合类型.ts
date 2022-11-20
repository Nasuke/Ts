
// 联合类型可与类型别名搭配使用

// 这样组合起来的话代码会更间接
type ID = number | string

function printId(id: ID) {
    if (typeof id === 'string') {
        console.log(id.length);
    } else {
        console.log(id);
    }
}

export {}