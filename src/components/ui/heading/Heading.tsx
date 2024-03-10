import { CSSProperties } from 'react'

type HeadingProps = {
  center?: boolean
  children: React.ReactNode
  className?: string
  level?: 1 | 2 | 3
  style?: CSSProperties
  underline?: boolean
}

const font: Record<NonNullable<HeadingProps['level']>, string> = {
  1: 'text-6xl',
  2: 'text-4xl',
  3: 'text-m',
}
const mb: Record<NonNullable<HeadingProps['level']>, string> = {
  1: 'mb-4',
  2: 'mb-4',
  3: 'mb-2',
}
const barSpace: Record<NonNullable<HeadingProps['level']>, string> = {
  1: 'calc(100% + 10px)',
  2: 'calc(100% + 10px)',
  3: 'calc(100% + 6px)',
}
const barWidth: Record<NonNullable<HeadingProps['level']>, string> = {
  1: '100px',
  2: '60px',
  3: '30px',
}

export const Heading = ({
  center = false,
  children,
  className,
  level = 1,
  style,
  underline = false,
}: HeadingProps) => {
  const Markup = `h${level}` as const

  return (
    <Markup
      className={`${font[level]} ${underline ? mb[level] : ''} ${
        center ? 'text-center' : 'text-left'
      } font-bold text relative whitespace-pre-line ${className}`}
      style={style}
    >
      {children}
      {underline && (
        <span
          style={{
            position: 'absolute',
            width: barWidth[level],
            height: '3px',
            backgroundColor: '#2B84CF',
            top: barSpace[level],
            left: center ? '50%' : '0',
            transform: center ? 'translateX(-50%)' : '',
          }}
        />
      )}
    </Markup>
  )
}
