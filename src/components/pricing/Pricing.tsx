'use client'
import { Button, Heading, Paragraph, Underline } from '@components'
import { useTranslate, useBreakpoint } from '@hooks'
import { DictionaryKeys } from '@types'
import { InlineWidget, useCalendlyEventListener } from 'react-calendly'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export const Pricing = () => {
  const t = useTranslate()
  const [isCalendarVisible, setIsCalendarVisible] = useState(false)
  return (
    <section className="bg-white">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
        <div className="flex flex-col items-center max-w-screen-xl gap-3 mb-10 w-full px-8">
          <Heading className="text-slate-800 text-center" level={2}>
            {t('index.pricing.title')}
          </Heading>
          <Paragraph className="text-slate-700 max-w-md">
            {t('index.pricing.description')}
          </Paragraph>
          <Underline />
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0">
          {[1, 2].map(nb => (
            <PriceColumn key={nb} col={nb} onBook={() => setIsCalendarVisible(true)} />
          ))}
        </div>
      </div>
      <CalendlyModal isVisible={isCalendarVisible} setVisible={setIsCalendarVisible} />
    </section>
  )
}

const PriceColumn = ({ col, onBook }: { col: number, onBook: VoidFunction }) => {
  const t = useTranslate()
  return (
    <div
      className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow  xl:p-8"
      style={{ minWidth: '285px' }}
    >
      <Heading className="text-slate-800 text-center" level={3}>
        {t(`index.pricing.${col}.title` as DictionaryKeys)}
      </Heading>
      <Paragraph className="text-slate-700 text-center max-w-md">
        {t(`index.pricing.${col}.description` as DictionaryKeys)}
      </Paragraph>
      <div className="flex items-baseline justify-center my-8">
        <span className="mr-2 text-3xl font-extrabold">
          {t(`index.pricing.${col}.price` as DictionaryKeys)}
          <i className='text-slate-600 font-normal text-xs pl-1'>(HTVA)</i>
        </span>
      </div>
      <ul role="list" className="mb-8 space-y-4 text-left grow">
        {[1, 2, 3, 4, 5].map(nb => (
          <ListItem key={nb} col={col} item={nb} />
        ))}
      </ul>
      <button
        onClick={onBook}
        className="text-md px-6 py-3 cursor-pointer rounded-lg text-white font-bold"
        style={{
          backgroundColor: 'var(--color-primary)',
        }}
      >
        {t(`index.pricing.cta`)}
      </button>
    </div>
  )
}

const ListItem = ({ col, item }: { col: number; item: number }) => {
  const t = useTranslate()
  const text = t(`index.pricing.${col}.${item}` as DictionaryKeys)
  if (!text) return null
  return (
    <li className="flex items-center space-x-3">
      <svg
        className="flex-shrink-0 w-5 h-5 text-green-500"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
      <span>{text}</span>
    </li>
  )
}

const CALENDLY_LINK = 'https://calendly.com/chaufftec/depannage-1'
const CALENDLY_RULES = '?hide_event_type_details=1&hide_gdpr_banner=1'

type CalendlyModalProps = {
  setVisible: (visible: boolean) => void
  isVisible: boolean
}

const CalendlyModal = ({ isVisible, setVisible }: CalendlyModalProps) => {
  // const [isCalendarVisible, setIsCalendarVisible] = useState(false)
  const breakpoint = useBreakpoint()
  const isMobile = breakpoint === 'mobile'

  // useCalendlyEventListener({
  //   onEventTypeViewed: () => setIsCalendarVisible(true),
  //   onEventScheduled: () => setIsCalendarVisible(false),
  // })

  return (
    <AnimatePresence>
      {isVisible && (
        <div 
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        onClick={()=> setVisible(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="bg-white rounded-lg p-8"
          >
            <InlineWidget
              url={`${CALENDLY_LINK}${CALENDLY_RULES}`}
              styles={{
                height: isMobile ? window.innerHeight : '698px',
                width: isMobile ? window.innerWidth : '448px',
              }}
              // This works only with paid calendy account
              pageSettings={{
                backgroundColor: 'white',
                primaryColor: '#599CD9',
                textColor: 'black',
                hideEventTypeDetails: true,
                hideLandingPageDetails: true,
                hideGdprBanner: true,
              }}
            />
            {isMobile && (
              <button
              onClick={()=> setVisible(false)}
              className="fixed bottom-14 left-2/4 -translate-x-2/4 text-md px-6 py-3 cursor-pointer rounded-lg text-white font-bold"
              style={{
                backgroundColor: 'var(--color-primary)',
              }}
            >
              Back
            </button>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
