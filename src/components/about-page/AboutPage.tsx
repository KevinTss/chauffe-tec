import Image from 'next/image'
import { useTranslate } from '@hooks'
import { Heading, Paragraph, Icon, Underline, CallNowButton } from '@components'
import cityImgUrl from '@assets/city.jpg'
import logoFullUrl from '@assets/logo-full.svg'
import { motion } from 'framer-motion'

import './AboutPage.styles.css'

export const AboutPage = () => {
  const t = useTranslate()

  return (
    <>
      <section
        className="flex justify-center flex-grow w-full bg-center bg-cover relative"
        style={{
          backgroundImage: `url(${cityImgUrl.src})`,
        }}
      >
        <div
          className="absolute top-0 left-0 right-0 bottom-0 z-10"
          style={{
            background: 'linear-gradient(180deg, transparent, black)',
          }}
        />
        <div className="flex justify-center flex-grow p-8 max-w-screen-xl pt-36 pb-16 z-20">
          <motion.div
            className="flex flex-col items-center gap-8 text-center text-white"
            initial={{ opacity: 0, translateY: '20px' }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.8, ease: 'easeIn' }}
          >
            <Heading className="">{t('about.header.title')}</Heading>
            <Underline />
          </motion.div>
        </div>
      </section>
      <section className="flex justify-center flex-grow w-full">
        <div className="flex flex-col flex-grow p-8 max-w-screen-xl pt-16 pb-16">
          <motion.div
            initial={{ opacity: 0.8, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeIn' }}
          >
            <Image className="mx-auto" src={logoFullUrl} alt="chaufftec logo" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: 'easeIn' }}
          >
            <Paragraph className="max-w-md text-center mx-auto pt-16">
              {t('about.header.description')}
            </Paragraph>
          </motion.div>
          <div className="md:grid md:grid-cols-3 flex-grow flex flex-col gap-8 pt-12">
            <div
              className="flex p-6 gap-4 border-2 border-dashed rounded-xl"
              style={{
                borderColor: '#2B84CF',
                backgroundColor: '#2B84CF10',
              }}
            >
              <Icon
                name="map-pin"
                // @ts-ignore
                style={{ color: '#2B84CF', width: '28px', height: '28px' }}
              />
              <div className="flex flex-col gap-2">
                <Paragraph bold>{t('about.section.1.label')}</Paragraph>
                <Paragraph>
                  Rue example 123, 1000 Bruxelles
                  <br />
                  Belgium
                </Paragraph>
              </div>
            </div>
            <div
              className="flex p-6 gap-4 border-2 border-dashed rounded-xl"
              style={{
                borderColor: '#2B84CF',
                backgroundColor: '#2B84CF10',
              }}
            >
              <Icon
                name="phone"
                // @ts-ignore
                style={{ color: '#2B84CF', width: '28px', height: '28px' }}
              />
              <div className="flex flex-col gap-2">
                <Paragraph bold>{t('about.section.2.label')}</Paragraph>
                <Paragraph>
                  <a href="tel:+32484745736">+32 (0)484 74 57 36</a>
                  <br />
                  <a href="tel:+32483690256">+32 (0)483 69 02 56</a>
                </Paragraph>
              </div>
            </div>
            <div
              className="flex p-6 gap-4 border-2 border-dashed rounded-xl"
              style={{
                borderColor: '#2B84CF',
                backgroundColor: '#2B84CF10',
              }}
            >
              <Icon
                name="letter"
                // @ts-ignore
                style={{ color: '#2B84CF', width: '28px', height: '28px' }}
              />
              <div className="flex flex-col gap-2">
                <Paragraph bold>{t('about.section.3.label')}</Paragraph>
                <Paragraph>
                  <a href="mailto:chaufftec@icloud.com">chaufftec@icloud.com</a>
                </Paragraph>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallNowButton />
    </>
  )
}
