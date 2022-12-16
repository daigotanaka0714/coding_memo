// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    shim: false,
    strict: true,
    typeCheck: true
  },
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
  css: ['@/assets/css/tailwind.css'],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config',
    exposeConfig: false,
    injectPosition: 0,
    viewer: true
  }
})
