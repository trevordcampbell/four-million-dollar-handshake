import { StaticImageData } from "next/image";
import Image from "next/image";

export function AbilityIcon({ability, icon}:{ability: string, icon: StaticImageData}) {
  return(
    <div className="flex text-blue-950">
      <div className="mr-2 flex-shrink-0 self-center">
        <Image 
          className="w-12 h-12 object-cover object-center"
          src={icon}
          alt={ability}
          priority
          quality={100}
          sizes="(min-width: 1280px) 10vw, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>
      <div className='self-center'>
        <h4 className="self-center font-medium uppercase tracking-wide leading-4">{ability}</h4>
      </div>
    </div>
  )
}