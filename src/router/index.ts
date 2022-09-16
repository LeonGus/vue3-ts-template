/**
 * @Description 路由文件
 * @version 0.0.1
 * @author Leon
 * @Date 2022-09-15 09:58:52
 * @LastEditors Leon
 * @LastEditTime 2022-09-16 16:35:05
 */
import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages'
import NProgress from '../utils/nprogress'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})
export default router
