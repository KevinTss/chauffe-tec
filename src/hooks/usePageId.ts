import { useMemo } from 'react'
import { usePathname } from 'next/navigation'
import type { PageId } from '@types'
import { pathnames } from '@constants'

export const usePageId = (): PageId | null => {
  const pathname = usePathname()

  return useMemo(() => getPageIdFromPathname(pathname), [pathname])
}

const getPageIdFromPathname = (pathname: string): PageId | null => {
  const routesByLocales = Object.entries(pathnames)
  let matchedPageId: PageId | null = null
  routesByLocales.forEach(([pageId, routeByLocale]) => {
    const pageIdRoutes = Object.values(routeByLocale)
    if (pageIdRoutes.includes(pathname)) {
      matchedPageId = pageId as PageId
    }
  })

  return matchedPageId
}
