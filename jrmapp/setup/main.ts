import { defineAppSetup } from '@slidev/types'
import VueI18n from 'vue-i18n'

export default defineAppSetup(({ app, router }) => {
  // Vue App
  app.use(VueI18n)
})