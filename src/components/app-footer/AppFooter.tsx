
import { AppFooterContent } from './AppFooterContent'

export const AppFooter = () => {
  return (
    <footer
      className="flex flex-col items-center p-8 w-full"
      style={{
        background: 'linear-gradient(100deg, #69a5d6,#2B84CF)',
      }}
    >
      <AppFooterContent />
    </footer>
  )
}
