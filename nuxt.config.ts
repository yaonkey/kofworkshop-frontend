// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  css: ["~/assets/css/main.css"],
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

  modules: ["@nuxtjs/tailwindcss", "@nuxt/icon", [
    "@nuxtjs/google-fonts",
    {
      families: {
        Roboto: true,
        "Josefin+Sans": true,
        Lato: [100, 300],
        Raleway: {
          wght: [100, 400],
          ital: [100],
        },
        Inter: "200..700",
        "Crimson Pro": {
          wght: "200..900",
          ital: "200..700",
        },
      },
    },
  ], "@nuxt/fonts"],
});