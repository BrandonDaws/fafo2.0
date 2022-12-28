
import Link from 'next/link';
import Image from 'next/image';
import navLogo from '../assets/homebuttonwht.png';
import insta from '../assets/instaicon.png';
import faceb from '../assets/fbicon.png';


export default function Navbar(){
    return(
        <nav>

        <div className='bg-black flex flex-row-reverse '>

        <div  >
        <button className='text-white'>BOOK CONSULT</button>
        </div>

        <div>
        <button className='text-white'>
        <Image 
        src={insta} 
        alt="FAFO OCTO"
        width={25}
        height={25} />Insta</button>
            </div>

            <div >
        <button className='text-white'>
        <Image 
        src={faceb} 
        alt="FAFO OCTO"
        width={25}
        height={25}/>FB</button>
        </div>

        <div >
        <h1 className='text-white'>FAFO</h1>
        <h1 className='text-white'>Fuck Around Find Out</h1>
        </div>
        
            <ul >
            <Image 
        src={navLogo} 
        alt="FAFO OCTO"
        width={150}
        height={150} />
              <Link href="#" className='text-white'>APPERAL</Link>
                <Link href="#" className='text-white'>CAR WRAPS</Link>
               <Link href="/contact" className='text-white'>ABOUT</Link>
               <Link href="/contact" className='text-white'>CONTACT</Link>
            </ul>
          </div>
    </nav>

    )
}
