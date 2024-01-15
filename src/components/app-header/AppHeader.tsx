import { Navigation, Logo } from '@components'

export const AppHeader = () => (
  <header
    className="fixed flex justify-between items-center px-8 py-4 max-w-screen-xl w-full top-3 z-30"
  >
    <div
      className="absolute top-0 left-0 right-0 bottom-0 -z-10 opacity-80 rounded-xl"
      style={{
        background: 'linear-gradient(100deg, #69a5d6,#2B84CF)',
      }}
    />
    <Logo />
    <Navigation />
  </header>
)
