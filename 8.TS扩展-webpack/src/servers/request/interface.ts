import type {  AxiosRequestConfig, AxiosResponse } from 'axios'

interface QBInterceptor<T = AxiosResponse> {
    OnFulfilled?: (config: AxiosRequestConfig) => AxiosRequestConfig,
    RequesetErr?: (err: any) => any,
    ResponseSuc?: (res: T) => T,
    OnRejected?: (err: any) => any
}

export interface QBRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
    interceptor?: QBInterceptor<T>
}