import { Pathnames, Locale, Dictionary } from '@types'
import { en, fr } from '@constants'

export const i18n = {
  defaultLocale: 'fr',
  locales: ['fr', 'en'],
} as const

export const pathnames: Pathnames = {
  index: {
    en: '/en',
    fr: '/fr',
  },
  about: {
    en: '/en/about',
    fr: '/fr/a-propos',
  },
  service: {
    en: '/en/services',
    fr: '/fr/services',
  },
}

export const dictionariesMap: Record<Locale, Dictionary> = {
  en,
  fr,
}
