import federation from "@originjs/vite-plugin-federation";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  app: {
    baseURL: "/nuxt-project/",
    pageTransition: { name: "page", mode: "in-out" },
  },
  experimental: { asyncEntry: true },
  vite: {
    plugins: [
      federation({
        name: "remote",
        filename: "remoteEntry.js",
        exposes: {
          "./HelloWorld": "./components/HelloWorld.vue",
        },
      }),
    ],
  },
});
