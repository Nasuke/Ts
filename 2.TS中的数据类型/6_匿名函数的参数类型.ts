
const fruits: string[] = ["apple", "banana"]

// 1. 对于匿名函数来说不需要函数注解 会自动进行类型推断
// 2. 这个过程称之为 上下文类型(contextual typing)
fruits.forEach((item, index, array) => {
    console.log(item.toUpperCase(), index, array);
})


export {}