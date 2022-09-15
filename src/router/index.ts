/**
 * @Description 路由文件
 * @version 0.0.1
 * @author Leon
 * @Date 2022-09-15 09:58:52
 * @LastEditors Leon
 * @LastEditTime 2022-09-15 10:11:39
 */
 import { createRouter, createWebHistory } from 'vue-router'
 import routes from 'virtual:generated-pages'

 const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
  })
  export default router