import { createI18n } from 'vue-i18n'

import fr from '../locales/fr.json'
import en from '../locales/en.json'

const messages = {
  fr: {
    translate: fr,
  },
  en: {
    translate: en,
  },
}

export default createI18n({
  legacy: false,
  locale: import.meta.env.VITE_I18N_LOCALE || 'fr',
  fallbackLocale: import.meta.env.VITE_I18N_FALLBACK_LOCALE || 'fr',
  messages,
})
