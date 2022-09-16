/**
 * @Description 说点啥
 * @version 0.0.1
 * @author Leon
 * @Date 2022-09-15 15:01:12
 * @LastEditors Leon
 * @LastEditTime 2022-09-16 17:42:22
 */
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['wh-full', 'w-full h-full'],
    ['icon-btn', 'text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600 !outline-none'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
      extraProperties: {
        // 'display': 'inline-block',
        // 'vertical-align': 'middle',
        // ...
      },
    }),
  ],
  // transformers: [
  // @unocss/transformer-directives插件后允许使用@apply指令在style中写原子化css
  //   transformerDirectives(),
  //   transformerVariantGroup(),
  // ],
})
