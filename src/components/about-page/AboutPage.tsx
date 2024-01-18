import Image from 'next/image'
import { useCurrentLocale, useTranslate } from '@hooks'
import { Heading, Paragraph, Button, Icon, Badge, TestimonialCard, Underline } from '@components'
import cityImgUrl from '@assets/city.jpg'
import logoFullUrl from '@assets/logo-full.svg'

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
          className="absolute top-0 left-0 right-0 bottom-0 z-10"
          style={{
            background: 'linear-gradient(180deg, transparent, black)',
          }}
        />
        <div className="flex justify-center flex-grow p-8 max-w-screen-xl pt-36 pb-16 z-20">
          <div className="flex flex-col items-center gap-8 text-center text-white">
            <Heading className="">
              {t('about.header.title')}
            </Heading>
            {/* <Paragraph className="max-w-md">
              {t('about.header.description')}
            </Paragraph> */}
            <Underline />
          </div>
        </div>
      </section>

      <section className="flex justify-center flex-grow w-full">
        <div className="flex flex-col flex-grow p-8 max-w-screen-xl pt-16 pb-16">
          {/* <Heading className="text-slate-800 highlight" level={2} underline center>
            {t('about.section.1.title')}
          </Heading> */}
          <Image className='mx-auto' src={logoFullUrl} alt='chaufftec logo' />
          <Paragraph className="max-w-md text-center mx-auto pt-16">
            {t('about.header.description')}
          </Paragraph>
          <div className='md:grid md:grid-cols-3 flex-grow flex flex-col gap-8 pt-12'>
            <div
              className='flex p-6 gap-4 border-2 border-dashed rounded-xl'
              style={{
                borderColor: '#2B84CF',
                backgroundColor: '#2B84CF10',
              }}
            >
              {/* @ts-ignore */}
              <Icon name="map-pin" style={{ color: '#2B84CF', width: '28px', height: '28px' }} />
              <div className='flex flex-col gap-2'>
                <Paragraph bold>
                  {t('about.section.1.label')}
                </Paragraph>
                <Paragraph>
                  Rue example 123, 1000 Bruxelles<br />
                  Belgium
                </Paragraph>
              </div>
            </div>
            <div
              className='flex p-6 gap-4 border-2 border-dashed rounded-xl'
              style={{
                borderColor: '#2B84CF',
                backgroundColor: '#2B84CF10',
              }}
            >
              {/* @ts-ignore */}
              <Icon name="phone" style={{ color: '#2B84CF', width: '28px', height: '28px' }} />
              <div className='flex flex-col gap-2'>
                <Paragraph bold>
                  {t('about.section.2.label')}
                </Paragraph>
                <Paragraph>
                  <a href="tel:+32484745736">+32 (0)484 74 57 36</a><br />
                  <a href="tel:+32483690256">+32 (0)483 69 02 56</a>
                </Paragraph>
              </div>
            </div>
            <div
              className='flex p-6 gap-4 border-2 border-dashed rounded-xl'
              style={{
                borderColor: '#2B84CF',
                backgroundColor: '#2B84CF10',
              }}
            >
              {/* @ts-ignore */}
              <Icon name="letter" style={{ color: '#2B84CF', width: '28px', height: '28px' }} />
              <div className='flex flex-col gap-2'>
                <Paragraph bold>
                  {t('about.section.3.label')}
                </Paragraph>
                <Paragraph>
                  <a href="mailto:chaufftec@icloud.com">chaufftec@icloud.com</a>
                </Paragraph>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
