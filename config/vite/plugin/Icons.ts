/**
 * @Description 说点啥
 * @version 0.0.1
 * @author Leon
 * @Date 2022-09-21 11:35:28
 * @LastEditors Leon
 * @LastEditTime 2022-09-21 14:15:47
 */
import Icons from 'unplugin-icons/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
export const CreateAutoIcons = () => {
  return Icons({
    compiler: 'vue3',
    autoInstall: true, // ⾃动安装
    // custom图标集 给svg⽂件设置fill="currentColor"属性，使图标的颜⾊具有适应性
    customCollections: {
      base: FileSystemIconLoader('src/assets/svg/base', svg =>
        svg.replace(/^<svg /, '<svg fill="currentColor" '),
      ),
    },
  })
}
