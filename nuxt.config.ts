// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: 'es'
      },
      script: [
        {
          src: 'https://analytics.ahrefs.com/analytics.js',
          'data-key': 'n4K5Fvw3Ej8gYSWlKauoLA',
          async: true
        }
      ]
    },
  },
  fonts: {
    families: [
      { name: 'Glacial Indifference' },
      { name: 'Tan Mon Cheri' }
    ]
  },
  typescript: {
    typeCheck: true,
    strict: true
  },
  extends: [
    // ['github:red-plug/layers-nutrix', { auth: process.env.GITHUB_TOKEN }]
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@vueuse/nuxt'
  ],
  colorMode: {

  },
  runtimeConfig: {
    serverToken: process.env.SERVER_TOKEN,
    public: {
      apiBase: process.env.API_URL
    }
  }
})