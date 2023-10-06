import CharacterPanel from '@/components/CharacterPanel'
import { Character } from '../types/character'
import { Hero } from '@/components/Hero'
import { Newsletter } from '@/components/Newsletter'
import { People } from '@/components/People'
import Rules from '@/components/Rules'
import imagePlayerPic from '@/images/player-pics/player-pic.png'

//Character Icon Imports
import iconBook1 from '@/images/character-icons/book-1.png'
import iconBook2 from '@/images/character-icons/book-2.png'
import iconChemistry1 from '@/images/character-icons/chemistry-1.png'
import iconChemistry2 from '@/images/character-icons/chemistry-2.png'
import iconClover1 from '@/images/character-icons/clover-1.png'
import iconClover2 from '@/images/character-icons/clover-2.png'
import iconComputerGod1 from '@/images/character-icons/computer-god.png'
import iconConstruction1 from '@/images/character-icons/construction-1.png'
import iconCowboy1 from '@/images/character-icons/cowboy-1.png'
import iconCowboy2 from '@/images/character-icons/cowboy-2.png'
import iconCowboy3 from '@/images/character-icons/cowboy-3.png'
import iconFamily1 from '@/images/character-icons/family-1.png'
import iconFamily2 from '@/images/character-icons/family-2.png'
import iconFamily3 from '@/images/character-icons/family-3.png'
import iconFamily4 from '@/images/character-icons/family-4.png'
import iconHandshake1 from '@/images/character-icons/handshake-1.png'
import iconHandshake2 from '@/images/character-icons/handshake-2.png'
import iconHourglass1 from '@/images/character-icons/hourglass-1.png'
import iconImmigrant1 from '@/images/character-icons/immigrant-1.png'
import iconImmigrant2 from '@/images/character-icons/immigrant-2.png'
import iconLightbulb1 from '@/images/character-icons/lightbulb-1.png'
import iconMoney1 from '@/images/character-icons/money-1.png'
import iconMovie1 from '@/images/character-icons/movie-1.png'
import iconScience1 from '@/images/character-icons/science-1.png'
import iconScience2 from '@/images/character-icons/science-2.png'
import iconScience3 from '@/images/character-icons/science-3.png'
import iconSkeletonCode1 from '@/images/character-icons/skeleton-code-1.png'
import iconStorybook1 from '@/images/character-icons/storybook-1.png'
import iconStoryland1 from '@/images/character-icons/storyland-1.png'
import iconStoryteller1 from '@/images/character-icons/storyteller-1.png'
import iconStoryteller2 from '@/images/character-icons/storyteller-2.png'
import iconUtopia1 from '@/images/character-icons/utopia-1.png'
import iconUtopia2 from '@/images/character-icons/utopia-2.png'
import iconWorkshop1 from '@/images/character-icons/workshop-1.png'


const characters: Character[] = [
  {
    name: 'Trevor',
    id: 1,
    image: imagePlayerPic,
    class: {title: "Ideas Guy", icon: iconLightbulb1},
    strengths: [
      {title: "Physical Sciences", icon: iconChemistry1},
      {title: "Smooth Operator", icon: iconConstruction1},
      {title: "Tinkerer", icon: iconWorkshop1},
      {title: "Optimist / Futurist", icon: iconUtopia1},
      {title: "Storyteller", icon: iconStorybook1},
      {title: "Content Production", icon: iconMovie1},
      {title: "Luck of the Irish", icon: iconClover2},
      {title: "Fast Learner", icon: iconBook2},

    ],
    weaknesses: [
      {title: "Sloppy Coder", icon: iconSkeletonCode1},
      {title: "\"Cowboy\" Tactics", icon: iconCowboy2},
      {title: "No Sales Experience", icon: iconMoney1},
    ],
    strategy: "Strategy",
    revenue: 40000,
    votes: 231,
    leader: false,
  },
  {
    name: 'Hadi',
    id: 2,
    image: imagePlayerPic,
    class: {title: "Code God", icon: iconComputerGod1},
    strengths: [
      {title: "Deeply Technical", icon: iconComputerGod1},
      {title: "Fast Builder", icon: iconConstruction1},
      {title: "Immigrant Bonus", icon: iconImmigrant2},
      {title: "Strong Network", icon: iconHandshake1},
      {title: "Better Beard", icon: imagePlayerPic},
    ],
    weaknesses: [
      {title: "Family Man", icon: iconFamily3},
      {title: "Bad at Design", icon: imagePlayerPic},
      {title: "No Sales Experience", icon: iconMoney1},

    ],
    strategy: "Strategy",
    revenue: 4000000,
    votes: 231,
    leader: false,
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <Rules />
      <CharacterPanel characters={characters}/>
      <Newsletter />
    </>
  )
}
