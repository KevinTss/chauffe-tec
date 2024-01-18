'use client'

import Link from 'next/link'
import { pathnames } from '@constants'
import { DictionaryKeys } from '@types'
import { useCurrentLocale, useTranslate } from '@hooks'
import { LocaleSwitcher, Icon } from '@components'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';

const navigationLinks = [
  { trKey: 'nav.index', path: pathnames['index'] },
  { trKey: 'nav.service', path: pathnames['service'] },
  { trKey: 'nav.about', path: pathnames['about'] },
] satisfies { trKey: DictionaryKeys; path: Record<'en' | 'fr', string> }[]

export const MobileNavigation = () => {
  const locale = useCurrentLocale()
  const t = useTranslate()
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <button className='block lg:hidden pointer text-white' onClick={() => setIsOpen(true)}>
        <Icon name='menu' />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`fixed top-0 left-0 w-full h-full bg-black`}
            initial={{ opacity: 0, translateX: '100%' }}
            animate={{ opacity: 1, translateX: 0 }}
            exit={{ opacity: 0, translateX: '100%' }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center justify-center h-full">
              <div className="flex flex-col bg-white w-full h-full">
                <button
                  className="mt-8 mr-10 mb-8 self-end w-4 h-4"
                  onClick={() => setIsOpen(false)}
                >
                  {/* @ts-ignore */}
                  <Icon name='x' style={{ width: '24px', height: '24px' }} />
                </button>
                {navigationLinks.map(({ trKey, path }) => (
                  <Link
                    key={trKey}
                    className="text-base hover:bg-blue-300 px-6 py-2 rounded-xl cursor-pointer"
                    href={path[locale]}
                  >
                    {t(trKey)}
                  </Link>
                ))}
                <LocaleSwitcher />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
