/**
 * @Description 说点啥
 * @version 0.0.1
 * @author Leon
 * @Date 2022-09-15 10:35:18
 * @LastEditors Leon
 * @LastEditTime 2022-09-21 10:43:45
 */
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export const CreateAutoImport = () => {
  return AutoImport({
    imports: [
      'vue',
      'vue/macros', // vue 宏相关自动引入
      'vue-router',
      'pinia',
      '@vueuse/core',
    ],
    dts: 'types/auto-imports.d.ts',
    dirs: [
      // './hooks',
      // './composables' // only root modules
      './src/composables', // all nested modules
      // ...
    ],
    vueTemplate: true,
    resolvers: [ElementPlusResolver()],
  })
}
