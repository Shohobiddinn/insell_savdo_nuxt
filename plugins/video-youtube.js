import { defineNuxtPlugin } from '#app'
import Vue3Youtube from 'vue3-youtube'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Vue3Youtube)
})
