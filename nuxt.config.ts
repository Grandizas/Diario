// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  css: ['~/assets/scss/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
              '@use "~/assets/scss/abstracts" as *;',
        },
      },
    },
  },
  devtools: { enabled: true }
})
