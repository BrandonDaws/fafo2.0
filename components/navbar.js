import Link from "next/link";
import Image from "next/image";
import navLogo from "../assets/homebuttonwht.png";
import insta from "../assets/Asset3.png";
import faceb from "../assets/Asset1.png";
import { AiOutlineMenu } from "react-icons/ai";
import { Menu } from "@headlessui/react";
import { data } from "autoprefixer";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!isOpen);

  return (
    <nav className="bg-black w-full top-0 justify-between sm:flex ">

      <div className=" flex-col pb-2 w-full">
        <div className="  p-4 ">
          <a href="#" className=" ">
            <Image src={navLogo} alt="FAFO OCTO" width={150} height={150} />
          </a>

          <div id="menu-items" className="hidden  text-white sm:flex gap-4  ">
            <a> Home </a>
            <a> About </a>
            <a> Contact </a>
          </div>

          <div class="flex w-6 h-6  justify-center bg-lime  sm:hidden ">
            <button className="hover:cursor-pointer relative group">
            <AiOutlineMenu className=' rounded-full '/>
              <div class="absolute hidden group-focus:block right-2 bg-gray-400">
                <ul className="p-5">
                  <li> Home</li>
                  <li> About</li>
                  <li> Contact</li>
                </ul>
              </div>
            </button>
          </div>

        </div>

        <div className=" hidden sm:flex justify-center p-4">
          <h1 className="text-white text-6xl font-extrabold">FAFO</h1>
        </div>

        <div className="flex flex-grow justify-evenly items-center">
          <button className="rounded-full  ">
            <Image src={insta} alt="FAFO OCTO" width={35} height={35} />
          </button>

          <button className="rounded-full">
            <Image src={faceb} alt="FAFO OCTO" width={35} height={35} />
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
