import { Container } from '@/components/Container'
import AnimatedCounterSmall from './AnimatedCounterSmall'
import AnimatedCounter from './AnimatedCounter'

export function Header() {
  return (
    // <header className="sticky top-0 z-50 flex-none lg:pt-11 lg:pb-6 bg-white/25 backdrop-blur-md">
    <header className="sticky top-0 z-50 flex-none pb-2 sm:pt-6 sm:pb-4 bg-blue-700/80 backdrop-blur-md">

      <Container className="flex items-center justify-center">
        {/* <div className="mt-10 lg:mt-0 lg:grow lg:basis-0">
          <Logo className="h-12 w-auto text-slate-900" />
        </div> */}
        <div className='block  sm:hidden justify-center items-center'>
          <AnimatedCounterSmall  />
        </div>
        <div className='hidden sm:block justify-center items-center scale-100 sm:scale-100'>
          <AnimatedCounter />
        </div>
        {/* <div className="order-first -mx-4 flex flex-auto basis-full overflow-x-auto whitespace-nowrap border-b border-blue-600/10 py-4 font-mono text-sm text-blue-600 sm:-mx-6 lg:order-none lg:mx-0 lg:basis-auto lg:border-0 lg:py-0">
          <div className="mx-auto flex items-center gap-4 px-4">
            <time dateTime="2023-09-24">Sept. 24, 2023</time>
            <ArrowIcon className="h-4 w-4 overflow-visible fill-current stroke-current" />
            <time dateTime="2024-09-24">Sept. 24, 2024</time>
          </div>
        </div> */}
        {/* <div className="hidden sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
          <Button href="#">Get your tickets</Button>
        </div> */}
      </Container>
    </header>
  )
}
