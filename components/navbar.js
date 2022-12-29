import Link from "next/link";
import Image from "next/image";
import navLogo from "../assets/homebuttonwht.png";
import insta from "../assets/Asset3.png";
import faceb from "../assets/Asset1.png";
import { AiOutlineMenu } from "react-icons/ai";
import {SiHeadspace } from 'react-icons/si';
import { useState } from "react";


export default function Navbar() {

    const [showDropDown, setShowDropDown] = useState(false)

  return (
    <nav className="w-full">

      <div className="bg-black top-0 justify-between p-2 md:flex  ">

        <div className="flex justify-between ">
       
        <div>
          <a href="/" className=" p-4 hover:cursor-pointer sm:flex md:">
            <Image src={navLogo} alt="FAFO OCTO" width={150} height={150} />
          </a>
        </div>          

          <div className="hidden  text-white font-black text-lg sm:flex p-14 ">
            <Link href='/' className="p-2 hover:bg-purp"> Apparel </Link>
            <Link href='/' className="p-2 hover:bg-purp"> Wraps</Link>
            <Link href='/' className="p-2 hover:bg-purp"> About</Link>
            <Link href="/contact" className="p-2 hover:bg-purp"> Contact </Link>
          </div>

          <div className="flex w-6 h-6 mr-2 justify-center bg-cyan  sm:hidden ">
            <button className="hover:cursor-pointer relative  ">
            <AiOutlineMenu  onClick={() => setShowDropDown(!showDropDown)}/>

             {showDropDown && (
                    <div className="absolute cursor-pointer right-2 bg-cyan rounded-lg">
                    <ul className="p-4">
                       <li><Link href='/' className="   hover:bg-purp text-white font-bold text-lg ">Apparel</Link></li> 
                       <li><Link href='/' className=" hover:bg-purp text-white font-bold text-lg ">Wraps</Link></li> 
                       <li><Link href='/'  className=" hover:bg-purp text-white font-bold text-lg ">About</Link></li> 
                       <li><Link href="/contact"  className=" hover:bg-purp text-white font-bold text-lg "> Contact </Link></li>
                    </ul>
                    </div>
             )}
             
            </button>
          </div>

        </div>

        <div className=" hidden sm:flex justify-center p-1 ">
          <h1 className="text-white text-6xl font-extrabold inline-flex pb-5">FA<SiHeadspace className="w-4"/>FO</h1>
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
