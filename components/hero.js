import Image from "next/image";
import hero from '../assets/hero.png';
export default function Hero() {
    return(
        <div >
        <Image src={hero} className='w-full p-0 h-full bg-cover' alt="Hero-image"/>
        </div>
    );
} 