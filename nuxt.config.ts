import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  buildModules: ["@nuxtjs/google-analytics"],
  googleAnalytics: {
    id: "G-W7PBVMBCSH",
  },
});
