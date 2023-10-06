import { ArrowIcon } from './ArrowIcon'
import { CheckIcon } from './CheckIcon'
import { DiamondIcon } from './DiamondIcon'

const ChallangeOutline = [
  {
    name: 'Challenge',
    id: 'challenge',
    description: 'Will both friends win the race against time? Or will one achieve total domination over the other?',
    items: [
      {title: "Both Hadi & Trevor will attempt to generate $4,000,000 in revenue over a one-year period.", icon: ArrowIcon},
      {title: "Anything goes - as long as both parties play by the established rules.", icon: DiamondIcon},

    ],
    mostPopular: true,
  },
  {
    name: 'Rules',
    id: 'rules',
    description: 'Will both friends win the race against time? Or will one achieve total domination over the other?',
    items: [
      {title: "Cutoff Date: Sept. 24, 2024", icon: ArrowIcon},
      {title: "No Venture Capital Money", icon: DiamondIcon},
      {title: "Must be 100% Legal", icon: DiamondIcon},
      {title: "Have Fun", icon: DiamondIcon},

    ],
    mostPopular: true,
  },
  {
    name: 'Prize',
    id: 'xxx',
    description: 'Will both friends win the race against time? Or will one achieve total domination over the other?',
    items: [
      {title: "Insane bragging rights", icon: DiamondIcon},
      {title: "All-expense paid trip to Arby's", icon: ArrowIcon},
      {title: "If neither party achieves the goal, the closest party wins.", icon: DiamondIcon},

    ],
    mostPopular: true,
  },
]

function classNames(...classes:any) {
  return classes.filter(Boolean).join(' ')
}

export default function Rules() {

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-4xl lg:max-w-6xl px-6 lg:px-8 items-center justify-items-center">
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {ChallangeOutline.map((section) => (
            <div
              key={section.id}
              className="ring-2 ring-blue-700 rounded-3xl p-8 xl:p-10 shadow-xl shadow-blue-700/50"
            >
              <div className="flex items-center justify-center gap-x-4 bg-gradient-to-r from-blue-700 to-blue-500 text-transparent bg-clip-text">
                <h3
                  id={section.id}
                  className="text-4xl sm:text-5xl font-display font-bold"
                >
                  {section.name}
                </h3>
              </div>
              {/* <p className="mt-4 text-sm leading-6 text-gray-600">{rules.description}</p> */}
              <ul role="list" className="mt-8 space-y-6 text-md leading-snug text-blue-900 font-semibold">
                {section.items.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <li key={item.title} className="flex gap-x-3">
                      <span className="h-6 w-5 flex-none text-blue-700/60"><IconComponent /></span>
                      {item.title}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}