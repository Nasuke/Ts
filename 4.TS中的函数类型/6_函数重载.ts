// 函数重载平时用得比较少 大概一些工具库的编写会用到


// 1. ts中函数重载分为两部分 2个或以上重载签名(没有执行体) 通用函数
    //1.1 重载签名
function sum(a1: number, a2: number): number;
function sum(a1: string, a2: string): string;
    //1.2 通用函数 通用函数并不能被直接调用
function sum(a1: any, a2: any) {
    return a1 + a2
}

sum(1,2) // 3
sum('1', '2') // 12
sum([1], 2) // X -> 没有与之匹配的重载
