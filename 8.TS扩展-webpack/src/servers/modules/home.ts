import shRequest, {sh1Request} from '..'


// shRequest.request({
//     url: '/home/categories'
// }).then(res => {
//     console.log(res);
// })

interface IHighScore {
    list: any[],
    subtitle: string,
    title: string,
    type: string,
    _id: string
}

sh1Request.request<IHighScore>({
    url: '/home/highscore',
    interceptor: {
        OnFulfilled: (config) => {
            console.log('/home/highscore的请求拦截');
            return config
        },
        ResponseSuc: (res) => {
            console.log('/home/highscore的响应拦截');
            return res
        }
    }
}).then(res => {
    console.log(res.title);
    console.log(res._id);
})