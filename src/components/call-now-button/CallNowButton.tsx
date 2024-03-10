'use client'
import { useBreakpoint } from '@hooks'
import { Icon } from '@components'

export const CallNowButton = () => {
  const breakpoint = useBreakpoint()

  if (!breakpoint || breakpoint !== 'mobile') return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-2 w-screen">
      <a
        className="bg-green-700 text-white flex gap-4 justify-center items-center px-4 py-2 w-full rounded-md"
        href="tel:+32484745736"
      >
        <Icon name="phone" />
        Call us
      </a>
    </div>
  )
}
