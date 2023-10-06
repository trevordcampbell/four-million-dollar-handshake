import { CheckIcon } from "./CheckIcon"

const tiers = [
  {
    name: 'Personal',
    id: 'tier-personal',
    href: '#',
    priceMonthly: 'The Rules',
    description: "Will both friends win? Or will one defeat the other through total domination??",
    features: [
      'One Year to Achieve $4,000,000 in Revenue',
      'No Venture Capital Money',
      'Must Be Legal',
      'Have Fun',
    ],
    featured: true,
  },
  {
    name: 'Team',
    id: 'tier-team',
    href: '#',
    priceMonthly: '$99',
    description: 'A plan that scales with your rapidly growing business.',
    features: ['Priority support', 'Single sign-on', 'Enterprise integrations', 'Custom reporting tools'],
    featured: false,
  },
]

function classNames(...classes:any) {
  return classes.filter(Boolean).join(' ')
}

export default function OldRules() {
  return (
    <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl" aria-hidden="true">
        <div
          className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#1d4ed8] to-[#4f46e5] opacity-30"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div className="mx-auto max-w-2xl lg:max-w-4xl divide-y font-display divide-gray-200 overflow-hidden rounded-lg bg-white shadow-2xl">
        <div className="px-4 py-5 sm:px-6">
          <p className="mt-2 text-4xl text-center font-bold tracking-tighter sm:text-5xl text-blue-900">
            <span className="bg-gradient-to-r from-blue-700 to-blue-500 inline-block text-transparent bg-clip-text">The Rules</span>
          </p>
          <p className="mt-6 text-center text-lg leading-8 text-blue-900">
            Will both friends win? Or will one defeat the other through total domination??
          </p>
          {/* We use less vertical padding on card headers on desktop than on body sections */}
        </div>
        <div className="px-4 py-5 sm:p-6">
          <ul className="mt-6 text-2xl font-semibold font-mono space-y-4 tracking-tighter text-blue-900">
            <li><span className="mr-4">⌛</span><span className="bg-gradient-to-r from-blue-700 to-blue-500 inline-block text-transparent bg-clip-text">One Year to Achieve $4,000,000 in Revenue</span></li>
            <li><span className="mr-4">🚫</span><span className="bg-gradient-to-r from-blue-700 to-blue-500 inline-block text-transparent bg-clip-text">No Venture Capital Money</span></li>
            <li><span className="mr-4">📜</span><span className="bg-gradient-to-r from-blue-700 to-blue-500 inline-block text-transparent bg-clip-text">Must Be Legal</span></li>
            <li><span className="mr-4">🤩</span><span className="bg-gradient-to-r from-blue-700 to-blue-500 inline-block text-transparent bg-clip-text">Have Fun</span></li>
          </ul>  
        </div>
      </div>
    </div>
  )
}
