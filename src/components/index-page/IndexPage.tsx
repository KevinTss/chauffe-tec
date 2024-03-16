import Image from 'next/image'
import { useCurrentLocale, useTranslate } from '@hooks'
import {
  Heading,
  Paragraph,
  Button,
  Icon,
  Badge,
  TestimonialCard,
  Underline,
  Pricing,
  CallNowButton,
} from '@components'
import { pathnames, SECTION_ID } from '@constants'
import ReactTyped from 'react-typed'
import plumber1ImgUrl from '@assets/plumber-1.jpg'
import vaillantImgUrl from '@assets/vaillant.png'
import bulexImgUrl from '@assets/bulex.png'
import viessmannImgUrl from '@assets/viessmann.png'
import junckersImgUrl from '@assets/junckers.png'
import radsonImgUrl from '@assets/radson.png'
import ferroliImgUrl from '@assets/ferroli.png'
import testimonial1ImgUrl from '@assets/testimonial-1.jpg'
import testimonial2ImgUrl from '@assets/testimonial-2.jpg'
import testimonial3ImgUrl from '@assets/testimonial-3.jpg'
import { Locale } from '@types'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import './IndexPage.styles.css'

const words: Record<Locale, string[]> = {
  en: [' heating', ' gas', ' energy', ' bathrooms', ' water'],
  fr: [' chauffage', ' gaz', ' energie', ' salles de bain', ' eau'],
}

export const IndexPage = () => {
  const t = useTranslate()
  const locale = useCurrentLocale()

  return (
    <>
      <section className="flex justify-center flex-grow w-full overflow-hidden">
        <div className="flex lg:grid lg:grid-cols-2 flex-grow p-8 max-w-screen-xl pt-24 lg:pt-36 pb-10 lg:pb-16">
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
          <motion.div
            className="hidden lg:flex"
            initial={{ opacity: 0, translateX: '30%' }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.7, ease: 'easeIn' }}
          >
            <Image src={plumber1ImgUrl} alt="Plumber" />
          </motion.div>
        </div>
      </section>

      <section className="hidden lg:flex justify-center flex-grow w-full">
        <div className="flex flex-wrap justify-center max-w-screen-xl gap-8 py-16 pr-8">
          <Image
            width={100}
            height={30}
            src={vaillantImgUrl}
            alt="Vaillant"
            className="object-contain colored-on-hover"
          />
          <Image
            width={100}
            height={30}
            src={bulexImgUrl}
            alt="Bulex"
            className="object-contain colored-on-hover"
          />
          <Image
            width={100}
            height={30}
            src={viessmannImgUrl}
            alt="Viessmann"
            className="object-contain colored-on-hover"
            style={{ transform: 'translateY(6px)' }}
          />
          <Image
            width={100}
            height={30}
            src={radsonImgUrl}
            alt="Radson"
            className="object-contain colored-on-hover"
          />
          <Image
            width={100}
            height={30}
            src={junckersImgUrl}
            alt="Junckers"
            className="object-contain colored-on-hover"
          />
          <Image
            width={100}
            height={30}
            src={ferroliImgUrl}
            alt="Ferroli"
            className="object-contain colored-on-hover"
          />
        </div>
      </section>

      <SectionServices />

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

      <Pricing />

      <CallNowButton />
    </>
  )
}

const SectionServices = () => {
  const t = useTranslate()
  const { ref: refLi1, inView: isLi1InView } = useInView()
  const { ref: refLi2, inView: isLi2InView } = useInView()
  const { ref: refLi3, inView: isLi3InView } = useInView()
  const { ref: refLi4, inView: isLi4InView } = useInView()
  const { ref: refLi5, inView: isLi5InView } = useInView()
  return (
    <section className="flex justify-center flex-grow w-full bg-slate-50">
      <div className="flex flex-col lg:grid lg:grid-cols-2 flex-grow py-16 px-8 max-w-screen-xl gap-10">
        <ul className="flex flex-col gap-4 order-2 lg:order-1">
          <motion.li
            ref={refLi1}
            className="flex flex-col gap-2 bg-white p-4 rounded-lg shadow-sm hover:shadow-md gap-4"
            initial={{ opacity: 0, translateX: '-100%' }}
            animate={{
              opacity: isLi1InView ? 1 : 0,
              translateX: isLi1InView ? 0 : '-100%',
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-blue-600 text-2xl">
              <Icon name="thermometer" />
            </div>
            <div className="flex flex-col gap-5">
              <Heading level={3} underline>
                {t('index.service.1.title')}
              </Heading>
              <Paragraph>{t('index.service.1.description')}</Paragraph>
            </div>
          </motion.li>
          <motion.li
            ref={refLi2}
            className="flex flex-col gap-2 bg-white p-4 rounded-lg shadow-sm hover:shadow-md gap-4"
            initial={{ opacity: 0, translateX: '-100%' }}
            animate={{
              opacity: isLi2InView ? 1 : 0,
              translateX: isLi2InView ? 0 : '-100%',
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-blue-600 text-2xl">
              <Icon name="sun" />
            </div>
            <div className="flex flex-col gap-5">
              <Heading level={3} underline>
                {t('index.service.2.title')}
              </Heading>
              <Paragraph>{t('index.service.2.description')}</Paragraph>
            </div>
          </motion.li>
          <motion.li
            ref={refLi3}
            className="flex flex-col gap-2 bg-white p-4 rounded-lg shadow-sm hover:shadow-md gap-4"
            initial={{ opacity: 0, translateX: '-100%' }}
            animate={{
              opacity: isLi3InView ? 1 : 0,
              translateX: isLi3InView ? 0 : '-100%',
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-blue-600 text-2xl">
              <Icon name="droplet" />
            </div>
            <div className="flex flex-col gap-5">
              <Heading level={3} underline>
                {t('index.service.3.title')}
              </Heading>
              <Paragraph>{t('index.service.3.description')}</Paragraph>
            </div>
          </motion.li>
          <motion.li
            ref={refLi4}
            className="flex flex-col gap-2 bg-white p-4 rounded-lg shadow-sm hover:shadow-md gap-4"
            initial={{ opacity: 0, translateX: '-100%' }}
            animate={{
              opacity: isLi4InView ? 1 : 0,
              translateX: isLi4InView ? 0 : '-100%',
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-blue-600 text-2xl">
              <Icon name="home" />
            </div>
            <div className="flex flex-col gap-5">
              <Heading level={3} underline>
                {t('index.service.4.title')}
              </Heading>
              <Paragraph>{t('index.service.4.description')}</Paragraph>
            </div>
          </motion.li>
          <motion.li
            ref={refLi5}
            className="flex flex-col gap-2 bg-white p-4 rounded-lg shadow-sm hover:shadow-md gap-4"
            initial={{ opacity: 0, translateX: '-100%' }}
            animate={{
              opacity: isLi5InView ? 1 : 0,
              translateX: isLi5InView ? 0 : '-100%',
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-blue-600 text-2xl">
              <Icon name="filter" />
            </div>
            <div className="flex flex-col gap-5">
              <Heading level={3} underline>
                {t('index.service.5.title')}
              </Heading>
              <Paragraph>{t('index.service.5.description')}</Paragraph>
            </div>
          </motion.li>
        </ul>
        <div className="order-1 lg:order-2">
          <div className="sticky top-32 flex flex-col justify-start items-start gap-8 pl-0 log:pl-6">
            <Badge>{t('index.service.badge')}</Badge>
            <Heading level={2} underline>
              {t('index.service.title')}
            </Heading>
            <Paragraph style={{ maxWidth: '460px' }}>
              {t('index.service.description')}
            </Paragraph>
          </div>
        </div>
      </div>
    </section>
  )
}
