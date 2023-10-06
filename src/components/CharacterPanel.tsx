// components/CharacterPicker.tsx
import { Character } from '@/app/types/character';
import Divider from './Divider';
import Image from 'next/image';
import { AbilityIcon } from './AbilityIcon';
import ProgressBar from './ProgressBar';

interface CharacterPanelProps {
  characters: Character[];
}

const CharacterPanel: React.FC<CharacterPanelProps> = ({characters}) => {

  return (

    <div className="relative isolate bg-slate-950 px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl" aria-hidden="true">
        <div
          className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#1d4ed8] to-[#4f46e5] opacity-30"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <p className="mt-2 mb-6 text-4xl text-center font-bold tracking-tighter sm:text-5xl text-blue-900">
        <span className="bg-gradient-to-r from-blue-200 to-blue-100 inline-block text-transparent bg-clip-text">Choose Your Fighter</span>
      </p>
      <div className='grid grid-cols-1 gap-8'>
        {characters.map(character => {
          const ClassIcon = character.class.icon;

          return(
            <div key={character.id} className="mx-auto max-w-4xl lg:max-w-6xl font-display overflow-hidden rounded-lg bg-white shadow-2xl">
              <div className=" grid grid-cols-5 gap-4 bg-blue-100">
                {/* Left Image Section */}
                <div className='relative col-span-5 sm:col-span-2'>
                  {/* Character Image */}
                  <Image 
                    className="w-full h-full min-h-[24rem] object-cover object-center bg-gradient-to-t from-slate-950 to white"
                    src={character.image}
                    alt={character.name}
                    unoptimized
                  />
                  {/* Character Name + Title Section */}
                  <div className='absolute bottom-0 left-0 pt-32 w-full bg-gradient-to-t from-slate-950 to-transparent'>
                    <div className='ml-6 mb-8'>

                      <p className="text-white text-5xl font-display font-medium">
                        {character.name}
                      </p>

                      <div className="my-2 w-1/2 border-t-2 border-slate-100/25" />

                      <div className="flex text-white uppercase tracking-wide">
                        <div className="mr-4 flex-shrink-0 self-center">
                          {/* TODO: Replace SVG with character.class.icon - should it be svg or image? */}
                          {/* <svg
                            className="h-8 w-8 border border-gray-300 bg-white text-gray-300"
                            preserveAspectRatio="none"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 200 200"
                            aria-hidden="true"
                          >
                            <path vectorEffect="non-scaling-stroke" strokeWidth={1} d="M0 0l200 200M0 200L200 0" />
                          </svg> */}
                          <Image 
                            className="w-12 h-12 object-cover object-center"
                            src={character.class.icon}
                            alt="Test"
                            unoptimized
                          />
                          {/* <div className='h-8 w-8 text-blue-500'>
                            <ClassIcon />
                          </div> */}
                        </div>
                        <div className='self-center'>
                          <h4 className="text-white uppercase tracking-wide">{character.class.title}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Stats Section */}
                <div className='col-span-5 sm:col-span-3 grid grid-cols-1 gap-6 py-4 sm:py-6 px-4 sm:px-6'>

                  {/* Strengths Section*/}
                  <div className='mb-4 order-1'>
                    <Divider title="Strengths" />
                    <div className='mt-4 grid grid-cols-3 gap-4'>
                      {character.strengths.map(strength => (
                        <div key={strength.title}>
                          <AbilityIcon ability={strength.title} icon={strength.icon} />
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Weaknesses Section*/}
                  <div className='mb-4 order-2'>
                    <Divider title="Weaknesses" />
                    <div className='mt-4 grid grid-cols-3 gap-4'>
                      {character.weaknesses.map(weakness => (
                        <div key={weakness.title}>
                          <AbilityIcon ability={weakness.title} icon={weakness.icon} />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Strategy Section */}
                  <div className='mb-4 order-3'>
                    <Divider title="Strategy" />
                    <p className="mt-4 leading-5">{character.strategy}</p>
                  </div>

                  {/* Progress Section */}
                  <div className='mb-4 order-first sm:order-4'>
                    <Divider title="Progress" />
                    <ProgressBar current={character.revenue} />
                  </div>

                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default CharacterPanel;
