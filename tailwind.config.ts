import type { Config } from 'tailwindcss'
import animate from "tailwindcss-animate"
import { setupInspiraUI } from "@inspira-ui/plugins"

export default <Partial<Config>>{
  darkMode: ['selector', '.dark-mode'],
  plugins: [animate, setupInspiraUI],
  content: [
    "./components/**/*.{js,vue,ts}",
    "./pages/**/*.{js,vue,ts}",
    "./layouts/**/*.{js,vue,ts}",
    "./plugins/**/*.{js,vue,ts}",
    "./themes/**/*.{js,vue,ts}",
    "./nuxt.config.{js,vue,ts}",
  ],
  theme: {
    extend: {
      backdropBlur: {
        xs: '1px',
      },
      fontSize: {
        base: '1.25rem'
      },
      fontFamily: {
        sans: ['Glacial Indifference'], //normal
        serif: ['Tan Mon Cheri'] //title
      },
      colors: {
        'red-plug': {
          '50': 'rgb(var(--color-red-plug-50))',
          '100': 'rgb(var(--color-red-plug-100))',
          '200': 'rgb(var(--color-red-plug-200))',
          '300': 'rgb(var(--color-red-plug-300))',
          '400': 'rgb(var(--color-red-plug-400))',
          '500': 'rgb(var(--color-red-plug-500))',
          '600': 'rgb(var(--color-red-plug-600))',
          '700': 'rgb(var(--color-red-plug-700))',
          '800': 'rgb(var(--color-red-plug-800))',
          '900': 'rgb(var(--color-red-plug-900))',
          '950': 'rgb(var(--color-red-plug-950))',
        },
        'base': '#ffffff'
      },
      backgroundImage: {
        'deep-blue-space': 'var(--color-deep-blue-space)'
      }
    }
  }
}
