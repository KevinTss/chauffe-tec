import Image from 'next/image'
import { useCurrentLocale, useTranslate } from '@hooks'
import { Heading, Paragraph, Button, Icon, Badge, TestimonialCard, Underline } from '@components'
import { pathnames, SECTION_ID } from '@constants'
import ReactTyped from "react-typed";
import plumber1ImgUrl from '@assets/plumber-1.jpg'
import vaillantImgUrl from '@assets/vaillant.png'
import bulexImgUrl from '@assets/bulex.png'
import testimonial1ImgUrl from '@assets/testimonial-1.jpg'
import testimonial2ImgUrl from '@assets/testimonial-2.jpg'
import testimonial3ImgUrl from '@assets/testimonial-3.jpg'
import { Locale } from '@types';

import './IndexPage.styles.css'

const words: Record<Locale, string[]> = {
  en: [" heating", " gas", " energy", " bathrooms", " water"],
  fr: [" chauffage", " gaz", " energie", " salles de bain", " eau"]
}

export const IndexPage = () => {
  const t = useTranslate()
  const locale = useCurrentLocale()
  return (
    <>
      <section className="flex justify-center flex-grow w-full">
        <div className="flex lg:grid lg:grid-cols-2 flex-grow p-8 max-w-screen-xl pt-36 pb-16">
          <div className="flex flex-col items-start gap-8">
            <Heading className="text-slate-800 highlight" underline>
              {t('index.header.title')}
              <br />
              <ReactTyped strings={words[locale]} typeSpeed={200} loop />
            </Heading>
            <Paragraph className="text-slate-700 max-w-md">
              {t('index.header.description')}
            </Paragraph>
            <Button href={pathnames['about'][locale]}>
              {t('index.header.cta')}
            </Button>
          </div>
          <div className="hidden lg:flex">
            <Image src={plumber1ImgUrl} alt="Plumber" />
          </div>
        </div>
      </section>

      <section className="flex justify-center flex-grow w-full">
        <div className="flex flex-wrap justify-center max-w-screen-xl gap-6 py-16 pr-8">
          <Image width={100} height={30} src={vaillantImgUrl} alt="Vaillant" className='object-contain colored-on-hover' />
          <Image width={100} height={30} src={bulexImgUrl} alt="Bulex" className='object-contain colored-on-hover' />
          <Image width={100} height={30} src={vaillantImgUrl} alt="Vaillant" className='object-contain colored-on-hover' />
          <Image width={100} height={30} src={bulexImgUrl} alt="Bulex" className='object-contain colored-on-hover' />
          <Image width={100} height={30} src={vaillantImgUrl} alt="Vaillant" className='object-contain colored-on-hover' />
          <Image width={100} height={30} src={bulexImgUrl} alt="Bulex" className='object-contain colored-on-hover' />
        </div>
      </section>

      <section className="flex justify-center flex-grow w-full bg-slate-50">
        <div className="flex flex-col lg:grid lg:grid-cols-2 flex-grow py-16 px-8 max-w-screen-xl gap-10">
          <ul className="flex flex-col gap-4 order-2 lg:order-1">
            <li className="flex flex-col gap-2 bg-white p-4 rounded-lg shadow-sm hover:shadow-md gap-4">
              <div className="text-blue-600 text-2xl">
                <Icon name="thermometer" />
              </div>
              <div className="flex flex-col gap-5">
                <Heading level={3} underline>{t('index.service.1.title')}</Heading>
                <Paragraph>{t('index.service.1.description')}</Paragraph>
              </div>
            </li>
            <li className="flex flex-col gap-2 bg-white p-4 rounded-lg shadow-sm hover:shadow-md gap-4">
              <div className="text-blue-600 text-2xl">
                <Icon name="sun" />
              </div>
              <div className="flex flex-col gap-5">
                <Heading level={3} underline>{t('index.service.2.title')}</Heading>
                <Paragraph>{t('index.service.2.description')}</Paragraph>
              </div>
            </li>
            <li className="flex flex-col gap-2 bg-white p-4 rounded-lg shadow-sm hover:shadow-md gap-4">
              <div className="text-blue-600 text-2xl">
                <Icon name="droplet" />
              </div>
              <div className="flex flex-col gap-5">
                <Heading level={3} underline>{t('index.service.3.title')}</Heading>
                <Paragraph>{t('index.service.3.description')}</Paragraph>
              </div>
            </li>
            <li className="flex flex-col gap-2 bg-white p-4 rounded-lg shadow-sm hover:shadow-md gap-4">
              <div className="text-blue-600 text-2xl">
                <Icon name="home" />
              </div>
              <div className="flex flex-col gap-5">
                <Heading level={3} underline>{t('index.service.4.title')}</Heading>
                <Paragraph>{t('index.service.4.description')}</Paragraph>
              </div>
            </li>
            <li className="flex flex-col gap-2 bg-white p-4 rounded-lg shadow-sm hover:shadow-md gap-4">
              <div className="text-blue-600 text-2xl">
                <Icon name="filter" />
              </div>
              <div className="flex flex-col gap-5">
                <Heading level={3} underline>{t('index.service.5.title')}</Heading>
                <Paragraph>{t('index.service.5.description')}</Paragraph>
              </div>
            </li>
          </ul>
          <div className="order-1 lg:order-2">
            <div className="sticky top-32 flex flex-col justify-start items-start gap-8 pl-0 log:pl-6">
              <Badge>{t('index.service.badge')}</Badge>
              <Heading level={2} underline>{t('index.service.title')}</Heading>
              <Paragraph style={{ maxWidth: '460px' }}>
                {t('index.service.description')}
              </Paragraph>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center flex-grow w-full py-16">
        <div
          id={SECTION_ID.testimonial}
          className="flex flex-col items-center max-w-screen-xl gap-3 mb-10 w-full px-8"
        >
          <Heading className="text-slate-800 text-center" level={2}>
            {t('index.testimonials.title')}
          </Heading>
          <Paragraph className="text-slate-700 max-w-md">
            {t('index.testimonials.description')}
          </Paragraph>
          <Underline />
        </div>
        <div className="flex flex-col lg:flex-row max-w-screen-xl gap-12 w-full px-8 pt-10">
          <TestimonialCard
            image={testimonial1ImgUrl.src}
            name="Jérôme"
            quote={t('index.testimonials.1')}
          />
          <TestimonialCard
            image={testimonial2ImgUrl.src}
            name="Magalie"
            quote={t('index.testimonials.2')}
          />
          <TestimonialCard
            image={testimonial3ImgUrl.src}
            name="André"
            quote={t('index.testimonials.3')}
          />
        </div>
      </section>
    </>
  )
}
