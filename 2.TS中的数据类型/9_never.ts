
// 1. 实际开发中实质上用到never的情况很少
function circle(err: string): never {
    // 1.1 死循环
    // while (true) {
    // }
    // 1.2 抛出错误
    throw new Error(err);
}

// 2. 但是在框架和一些工具的开发时会用到never

function handleMessage(message: string | number | boolean) {
    
    switch (typeof message) {
        case "string":
            console.log(message.length)
            break
        case "number":
            console.log(message);
            break
        // 2.1 假设我们在拓展工具的时候 如果没有对boolean进行处理 default那就会标红
        //     因为我们不能把boolean赋值给never
        //     这样对一些没有处理到的case 就会有明显的提示
        case "boolean":
            console.log(Number(message));
            break
        default:
            const check: never = message 
    }
}