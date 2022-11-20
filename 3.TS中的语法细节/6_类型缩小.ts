

// 常用的 typeof === 不做演示

// 1. instanceof进行原型链判断
function printDate(date:string | Date) {
    if (date instanceof Date) {
        console.log(date.getTime());
    } else {
        console.log(date);
    }
}

// 2. in进行属性判断
interface ISwim {
    swim: () => void
}
interface IRun {
    run: () => void
}
function move(action: ISwim | IRun) {
    // 2.1 必须是"swim" 而非 swim
    if ("swim" in action) {
        console.log("fisher~~");
        action.swim()
    } else {
        console.log("doggy~");
        action.run()
    }
}

const fish: ISwim = {
    swim: function() {}
}
const dog: IRun = {
    run: function() {}
}
move(fish)




export {}