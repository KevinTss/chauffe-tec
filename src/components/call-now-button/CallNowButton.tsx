'use client'
import { useBreakpoint } from '@hooks'
import { Icon, Tooltip } from '@components'

export const CallNowButton = () => {
  const breakpoint = useBreakpoint()

  if (!breakpoint || breakpoint !== 'mobile') return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-2 w-screen">
      <Tooltip
        renderOpener={(props) => (
          <div
            className="bg-green-700 text-white flex gap-4 justify-center items-center px-4 py-2 w-full rounded-md"
            {...props}
          >
            <Icon name="phone" />
            Call us
          </div>
        )}
        content={(
          <div className='flex flex-col gap-4' style={{ width: '80vw' }}>
            <a className="flex gap-4 justify-center items-center text-xs py-2" href="https://wa.me/0032483690256">
              <Icon name="whatsapp" color='#25D366' />
              Christian - +32 (0)483 69 02 56
            </a>
            <a className="flex gap-4 justify-center items-center text-xs py-2" href="https://wa.me/0032484745736">
              <Icon name="whatsapp" color='#25D366' />
              Jérôme - +32 (0)484 74 57 36
            </a>
          </div>
        )}
      />
    </div>
  )
}
