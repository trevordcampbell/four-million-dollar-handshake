import { StaticImageData } from "next/image";
import Image from "next/image";

export function AbilityIcon({ability, icon}:{ability: string, icon: StaticImageData}) {
  return(
    <div className="flex text-blue-950">
      <div className="mr-2 flex-shrink-0 self-center">
        <Image 
          className="w-12 h-12 object-cover object-center"
          src={icon}
          alt="Test"
          unoptimized
        />
      </div>
      <div className='self-center'>
        <h4 className="self-center font-medium uppercase tracking-wide leading-4">{ability}</h4>
      </div>
    </div>
  )
}