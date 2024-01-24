import { Navigation, Logo, LogoText, MobileNavigation } from '@components'

export const AppHeader = () => (
  <header className="fixed w-full px-4 lg:px-8 z-30">
    <div className='flex relative justify-between items-center px-4 lg:px-8 py-2 lg:py-4 max-w-screen-xl top-3 -z-10 mx-auto'>
      <div
        className="absolute top-0 left-0 right-0 bottom-0 -z-10 opacity-80 rounded-xl"
        style={{
          background: 'linear-gradient(100deg, #69a5d6,#2B84CF)',
        }}
      />
      <div className='relative'>
        <Logo />
        <LogoText style={{
          position: 'absolute',
          top: 0,
          left: '36px',
          transform: 'translate(0%, -55px)',
          color: 'white',
          pointerEvents: 'none',
          width: '90px'
        }} />
      </div>
      <Navigation />
      <MobileNavigation />
    </div>
  </header>
)
