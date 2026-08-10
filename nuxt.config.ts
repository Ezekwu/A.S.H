import { defineNuxtConfig } from "nuxt/config"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apolloAppId: process.env.APOLLO_APP_ID,
      /** Canonical origin (no trailing slash). Set NUXT_PUBLIC_SITE_URL in production so OG images use the correct absolute URL when prerendering. */
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL ?? "",
    },
  },
  modules: [
    "@nuxtjs/mdc",
    "@nuxt/image",
    "nuxt-svgo",
  ],
  routeRules: {
    "/elderScroll": { redirect: "/the-elder-scrolls-online-gold-road" },
    "/gameOfThrones": { redirect: "/game-of-thrones-legends" },
    "/where-wind-meets": { redirect: "/where-winds-meet" },
  },
  app:{
    head:{
      link:[
        {
          rel:"icon",
          type:"image/x-icon",
          href:"/favicon.ico"
        }
      ]
    }
  }
})
