
// 声明自己定义变量的类型

declare const sdName: string 
declare const sdSaying: string 


declare class Sheldon {
    constructor(public name: string, public age: number)
}


// 声明文件模块

declare module "*.jpg"
declare module "*.png"
declare module "*.svg"


// 声明命名空间
declare namespace $ {
    export function ajax(setting:any): any {}
}