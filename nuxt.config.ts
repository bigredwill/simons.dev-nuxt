// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', 'nuxt-svgo', '@nuxt/image'],
  svgo: {
    svgoConfig: {
      plugins: [
        {
          name: 'preset-default',
          params: {
            overrides: {
              cleanupIds: false,
            }
          }
        }
      ]
    }
  },
  routeRules: {
    // '/': { prerender: true }
  },

  css: ['~/assets/main.css'],

  compatibilityDate: '2024-10-03'
})