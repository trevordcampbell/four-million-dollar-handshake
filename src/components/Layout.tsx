import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export function Layout({
  children,
  showHeader = true,
  showFooter = true,
}: {
  children: React.ReactNode
  showHeader?: boolean
  showFooter?: boolean
}) {
  return (
    <>
      {showHeader && <Header />}
      <main className="flex-auto">{children}</main>
      {showFooter && <Footer />}
    </>
  )
}
