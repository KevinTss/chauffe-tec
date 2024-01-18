'use client'

import Link from 'next/link'
import { pathnames } from '@constants'
import { DictionaryKeys } from '@types'
import { useCurrentLocale, useTranslate } from '@hooks'
import { LocaleSwitcher } from '@components'

const navigationLinks = [
  { trKey: 'nav.index', path: pathnames['index'] },
  { trKey: 'nav.service', path: pathnames['service'] },
  { trKey: 'nav.about', path: pathnames['about'] },
] satisfies { trKey: DictionaryKeys; path: Record<'en' | 'fr', string> }[]

export const Navigation = () => {
  const locale = useCurrentLocale()
  const t = useTranslate()

  return (
    <div className="hidden lg:flex gap-2">
      {navigationLinks.map(({ trKey, path }) => (
        <Link
          key={trKey}
          className="text-base text-white hover:bg-blue-300 px-6 py-2 rounded-xl cursor-pointer"
          href={path[locale]}
        >
          {t(trKey)}
        </Link>
      ))}
      <LocaleSwitcher />
    </div>
  )
}
