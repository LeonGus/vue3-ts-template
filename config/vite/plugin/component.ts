/**
 * @Description 组件自动引入
 * @version 0.0.1
 * @author Leon
 * @Date 2022-09-15 11:43:13
 * @LastEditors Leon
 * @LastEditTime 2022-09-21 14:15:40
 */
import Components from 'unplugin-vue-components/vite'
import HElementPlusResolver from '@hgj/element-plus-import-resolver'
import IconsResolver from 'unplugin-icons/resolver'

export const CreateRegistryComponent = () => {
  return Components({
    dts: 'types/components.d.ts',
    resolvers: [
      HElementPlusResolver(),
      IconsResolver({
        enabledCollections: ['ep'],
        customCollections: ['base'],
      })],
  })
}
