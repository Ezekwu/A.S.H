import { defineNuxtConfig } from "nuxt/config"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  runtimeConfig: {
    resendApiKey: process.env.RESEND_API_KEY,
    public: {
      apolloAppId: process.env.APOLLO_APP_ID,
    },
  },
  modules: [
    "@nuxtjs/mdc",
    "@nuxt/image",
    "nuxt-svgo",
    [
      "nuxt-mail",
      {
        message: {
          to: "ezekwujerry@gmail.com",
        },
        smtp: {
          host: "smtp.resend.com",
          port: 465,
          auth: {
            user: "resend",
            pass: process.env.RESEND_API_KEY,
          },
        },
      },
    ],
  ],
})
