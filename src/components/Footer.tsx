import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'

export function Footer() {
  return (
    <footer className="flex-none py-16">
      <Container className="flex flex-col items-center justify-center md:flex-row">
        {/* <Logo className="h-12 w-auto text-slate-900" /> */}
        <p className="mt-6 text-base text-slate-500 md:mt-0">
          Four Million Dollar Handshake &copy; {new Date().getFullYear()}
        </p>
      </Container>
    </footer>
  )
}
