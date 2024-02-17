// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  modules: ["@nuxtjs/tailwindcss", "radix-vue"],
  tailwindcss: {
    jit: true,
    cssPath: ["~/assets/css/tailwind.css", { injectionPosition: "last" }],
  },
});