import BaseService from './BaseService'
import type { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'

const ApiService = {
    fetchData<Response = unknown, Request = Record<string, unknown>>(
        param: AxiosRequestConfig<Request>
    ) {
        return new Promise<AxiosResponse<Response>>((resolve, reject) => {
            BaseService(param)
                .then((response: AxiosResponse<Response>) => { 
                    resolve(response)
                })
                .catch((errors: AxiosError) => {
                    console.log({errors})
                    reject(errors)
                })
        })
    },
}

export default ApiService
