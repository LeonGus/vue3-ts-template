/**
 * @Description 说点啥
 * @version 0.0.1
 * @author Leon
 * @Date 2022-09-16 16:57:44
 * @LastEditors Leon
 * @LastEditTime 2022-09-16 17:13:32
 */
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import axios from 'axios'
import { saveAs } from 'file-saver'
import type { IResponse } from './type'
import NProgress from '@/utils/nprogress'

//   如果请求话费了超过 `timeout` 的时间，请求将被中断
axios.defaults.timeout = 5000
// 表示跨域请求时是否需要使用凭证
axios.defaults.withCredentials = false
// axios.defaults.headers.common['token'] =  AUTH_TOKEN

const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_BASEURL,
  // transformRequest: [
  //   function (data) {
  //     //由于使用的 form-data传数据所以要格式化
  //     delete data.Authorization
  //     data = qs.stringify(data)
  //     return data
  //   },
  // ],
})
// axios实例拦截响应
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.status === 200)
      return response

    // showMessage(response.status)
    return response
  },
  // 请求失败
  (error: any) => {
    const { response } = error
    if (response) {
      // 请求已发出，但是不在2xx的范围
    //   showMessage(response.status)
      return Promise.reject(response.data)
    }
    // showMessage('网络连接异常,请稍后再试!')
  },
)

// axios实例拦截请求
axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config
  },
  (error: any) => {
    return Promise.reject(error)
  },
)
/**
 * @msg 请求
 * @return {*}
 */
const request = <T = any>(
  config: AxiosRequestConfig,
  extension = { showError: true, showLoading: true },
): Promise<T> => {
  const conf = config
  return new Promise((resolve) => {
    extension?.showLoading && NProgress.start()
    axiosInstance
      .request<any, AxiosResponse<IResponse>>(conf)
      .then((res: AxiosResponse<IResponse>) => {
        resolve(res?.data as unknown as Promise<T>)
        // resolve(res.data)
        // const {
        //   data: { result },
        // } = res
        // resolve(result as T)
      })
      .finally(() => {
        extension.showLoading && NProgress.done()
      })
  })
}

/**
 * @msg 下载文件
 * @return {*}
 */
export function downLoad<T = any>(
  config: AxiosRequestConfig,
  extension = { showError: true, showLoading: true, fileName: '' },
): Promise<T> {
  return new Promise((resolve) => {
    extension.showLoading && NProgress.start()
    axiosInstance
      .request<any, AxiosResponse<IResponse>>({ ...config, responseType: 'blob' })
      .then((res: AxiosResponse<IResponse>) => {
        extension.fileName
            = extension?.fileName
            || decodeURI(res.headers['content-disposition'].split(';')[1].split('=')[1])

        saveAs(res.data as unknown as Blob, extension.fileName)
        // ElMessage.success('下载成功')
        resolve(res.data as unknown as Promise<T>)
      })
      .finally(() => {
        extension.showLoading && NProgress.done()
      })
  })
}

export default request
