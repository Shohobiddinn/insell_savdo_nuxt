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
        },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css' },
        { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css' }
      ],
      script: [
        { src: 'https://code.jquery.com/jquery-3.5.1.slim.min.js' },
        { src: 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js' },
        { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js' }
      ],
      title: 'Insell'
    }
  },
  devtools: { enabled: false },
  modules: ["@nuxt/ui", "@nuxt/image"],
  css: [
    '~/assets/scss/tailwind.css'
  ],
  plugins: [
    { src: '~/plugins/video-youtube.js', mode: 'client' }
  ]
})