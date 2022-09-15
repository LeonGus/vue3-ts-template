/**
 * @Description 文件路由配置文件
 * @version 0.0.1
 * @author Leon
 * @Date 2022-09-15 09:53:18
 * @LastEditors Leon
 * @LastEditTime 2022-09-15 10:32:02
 */
 import Pages from 'vite-plugin-pages'

export function CreatePagesPlugin(){
    return Pages({
            exclude: ['**/components/*.vue'],
          })
}
