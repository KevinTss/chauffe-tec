'use client'

import { useState } from 'react'
import Link from 'next/link'
import { i18n, pathnames } from '@constants'
import { usePageId, useCurrentLocale } from '@hooks'

export const LocaleSwitcher = () => {
  const pageId = usePageId()
  const [isOpen, setIsOpen] = useState(false)
  const locale = useCurrentLocale()

  return (
    <div className="flex justify-center">
      <div className="relative">
        <button
          className="text-base text-white hover:bg-blue-300 px-6 py-2 rounded-xl cursor-pointer capitalize"
          onClick={() => setIsOpen(!isOpen)}
        >
          {locale}
        </button>

        {isOpen && (
          <>
            <div
              className="fixed inset-0 h-full w-full z-10"
              onClick={() => setIsOpen(false)}
            />

            <div
              className="absolute right-0 mt-2 py-2 bg-white rounded-md shadow-xl z-20"
            >
              {i18n.locales.filter(l => l !== locale).map(l => {
                if (!pageId) return null
                const href = pathnames[pageId][l]
                return (
                  <li key={l} className="block ">
                    <Link href={href} locale={l} className="w-full bg-slate-300 px-4 py-2 text-sm capitalize text-gray-800 hover:bg-slate-200 hover:text-gray-700">
                      {l}
                    </Link>
                  </li>
                )
              })}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
