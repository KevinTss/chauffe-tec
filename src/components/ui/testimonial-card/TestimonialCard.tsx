import Image from 'next/image'
import { Paragraph } from '@components'

import './TestimonialCard.styles.css'

type TestimonialCardProps = {
  image: string,
  name: string
  quote: string
}

export const TestimonialCard = ({ image, name, quote, ...props }: TestimonialCardProps) => {
  return (
    <div
      className="flex gap-5"
      {...props}
    >
      <div className='shrink-0'>
        <Image
          width={85}
          height={85}
          src={image}
          alt={`tesitmonial-${name}`}
          className='object-contain rounded-full'
        />
      </div>
      <div className='grow'>
        <blockquote className="mb-2" cite={name}>
          <Paragraph small>{quote}</Paragraph>
        </blockquote>
        <Paragraph bold>{name}</Paragraph>
      </div>
    </div>
  )
}
