'use client'
import { useEffect, useState } from "react";
import Link from 'next/link'
import { Button } from './ui/Button';
import useAuthStore from "@/hook/useAuthStore";
import Image from "next/image";
import logoLogout from "../assets/profile_6.webp"
import logo from "../assets/readymadeui.svg"
import LocalStorage from "@/config/localStorage";
import { useAuth } from "@/context/authContext";
import useUserStore from "@/hook/useAuthStore";

const Header = () => {
    const { user, setUser } = useAuth();


    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMenuOpen2, setIsMenuOpen2] = useState(false);

    const handleClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleClick2 = () => {
        setIsMenuOpen2(!isMenuOpen2);
    };

    const handleLogout = () => {
        LocalStorage.removeFromLocalStorage('user');
        setIsMenuOpen2(!isMenuOpen2);
        setUser(null)
    }

    return (
        <header className='flex shadow-md py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide relative z-50'>
            <div className='flex flex-wrap items-center justify-between gap-5 w-full'>
                <button id="toggleOpen" onClick={handleClick} className='lg:hidden' >
                    <i className="ri-align-justify text-[30px]"></i>
                </button>
                <Link href="/"><Image src={logo} alt="logo" className='w-36'></Image></Link>

                <div id="collapseMenu" style={{ display: isMenuOpen ? 'block' : 'none' }}
                    className='max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50'>
                    <button id="toggleClose" onClick={handleClick} className='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-2'>
                        <i className="ri-close-large-line font-bold	"></i>
                    </button>

                    <ul
                        className='lg:flex gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>

                        <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'>
                            <Link href='/'
                                className='hover:text-[#007bff] text-[#007bff] block font-semibold text-[15px]'>Home</Link>
                        </li>
                        <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'><a href='#'
                            className='hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]'>Team</a>
                        </li>
                        <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'><a href='#'
                            className='hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]'>Feature</a>
                        </li>
                        <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'><Link href='/blog'
                            className='hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]'>Blog</Link>
                        </li>
                        <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'><a href='#'
                            className='hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]'>About</a>
                        </li>
                        <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'><a href='#'
                            className='hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]'>Contact</a>
                        </li>
                    </ul>
                </div>


                <div className='flex max-lg:ml-auto space-x-3'>
                    {user ? (<div className="logout">
                        <div className="relative font-[sans-serif] w-max mx-auto">
                            <button type="button" onClick={handleClick2}
                                className="px-6 py-2 flex items-center rounded-full text-[#333] text-sm font-semibold border-2 border-gray-300 outline-none hover:bg-gray-100">
                                <Image src={logoLogout} className="w-7 h-7 mr-2 rounded-full shrink-0" alt="Picture of the author"></Image>
                                Hello, <p className="capitalize">{user}</p>
                            </button>

                            <ul className='absolute shadow-lg bg-white py-2 z-[1000] min-w-full w-max rounded-lg max-h-96 overflow-auto ' style={{ display: isMenuOpen2 ? 'block' : 'none' }}>
                                <li className='py-2.5 px-6 flex items-center hover:bg-gray-100 text-[#333] text-sm cursor-pointer'>
                                    View profile
                                </li>
                                <li className='py-2.5 px-6 flex items-center hover:bg-gray-100 text-[#333] text-sm cursor-pointer'>
                                    Dashboard
                                </li>
                                <li className='py-2.5 px-6 flex items-center hover:bg-gray-100 text-[#333] text-sm cursor-pointer' onClick={handleLogout}>
                                    Logout
                                </li>
                            </ul>
                        </div>
                    </div>) : (<Link href="/sign-in"><Button color='primary' className="px-6 py-3 ">Login</Button></Link>)}

                    <Link href="/sign-up"><Button color='primary' className="px-6 py-3 ">Sign up</Button></Link>


                </div>

            </div>
        </header>
    )
}

export default Header