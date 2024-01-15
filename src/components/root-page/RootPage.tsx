import { AppFooter, AppHeader } from '@components'
import { PageSwitcher } from '../page-switcher'

type RootPageProps = {
  params: {
    segments: string[]
  }
  searchParams: Record<string, string>
}

export const RootPage = ({ params }: RootPageProps) => (
  <main className="flex flex-col min-h-screen items-center">
    <AppHeader />
    <PageSwitcher urlSegments={params.segments} />
    <AppFooter />
  </main>
)
