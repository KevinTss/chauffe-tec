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
        <div className="grid grid-cols-2 flex-grow p-8 max-w-screen-xl pt-36 pb-16">
          <div className="flex flex-col items-start gap-8">
            <Heading className="text-slate-800 highlight" withUnderline>
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
          <div className="flex">
            <Image src={plumber1ImgUrl} alt="Plumber" />
          </div>
        </div>
      </section>

      <section className="flex justify-center flex-grow w-full">
        <div className="flex max-w-screen-xl gap-6 py-16">
          <Image width={100} height={30} src={vaillantImgUrl} alt="Vaillant" className='object-contain colored-on-hover' />
          <Image width={100} height={30} src={bulexImgUrl} alt="Bulex" className='object-contain colored-on-hover' />
          <Image width={100} height={30} src={vaillantImgUrl} alt="Vaillant" className='object-contain colored-on-hover' />
          <Image width={100} height={30} src={bulexImgUrl} alt="Bulex" className='object-contain colored-on-hover' />
          <Image width={100} height={30} src={vaillantImgUrl} alt="Vaillant" className='object-contain colored-on-hover' />
          <Image width={100} height={30} src={bulexImgUrl} alt="Bulex" className='object-contain colored-on-hover' />
        </div>
      </section>

      <section className="flex justify-center flex-grow w-full bg-slate-50">
        <div className="grid grid-cols-2 flex-grow py-16 px-8 max-w-screen-xl gap-10">
          <ul className="flex flex-col gap-4">
            <li className="flex flex-col gap-2 bg-white p-4 rounded-lg shadow-sm hover:shadow-md gap-4">
              <div className="text-blue-600 text-2xl">
                <Icon name="thermometer" />
              </div>
              <div className="flex flex-col gap-5">
                <Heading level={3} withUnderline>{t('index.service.1.title')}</Heading>
                <Paragraph>{t('index.service.1.description')}</Paragraph>
              </div>
            </li>
            <li className="flex flex-col gap-2 bg-white p-4 rounded-lg shadow-sm hover:shadow-md gap-4">
              <div className="text-blue-600 text-2xl">
                <Icon name="sun" />
              </div>
              <div className="flex flex-col gap-5">
                <Heading level={3} withUnderline>{t('index.service.2.title')}</Heading>
                <Paragraph>{t('index.service.2.description')}</Paragraph>
              </div>
            </li>
            <li className="flex flex-col gap-2 bg-white p-4 rounded-lg shadow-sm hover:shadow-md gap-4">
              <div className="text-blue-600 text-2xl">
                <Icon name="droplet" />
              </div>
              <div className="flex flex-col gap-5">
                <Heading level={3} withUnderline>{t('index.service.3.title')}</Heading>
                <Paragraph>{t('index.service.3.description')}</Paragraph>
              </div>
            </li>
            <li className="flex flex-col gap-2 bg-white p-4 rounded-lg shadow-sm hover:shadow-md gap-4">
              <div className="text-blue-600 text-2xl">
                <Icon name="home" />
              </div>
              <div className="flex flex-col gap-5">
                <Heading level={3} withUnderline>{t('index.service.4.title')}</Heading>
                <Paragraph>{t('index.service.4.description')}</Paragraph>
              </div>
            </li>
            <li className="flex flex-col gap-2 bg-white p-4 rounded-lg shadow-sm hover:shadow-md gap-4">
              <div className="text-blue-600 text-2xl">
                <Icon name="filter" />
              </div>
              <div className="flex flex-col gap-5">
                <Heading level={3} withUnderline>{t('index.service.5.title')}</Heading>
                <Paragraph>{t('index.service.5.description')}</Paragraph>
              </div>
            </li>
          </ul>
          <div className="">
            <div className="sticky top-32 flex flex-col justify-start items-start gap-8 pl-6">
              <Badge>{t('index.service.badge')}</Badge>
              <Heading level={2} withUnderline>{t('index.service.title')}</Heading>
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
          <Heading className="text-slate-800" level={2}>
            {t('index.testimonials.title')}
          </Heading>
          <Paragraph className="text-slate-700 max-w-md">
            {t('index.testimonials.description')}
          </Paragraph>
          <Underline />
        </div>
        <div className="flex max-w-screen-xl gap-8 w-full px-8">
          <TestimonialCard
            image={testimonial1ImgUrl.src}
            name="Jérôme"
            quote="I'm impressed with Chaufftec's commitment to renewable energy. They installed solar panels at my property, and the results are fantastic. Lower energy bills and a positive impact on the environment. Kudos to them!"
          />
          <TestimonialCard
            image={testimonial2ImgUrl.src}
            name="Magalie"
            quote="They transformed my bathroom into a luxurious space. Their sanitary services were top-notch, from design to installation. I'm thrilled with the result, and the attention to detail was exceptional."
          />
          <TestimonialCard
            image={testimonial3ImgUrl.src}
            name="André"
            quote="Chaufftec exceeded my expectations! Their heating services were impeccable. Quick response, efficient troubleshooting, and a friendly team. My home is now warm and cozy thanks to them. Highly recommended!"
          />
        </div>
      </section>
    </>
  )
}

// Le fonctionnement d'une pompe à chaleur est comparable à celui d'un réfrigérateur, si ce n'est qu'il est inversé. Dans un réfrigérateur, la chaleur est évacuée de l'intérieur vers l'extérieur : une pompe à chaleur fonctionne de façon inverse. La chaleur issue de l'air ou de la terre est acheminée par le système de chauffage dans la pièce d'habitation. Afin d'augmenter la température, la vapeur d'un réfrigérant est comprimée afin d'être suffisamment élevée pour créer du chauffage et de l'eau chaude sanitaire
