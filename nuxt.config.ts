// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/content", "nuxt-svgo", "@nuxt/image"],
  content: {
    documentDriven: true,
    highlight: {
      theme: "github-dark",
    },
    experimental: {
      // search: true,
    },
  },
  svgo: {
    svgoConfig: {
      plugins: [
        {
          name: "preset-default",
          params: {
            overrides: {
              cleanupIds: false,
            },
          },
        },
      ],
    },
  },

  nitro: {
    // static: true,
  },

  css: ["~/assets/main.css"],

  compatibilityDate: "2024-10-03",
});
