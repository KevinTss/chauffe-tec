
'use client'
import Link from 'next/link'
import { pathnames } from '@constants'
import { useCurrentLocale, useTranslate } from '@hooks'
import { Paragraph, Heading } from '@components'
import Image from 'next/image'
import logoFullUrl from '@assets/logo-full.svg'

import { SECTION_ID } from '@constants'
export const AppFooterContent = () => {
  const locale = useCurrentLocale()
  const t = useTranslate()

  return (
    <div className="flex flex-col lg:flex-row w-full max-w-screen-xl text-white gap-6">
      <div className='flex flex-col justify-start grow lg:w-1/2'>
        {/* <Heading level={3} className='pb-4'>{t('footer.title.1')}</Heading> */}
        <Image className='mb-4' src={logoFullUrl} alt='chaufftec logo' width={60} height={60} />
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
          <li>
            <Link href={pathnames['service'][locale]}>
              {t('footer.title.2.link.3')}
            </Link>
          </li>
          <li>
            <Link href={pathnames['about'][locale]}>
              {t('footer.title.2.link.4')}
            </Link>
          </li>
        </ul>
      </div>
      <div className='w-1/4'>
        <Heading level={3} className='pb-4'>{t('footer.title.3')}</Heading>
        <ul className="flex flex-col gap-2">
          <li>
            <Paragraph small>{t('footer.title.3.link.1')}</Paragraph>
          </li>
          <li>
            <Paragraph small>{t('footer.title.3.link.2')}</Paragraph>
          </li>
        </ul>
      </div>
    </div>
  )
}

