import Image from 'next/image'
import { useTranslate } from '@hooks'
import { Heading, Paragraph, Underline } from '@components'
import service1ImgUrl from '@assets/service-1.jpg'
import service2ImgUrl from '@assets/service-2.jpg'
import service3ImgUrl from '@assets/service-3.jpg'
import service4ImgUrl from '@assets/service-4.jpg'
import service5ImgUrl from '@assets/service-5.jpg'
import bathroomImgUrl from '@assets/bathroom.jpg'

export const ServicesPage = () => {
  const t = useTranslate()

  return (
    <>
      <section
        className="flex justify-center flex-grow w-full bg-center bg-cover relative"
        style={{
          backgroundImage: `url(${bathroomImgUrl.src})`
        }}
      >
        <div
          className="absolute top-0 left-0 right-0 bottom-0 opacity-70 z-10"
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
              {t('index.header.description')}
            </Paragraph>
            <Underline />
          </div>
        </div>
      </section>

      <section className="flex justify-center flex-grow w-full">
        <div className="grid grid-cols-2 flex-grow p-8 max-w-screen-xl pt-24">
          <div className="flex flex-col items-start gap-8">
            <Heading className="text-slate-800 highlight" level={2} withUnderline>
              {t('services.1.title')}
            </Heading>
            <Paragraph className="text-slate-700 max-w-md">
              {t('services.1.description')}
            </Paragraph>
          </div>
          <div className="flex">
            <Image src={service1ImgUrl} alt="Plumber" width={550} height={350} className='object-cover' style={{ maxHeight: '350px', maxWidth: '550px' }} />
          </div>
        </div>
      </section>

      <section className="flex justify-center flex-grow w-full">
        <div className="grid grid-cols-2 flex-grow p-8 max-w-screen-xl pt-24">
          <div className="flex">
            <Image src={service2ImgUrl} alt="Plumber" width={550} height={350} className='object-cover' style={{ maxHeight: '350px', maxWidth: '550px' }} />
          </div>
          <div className="flex flex-col items-start gap-8 pl-10">
            <Heading className="text-slate-800 highlight" level={2} withUnderline>
              {t('services.2.title')}
            </Heading>
            <Paragraph className="text-slate-700">
              {t('services.2.description')}
            </Paragraph>
          </div>
        </div>
      </section>

      <section className="flex justify-center flex-grow w-full">
        <div className="grid grid-cols-2 flex-grow p-8 max-w-screen-xl pt-24">
          <div className="flex flex-col items-start gap-8">
            <Heading className="text-slate-800 highlight" level={2} withUnderline>
              {t('services.3.title')}
            </Heading>
            <Paragraph className="text-slate-700 max-w-md">
              {t('services.3.description')}
            </Paragraph>
          </div>
          <div className="flex">
            <Image src={service3ImgUrl} alt="Plumber" width={550} height={350} className='object-cover' style={{ maxHeight: '350px', maxWidth: '550px' }} />
          </div>
        </div>
      </section>

      <section className="flex justify-center flex-grow w-full">
        <div className="grid grid-cols-2 flex-grow p-8 max-w-screen-xl pt-24">
          <div className="flex">
            <Image
              src={service4ImgUrl}
              alt="Plumber"
              width={550}
              height={350}
              className='object-cover'
              style={{
                maxHeight: '350px',
                maxWidth: '550px',
                objectPosition: '50% 60%'
              }}
            />
          </div>
          <div className="flex flex-col items-start gap-8 pl-10">
            <Heading className="text-slate-800 highlight" level={2} withUnderline>
              {t('services.4.title')}
            </Heading>
            <Paragraph className="text-slate-700 max-w-md">
              {t('services.4.description')}
            </Paragraph>
          </div>
        </div>
      </section>

      <section className="flex justify-center flex-grow w-full">
        <div className="grid grid-cols-2 flex-grow p-8 max-w-screen-xl pt-24 pb-24">
          <div className="flex flex-col items-start gap-8">
            <Heading className="text-slate-800 highlight" level={2} withUnderline>
              {t('services.5.title')}
            </Heading>
            <Paragraph className="text-slate-700 max-w-md">
              {t('services.5.description')}
            </Paragraph>
          </div>
          <div className="flex">
            <Image src={service5ImgUrl} alt="Plumber" width={550} height={350} className='object-cover' style={{ maxHeight: '350px', maxWidth: '550px' }} />
          </div>
        </div>
      </section>
    </>
  )
}
