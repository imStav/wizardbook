// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@unocss/nuxt'
  ],
  content: {
    highlight: {
      theme: 'material-theme-palenight',
    },
  },
})
