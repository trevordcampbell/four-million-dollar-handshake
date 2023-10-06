import { BackgroundImage } from '@/components/BackgroundImage'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import AnimatedCounter from './AnimatedCounter'

export function Hero() {
  return (
    <div className="relative py-20 sm:pb-24 sm:pt-36">
      <BackgroundImage className="-bottom-14 -top-36" />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="text-4xl sm:text-6xl font-display font-bold tracking-tighter text-blue-700/60">
            On September 24, 2023, a <span className='bg-gradient-to-r from-blue-700 to-blue-500 inline-block text-transparent bg-clip-text'>$4,000,000 handshake</span> was made between friends.
          </h1>
          <h1 className="mt-10 text-4xl sm:text-6xl font-display font-bold tracking-tighter text-blue-600/60 ">
            They have only <span className='bg-gradient-to-r from-blue-700 to-blue-500 inline-block text-transparent bg-clip-text'>one year</span> to make it happen...
          </h1>
          {/* <div className='sm:hidden flex mt-2 -mb-4 justify-center items-center scale-75 sm:scale-100'>
            <AnimatedCounter />
          </div> */}
          <div className="mt-10 space-y-6 font-display text-lg leading-normal sm:text-2xl tracking-tight text-blue-900">
            <p>
              Late on that fateful eve, Trevor and Hadi made a deal:
            </p>
            <div className='inline-flex italic text-md sm:text-xl bg-blue-700/10 rounded-xl pl-3 pr-6 p-2 border-l-4 border-blue-700 leading-tight'>
              &quot;By this date next year, the both of us need to have raked in four million in revenue.&quot;
            </div>
            <p>
              Will both friends Win the race against time? O will one friend achieve total domination over the other??

            </p>
            {/* <p>
              Will both friends achieve victory??
            </p> */}
          </div>
          {/* <div className='hidden sm:flex justify-center items-center mt-10 scale-75 sm:scale-100'>
            <AnimatedCounter />
          </div> */}
          <Button href="#" className="mt-10 w-full sm:hidden">
          🗳️ Cast Your Vote
          </Button>
        </div>
      </Container>
    </div>
  )
}
