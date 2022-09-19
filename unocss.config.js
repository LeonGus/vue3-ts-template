/**
 * @Description 说点啥
 * @version 0.0.1
 * @author Leon
 * @Date 2022-09-15 15:01:12
 * @LastEditors Leon
 * @LastEditTime 2022-09-19 10:02:07
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
  theme: {
    extend: {},
    colors: {
      // 主要的颜色值
      success: '#00c48f',
      danger: '#f44336',
      primary: '#3a7afe',
      info: '#00afef',
      warning: '#ff9f00',
      disabled: '#e0e0e0',
      text: '#000',
      textDisabled: '#aaa',
      light: '#fff',
      dark: '#272727',
    },
    fontSize: {
      // xs: '.6rem',
      // sm: '.65rem',
      // base: '.7rem',
      // lg: '.8rem',
      // xl: '1rem',
      // '2xl': '2rem',
      // '3xl': '3rem',
      // '4xl': '4rem',
      // '5xl': '5rem',
      // '6xl': '6rem',
      // '7xl': '7rem',
    },
  },
})
