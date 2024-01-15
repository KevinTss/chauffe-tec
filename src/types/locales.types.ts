import { i18n, en } from '@constants'

import { PageId } from '@types'

export type Locale = (typeof i18n)['locales'][number]

export type Pathnames = Record<PageId, Record<Locale, string>>

export type Dictionary = typeof en

export type DictionaryKeys = keyof typeof en
