// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-09-30",
  devtools: { enabled: true },
  vite: {
    build: {
      target: "esnext",
    },
    esbuild: {
      supported: {
        "top-level-await": true, //browsers can handle top-level-await features
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern",
          additionalData: '@use "~/assets/scss/_colors.scss" as *;',
        },
      },
    },
  },
  css: ["~/assets/scss/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: "123",
    // Keys within public are also exposed client-side
    public: {
      apiBase: "/api",
    },
  },

  modules: ["@nuxt/ui", "@nuxt/image"],
  icon: {
    size: "32px",
    customCollections: [
      {
        prefix: 'social',
        dir: './assets/icons/'
      }
    ]
  },
});