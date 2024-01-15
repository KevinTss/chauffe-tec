import Link, { LinkProps } from 'next/link'
import type { CSSProperties } from 'react'

type ButtonProps = {
  children: React.ReactNode
  style?: CSSProperties
} & LinkProps

export const Button = ({ children, style = {}, ...props }: ButtonProps) => {
  return (
    <Link
      className="text-md px-6 py-3 cursor-pointer rounded-lg text-white font-bold"
      style={{
        backgroundColor: 'var(--color-primary)',
        ...style
      }}
      {...props}
    >
      {children}
    </Link>
  )
}
