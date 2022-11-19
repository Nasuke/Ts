// 描述类型不确定的变量
// 与any不同 默认情况下对其进行任何操作都是非法的
// 必须进一步进行类型校验
const flag = true
let res: unknown

function add(): number {
    return 123
}
function concat(): string {
    return 'concat'
}

if (flag) {
    res = add()
} else {
    res = concat()
}
    // 1. 类型校验
if (typeof res === 'string') {
    console.log(res.length, res.split(' '));
    
}





export { }
