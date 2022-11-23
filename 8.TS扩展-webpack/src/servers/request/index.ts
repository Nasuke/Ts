
import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import { QBRequestConfig } from './interface'



class SHRequest {
    // 依赖一个第三方库的时候最好做一个二次封装
    instance: AxiosInstance

    constructor(config: QBRequestConfig) {
        this.instance = axios.create(config)

        // 添加全局拦截器
            // 请求拦截
        this.instance.interceptors.request.use((config) => {
            // token/loading
            console.log('全局请求成功拦截');
            return config;
        }, err => {
            console.log('全局请求失败拦截');
                return err;
        })
            // 响应拦截
        this.instance.interceptors.response.use(res => {
            console.log('全局响应成功拦截');
            return res.data;
        }, err => {
            console.log('全局响应失败拦截');
            return err;
        })
        // 对于某个实例添加拦截器
        this.instance.interceptors.request.use(
            config.interceptor?.OnFulfilled,
            config.interceptor?.RequesetErr
        )
        this.instance.interceptors.response.use(
            config.interceptor?.ResponseSuc,
            config.interceptor?.OnRejected
        )
    }

    /**
     *  难点:
     * 1.拦截器进行精确控制
     *  全局拦截(token/loading...)
     *  实例拦截
     *  单次请求拦截
     * 
     * 2.响应结果的类型处理
     * 
     */
    request<T = any>(config: QBRequestConfig<T>) {
        if (config.interceptor?.OnFulfilled) {
            config = config.interceptor.OnFulfilled(config)
        }

        return new Promise<T>((resolve, reject) => {
            try {
                this.instance.request<any, T>(config).then(res => {
                    if (config.interceptor?.ResponseSuc) {
                        res = config.interceptor.ResponseSuc(res)
                    }
                    resolve(res)
                })
            } catch (error) {
                reject(error)
            }
        })
    }
    get<T = any>(config: QBRequestConfig<T>) {
        this.instance.request({...config, method: "GET"})
    }
    post<T = any>(config: QBRequestConfig<T>) {
        this.instance.request({...config, method: "POST"})
    }

}

export default SHRequest
