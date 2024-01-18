import { Navigation, Logo, MobileNavigation } from '@components'

export const AppHeader = () => (
  <header className="fixed w-full px-8 z-30">
    <div className='flex relative justify-between items-center px-8 py-4 max-w-screen-xl top-3 -z-10 mx-auto'>
      <div
        className="absolute top-0 left-0 right-0 bottom-0 -z-10 opacity-80 rounded-xl"
        style={{
          background: 'linear-gradient(100deg, #69a5d6,#2B84CF)',
        }}
      />
      <Logo />
      <Navigation />
      <MobileNavigation />
    </div>
  </header>
)
