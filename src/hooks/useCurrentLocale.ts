'use client'

import { useMemo } from 'react'
import { usePathname } from 'next/navigation'
import type { Locale } from '@types'

export const useCurrentLocale = (): Locale => {
  const pathname = usePathname()

  return useMemo(() => (pathname.startsWith('/fr') ? 'fr' : 'en'), [pathname])
}
