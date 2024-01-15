'use client'
import { notFound } from 'next/navigation'
import { usePageId } from '@hooks'
import { IndexPage } from '../index-page' //Problem with import
import { AboutPage } from '../about-page' //Problem with import
import { ServicesPage } from '../services-page' //Problem with import

type PageSwitcherProps = {
  urlSegments: string[]
}

export const PageSwitcher = ({ urlSegments }: PageSwitcherProps) => {
  const pageId = usePageId()
  const [, firstSegment = 'index'] = urlSegments

  switch (pageId) {
    case 'index':
      return <IndexPage />
    case 'about':
      return <AboutPage />
    case 'service':
      return <ServicesPage />
    default:
      return notFound()
  }
}
