
'use client'
import Link from 'next/link'
import { pathnames } from '@constants'
import { useCurrentLocale, useTranslate } from '@hooks'
import { Paragraph, Heading } from '@components'

import { SECTION_ID } from '@constants'
export const AppFooterContent = () => {
  const locale = useCurrentLocale()
  const t = useTranslate()
  return (

    <div className="flex flex-row w-full max-w-screen-xl text-white gap-6">
      <div className='grow w-1/2'>
        <Heading level={3} className='pb-4'>{t('footer.title.1')}</Heading>
        <Paragraph small className='pr-10'>{t('footer.title.1.description')}</Paragraph>
      </div>
      <div className='w-1/4'>
        <Heading level={3} className='pb-4'>{t('footer.title.2')}</Heading>
        <ul className="">
          <li>
            <Link href={pathnames['index'][locale]}>
              {t('footer.title.2.link.1')}
            </Link>
          </li>
          <li>
            <Link href={`${pathnames['index'][locale]}#${SECTION_ID.testimonial}`}>
              {t('footer.title.2.link.2')}
            </Link>
          </li>
        </ul>
      </div>
      <div className='w-1/4'>
        <Heading level={3} className='pb-4'>{t('footer.title.3')}</Heading>
        <ul className="">
          <li>
            <Link href={pathnames['index'][locale]}>Home</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

