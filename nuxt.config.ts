// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    shim: false,
    strict: true,
    typeCheck: true
  },
  modules: ["@nuxt/content"],
  srcDir: "src/",
  content: {
    sources: [path.join(__dirname, "content")],
  },
})
