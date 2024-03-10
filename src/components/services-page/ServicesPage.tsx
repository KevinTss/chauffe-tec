import Image, { StaticImageData } from 'next/image'
import { useTranslate } from '@hooks'
import { Heading, Paragraph, Underline, CallNowButton } from '@components'
import service1ImgUrl from '@assets/service-1.jpg'
import service2ImgUrl from '@assets/service-2.jpg'
import service3ImgUrl from '@assets/service-3.jpg'
import service4ImgUrl from '@assets/service-4.jpg'
import service5ImgUrl from '@assets/service-5.jpg'
import bathroomImgUrl from '@assets/bathroom.jpg'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CSSProperties } from 'react'

export const ServicesPage = () => {
  const t = useTranslate()

  return (
    <>
      <section
        className="flex justify-center flex-grow w-full bg-center bg-cover relative"
        style={{
          backgroundImage: `url(${bathroomImgUrl.src})`,
        }}
      >
        <div
          className="absolute top-0 left-0 right-0 bottom-0 opacity-70 z-10"
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
            <Heading className="text-center">
              {t('services.header.title')}
            </Heading>
            <Paragraph className="max-w-md">
              {t('services.header.description')}
            </Paragraph>
            <Underline />
          </motion.div>
        </div>
      </section>

      <Section
        title={t('services.1.title')}
        description={t('services.1.description')}
        url={service1ImgUrl}
      />

      <Section
        title={t('services.2.title')}
        description={t('services.2.description')}
        url={service2ImgUrl}
        reverse
      />

      <Section
        title={t('services.3.title')}
        description={t('services.3.description')}
        url={service3ImgUrl}
      />

      <Section
        title={t('services.4.title')}
        description={t('services.4.description')}
        url={service4ImgUrl}
        reverse
        extraImageCss={{ objectPosition: '50% 60%' }}
      />

      <Section
        title={t('services.5.title')}
        description={t('services.5.description')}
        url={service5ImgUrl}
        last
      />

      <CallNowButton />
    </>
  )
}

type SectionProps = {
  title: string
  description: string
  url: StaticImageData
  last?: boolean
  reverse?: boolean
  extraImageCss?: CSSProperties
}

const Section = ({
  title,
  description,
  url,
  last,
  reverse,
  extraImageCss,
}: SectionProps) => {
  const { ref: refText, inView: isTextInView } = useInView()
  const { ref: refImage, inView: isImageInView } = useInView()
  return (
    <section className="flex justify-center flex-grow w-screen">
      <div
        className={`flex flex-col lg:grid lg:grid-cols-2 flex-grow p-8 max-w-screen-xl pt-24 overflow-hidden ${
          last && 'pb-24'
        }`}
      >
        <motion.div
          ref={refText}
          className={`flex flex-col items-start gap-8 order-${
            reverse ? 1 : 1
          } lg:order-${reverse ? 2 : 1} ${reverse && 'lg:pl-10'}`}
          initial={{
            opacity: 0,
            translateY: reverse ? '-20px' : '20px',
          }}
          animate={{
            opacity: isTextInView ? 1 : 0,
            translateY: isTextInView ? 0 : reverse ? '-20px' : '20px',
          }}
          transition={{ duration: 0.8 }}
        >
          <Heading className="text-slate-800 highlight" level={2} underline>
            {title}
          </Heading>
          <Paragraph className="text-slate-700 max-w-full lg:max-w-md">
            {description}
          </Paragraph>
        </motion.div>
        <motion.div
          ref={refImage}
          className={`flex pt-10 lg:pt-0 order-${reverse ? 2 : 2} lg:order-${
            reverse ? 1 : 2
          }`}
          initial={{ opacity: 0, translateX: '40px' }}
          animate={{
            opacity: isImageInView ? 1 : 0,
            translateX: isImageInView ? 0 : '40px',
          }}
          transition={{ duration: 1 }}
        >
          <Image
            src={url}
            alt="Plumber"
            width={550}
            height={350}
            className="object-cover"
            style={{
              maxHeight: '350px',
              maxWidth: '550px',
              ...extraImageCss,
            }}
            layout="responsive"
          />
        </motion.div>
      </div>
    </section>
  )
}
