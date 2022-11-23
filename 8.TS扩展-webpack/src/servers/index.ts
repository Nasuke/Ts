
import { BASE_URL, TIME_OUT } from './config'
import SHRequest from './request'

const shRequest = new SHRequest({
    baseURL: BASE_URL,
    timeout: TIME_OUT
})

export const sh1Request = new SHRequest({
    baseURL: "http://codercba.com:1888/airbnb/api",
    timeout: 1000,
    interceptor: {
        OnFulfilled: (config) => {
            console.log('实例的请求拦截');
            return config
        },
        ResponseSuc: (res) => {
            console.log('实例请求的响应拦截');
            return res     
        }
    }
})


export default shRequest

