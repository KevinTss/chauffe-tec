type HeadingProps = {
  children: React.ReactNode
  level?: 1 | 2 | 3
  className?: string
  withUnderline?: boolean
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
  children,
  className,
  level = 1,
  withUnderline = false,
}: HeadingProps) => {
  const Markup = `h${level}` as const

  return (
    <Markup
      className={`${font[level]} ${withUnderline ? mb[level] : ''} font-bold text relative whitespace-pre-line ${className}`}
    >
      {children}
      {withUnderline && <span
        style={{
          position: 'absolute',
          width: barWidth[level],
          height: '3px',
          backgroundColor: '#2B84CF',
          top: barSpace[level],
          left: '0',
        }}
      />}
    </Markup>
  )
}
