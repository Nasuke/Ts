
// 封装请求方法 
type reqMethod = "get" | "post"
function request(url:string, method: reqMethod) {
}

request("http://sheldonbazinga.fun", "get")

const info = {
    url: "xxx",
    method: "post"
}
// 如果想将info的method作为参数 这样的方式是错误的 它获取到的是string类型
// 可用类型断言的方式解决
request(info.url, url.method)
    // 解决方式1: info.method类型断言  
request(info.url, info.method as "post")
    // 解决方式2: info对象类型断言
const info1 = {
    url: "xxx",
    method: "get"
} as const
request(info1.url, info1.method)


export {}