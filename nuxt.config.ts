// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/content", "nuxt-svgo", "@nuxt/image", "@nuxtjs/tailwindcss"],
  // content: {
  //   documentDriven: true,
  //   highlight: {
  //     theme: "github-dark",
  //   },
  //   experimental: {
  //     // search: true,
  //   },
  // },
  hooks: {
    "content:file:beforeParse": (ctx) => {
      const { file } = ctx;
      if (file.id.endsWith(".md")) {
        const markdownLinkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
        file.body = file.body.replace(markdownLinkRegex, (match, text, url) => {
          const updatedUrl = url
            .toLowerCase()
            .replace(/%20/g, "-")
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-")
            .replace(/\.md$/, "");
          return `[${text}](${updatedUrl})`;
        });

        const markdownImageRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;
        file.body = file.body.replace(
          markdownImageRegex,
          (match, altText, imageUrl) => {
            const updatedImageUrl = imageUrl.replace(/^.*?\/public/, "");
            return `![${altText}](${updatedImageUrl})`;
          },
        );
      }
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
