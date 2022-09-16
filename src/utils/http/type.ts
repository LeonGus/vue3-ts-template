/**
 * @Description http type
 * @version 0.0.1
 * @author Leon
 * @Date 2022-09-16 17:04:29
 * @LastEditors Leon
 * @LastEditTime 2022-09-16 17:06:11
 */
export interface IResponse <T = any> {
  code: number | string
  result: T
  message: string
  status: string | number
}
