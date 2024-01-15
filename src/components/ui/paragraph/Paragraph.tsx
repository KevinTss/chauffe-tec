type HeadingProps = {
  children: React.ReactNode
  className?: string
  bold?: boolean
  small?: boolean
  style?: React.CSSProperties
}

export const Paragraph = ({
  children,
  className,
  bold = false,
  small = false,
  ...props
}: HeadingProps) => {
  const weight = bold ? 'font-bold' : 'font-light'
  const size = small ? 'text-sm' : 'text-md'
  return (
    <p
      className={`text-inherit whitespace-pre-line ${size} ${weight} ${className}`}
      {...props}
    >
      {children}
    </p>
  )
}
