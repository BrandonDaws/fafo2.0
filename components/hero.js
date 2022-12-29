import Image from "next/image";
import hero from '../assets/hero.png';
export default function Hero() {
    return(
  
        <Image src={hero} className='w-screen p-0 h-auto' alt="Hero-image"/>
  
    );
}