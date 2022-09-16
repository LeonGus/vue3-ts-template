/**
 * @Description 说点啥
 * @version 0.0.1
 * @author Leon
 * @Date 2022-06-16 16:50:03
 * @LastEditors Leon
 * @LastEditTime 2022-06-16 16:51:14
 */
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({
  // 动画方式
  easing: 'ease',
  // 递增进度条的速度
  speed: 500,
  // 是否显示加载ico
  showSpinner: false,
  // 自动递增间隔
  trickleSpeed: 200,
  // 初始化时的最小百分比
  minimum: 0.3,
})

export default NProgress

