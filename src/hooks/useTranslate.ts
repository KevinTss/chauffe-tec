'use client'

import { DictionaryKeys } from '@types'
import { useCurrentLocale } from '@hooks'
import { getDictionary } from '@utils'

export const useTranslate = () => {
  const locale = useCurrentLocale()

  return (key: DictionaryKeys) => getDictionary(locale)[key]
}
