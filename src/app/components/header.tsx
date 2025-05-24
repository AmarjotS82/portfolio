"use client"
import { Switch } from '@/components/ui/switch';
import Link from 'next/link'
import { IoMdHome } from "react-icons/io";
import { IoSunnyOutline } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa";
import { useEffect, useState } from 'react';

export default function Header(){
      const [isDarkMode, setIsDarkMode] = useState(false);
      const [scrolled, setScrolled] = useState(false);

      useEffect(() => {
        const onScroll = () => {
          setScrolled(window.scrollY !== 0); // true if not at the very top
        };
      
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
      }, []);

      useEffect(() => {
        const root = window.document.documentElement;
        if (isDarkMode) {
          root.classList.add('dark');
        } else {
          root.classList.remove('dark');
        }
      }, [isDarkMode]);
    
      const toggleDarkMode = () => {
        setIsDarkMode((prev: boolean) => !prev);
      };
    
    return(
        <header className={`sticky top-0 transition-colors duration-300 ${scrolled ? 'bg-white dark:bg-black shadow-md' : 'bg-transparent'}`}>
            <div className="flex flex-row mt-4 justify-between items-center mb-2">
                {/*If want logo on top right corner change above div to jsutify between  */}
                <div className="flex flex-row justify-end ml-5 hover:text-white">
                        <Link href="/">
                          <img src="/favicon/favicon-32x32.png" alt="logo" />
                        </Link>
                        {/* <h1 className='font-bold'>Amarjot Sangha</h1> */}
                </div>
                <div className="flex flex-row items-center">
                    <div className="flex flex-row justify-start mr-5 ">
                        {/* <IoMdHome className='text-xl'/> */}
                        <Link className="mr-5 font-bold inlarge-colour hover:text-red-800 hover:dark:text-yellow-300" href="/">Home</Link>
                        <Link className="mr-5 font-bold inlarge-colour hover:text-red-800 hover:dark:text-yellow-300" href="/projects">Projects</Link>
                        <Link className="font-bold inlarge-colour hover:text-red-800 hover:dark:text-yellow-300" href="/about">About</Link>
                    </div>
                    <div className="flex flex-row mr-2">
                    <IoSunnyOutline className='text-xl mr-1 mt-1'/>
                    <Switch className='data-[state=checked]:bg-charcoal data-[state=unchecked]:bg-orange-200' onClick={() => toggleDarkMode()}/>
                    <FaRegMoon className='text=xl ml-1 mt-1'/>
                    </div>
                </div>
            </div>
        </header>
    )
}