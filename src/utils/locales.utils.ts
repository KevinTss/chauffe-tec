import type { NextRequest } from 'next/server'
import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { i18n, dictionariesMap } from '@constants'
import { Locale } from '@types'

export const getLocale = (request: NextRequest): string | undefined => {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales

  // Use negotiator and intl-localematcher to get best locale
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales,
  )

  const locale = matchLocale(languages, locales, i18n.defaultLocale)

  return locale
}

export const getDictionary = (locale: Locale) => dictionariesMap[locale]
