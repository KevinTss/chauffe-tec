import Image from 'next/image'
import { useCurrentLocale, useTranslate } from '@hooks'
import { Heading, Paragraph, Button, Icon, Badge, TestimonialCard, Underline } from '@components'
import { pathnames } from '@constants'
import cityImgUrl from '@assets/city.jpg'

import './AboutPage.styles.css'

export const AboutPage = () => {
  const t = useTranslate()
  const locale = useCurrentLocale()
  return (
    <>
      <section
        className="flex justify-center flex-grow w-full bg-center bg-cover relative"
        style={{
          backgroundImage: `url(${cityImgUrl.src})`
        }}
      >
        <div
          className="absolute top-0 left-0 right-0 bottom-0 opacity-80 z-10"
          style={{
            background: 'linear-gradient(180deg, transparent, black)',
          }}
        />
        <div className="flex justify-center flex-grow p-8 max-w-screen-xl pt-36 pb-16 z-20">
          <div className="flex flex-col items-center gap-8 text-center text-white">
            <Heading className="">
              {t('about.header.title')}
            </Heading>
            <Paragraph className="max-w-md">
              {t('about.header.description')}
            </Paragraph>
            <Underline />
          </div>
        </div>
      </section>

      <section className="flex justify-center flex-grow w-full">
        <div className="grid grid-cols-2 flex-grow p-8 max-w-screen-xl pt-36 pb-16">
          <div className="flex flex-col items-start gap-8">
            <Heading className="text-slate-800 highlight" level={2} withUnderline>
              {/* {t('about..title')} */}
              <br />
            </Heading>
            <Paragraph className="text-slate-700 max-w-md">
              {t('index.header.description')}
            </Paragraph>
            <Button href={pathnames['about'][locale]}>
              {t('index.header.cta')}
            </Button>
          </div>
          <div className="flex">
            <Image src={cityImgUrl} alt="Plumber" />
          </div>
        </div>
      </section>
    </>
  )
}
