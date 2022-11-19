
function getLength(args) {
    return args.length
}

console.log(getLength('asd')); // 3
console.log(getLength(['a','b'])); // 2
console.log(getLength(123)); // undefined(包装类进行了处理)
console.log(getLength()); // 报错