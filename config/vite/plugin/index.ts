/**
 * @Description vite config plugin 配置
 * @version 0.0.1
 * @author Leon
 * @Date 2022-09-15 09:49:04
 * @LastEditors Leon
 * @LastEditTime 2022-09-15 14:17:15
 */
 import vue from '@vitejs/plugin-vue'
import { CreateAutoImport } from './autoImport'
import { CreateRegistryComponent } from './component'
import { CreatePagesPlugin } from './pages'
import { CreateUnocss } from './unocss'
 

 export function CreateVitePlugins() {
    const plugins = [
        vue({
            reactivityTransform:true
        }),
        CreatePagesPlugin(),
        CreateAutoImport(),
        CreateRegistryComponent(),
        CreateUnocss()
    ]
    return plugins
 }