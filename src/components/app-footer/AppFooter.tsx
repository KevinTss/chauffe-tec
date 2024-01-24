
import { AppFooterContent } from './AppFooterContent'

export const AppFooter = () => (
  <footer
    className="flex flex-col items-center p-8 lg:p-16 w-full"
    style={{
      // background: 'linear-gradient(100deg, #69a5d6,#2B84CF)', // Original color
      background: 'linear-gradient(100deg, #115891,#69a5d6)',
    }}
  >
    <AppFooterContent />
  </footer>
)
