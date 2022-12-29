import Link from "next/link";
import Image from "next/image";
import navLogo from "../assets/homebuttonwht.png";
import insta from "../assets/Asset3.png";
import faceb from "../assets/Asset1.png";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";


export default function Navbar() {

    const [showDropDown, setShowDropDown] = useState(false)

  return (
    <nav className="bg-black w-full top-0 justify-between   ">

      <div className="pb-2 sm:flex ">

        <div className="flex justify-between p-4">
            <div className="flex">
          <a href="/" className=" p-2">
            <Image src={navLogo} alt="FAFO OCTO" width={150} height={150} />
          </a>
          </div>

          <div className="hidden  text-white font-black text-lg sm:flex p-8 pt-8 ">
            <Link href='/' className="p-2"> Apparel </Link>
            <Link href='/' className="p-2"> Wraps</Link>
            <Link href='/' className="p-2"> About</Link>
            <Link href="/contact" className="p-2"> Contact </Link>
          </div>

          <div className="flex w-6 h-6 mr-2 justify-center bg-lime  sm:hidden ">
            <button className="hover:cursor-pointer relative  ">
            <AiOutlineMenu  onClick={() => setShowDropDown(!showDropDown)}/>

             {showDropDown && (
                    <div className="absolute cursor-pointer right-2 bg-gray-400">
                    <ul className="p-5">
                       <li><Link href='/' className="p-2 hover:bg-purp ">Apparel</Link></li> 
                       <li><Link href='/' className="p-2 hover:bg-purp">Wraps</Link></li> 
                       <li><Link href='/'  className="p-2 hover:bg-purp">About</Link></li> 
                       <li><Link href="/contact"  className="p-2 hover:bg-purp"> Contact </Link></li>
                    </ul>
                    </div>
             )}
             
            </button>
          </div>

        </div>

        <div className=" hidden sm:flex justify-center p-2 pb-10">
          <h1 className="text-white text-6xl font-extrabold">FAFO</h1>
        </div>

        <div className="flex justify-evenly">
          <button className="  ">
            <Image src={insta} alt="FAFO INSTA" width={35} height={35} />
          </button>

          <button className="">
            <Image src={faceb} alt="FAFO FACEB" width={35} height={35} />
          </button>

          <a>
            <button className="bg-lime rounded-full p-2 font-bold flex">
              BOOK CONSULT
            </button>
          </a>

        </div>

      </div>
    </nav>
  );
}
