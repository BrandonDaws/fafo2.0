
import Link from 'next/link';
import Image from 'next/image';
import navLogo from '../assets/homebuttonwht.png';
import insta from '../assets/Asset3.png';
import faceb from '../assets/Asset1.png';


export default function Navbar(){
    return(
        <nav className='bg-black flex'>

        <div className=''>
        <a href='#' className='flex justify-center'>
        <Image 
        src={navLogo} 
        alt="FAFO OCTO"
        width={150}
        height={150} />
        </a>

        <ul className='flex justify-around '>
              <Link href="#" className='  text-white rounded  p-2  '>APPERAL</Link>
                <Link href="#" className='  text-white rounded  p-2 '>CAR WRAPS</Link>
               <Link href="/contact" className=' text-white rounded  p-2 '>ABOUT</Link>
               <Link href="/contact" className='  text-white rounded p-2 '>CONTACT</Link>
            </ul>
          
        

     <div className='text-center'>
        <h1 className='text-white text-6xl font-extrabold'>FAFO</h1>
        <h1 className='text-white text-6xl font-extrabold'>Fuck Around Find Out</h1>
        </div>
     
       

     
        <button className='rounded-full  '>
        <Image 
        src={insta} 
        alt="FAFO OCTO"
        width={50}
        height={50} /></button>
        

          
        <button className='rounded-full  '>
        <Image 
        src={faceb} 
        alt="FAFO OCTO"
        width={50}
        height={50}/></button>
        
        <a>
        <button className='bg-lime rounded-full '>BOOK CONSULT</button>
        </a>
      
          </div>
    </nav>

    )
}
