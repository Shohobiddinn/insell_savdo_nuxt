// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/2.png'
        },],
      title: 'Insell savdo'
    }
  },
  devtools: { enabled: false },
  modules: ["@nuxt/ui", "@nuxt/image"],
  css: [
    '~/assets/scss/tailwind.css'
  ],
})