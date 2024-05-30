'use client'
import { useEffect, useState } from "react";
import Link from 'next/link'
import { Button } from './ui/Button';
import useAuthStore from "@/hook/useAuthStore";
import Image from "next/image";
import logoLogout from "../assets/profile_6.webp"
import logo from "../assets/readymadeui.svg"

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMenuOpen2, setIsMenuOpen2] = useState(false);
    const [name, setName] = useState("");

    useEffect(() => {
        let userLogin = localStorage.getItem('user');
        if (userLogin) {
            let tuserLogin = JSON.parse(userLogin);
            setName(tuserLogin.username);
        }
    }, [name])

    const handleClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const handleClick2 = () => {
        setIsMenuOpen2(!isMenuOpen2);
    };

    const handleLogout = () => {
        localStorage.removeItem('user');
    }





    return (
        <header className='flex shadow-md py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide relative z-50'>

            <div className='flex flex-wrap items-center justify-between gap-5 w-full'>
                <Link href="/"><Image src={logo} alt="logo" className='w-36'></Image></Link>

                <div id="collapseMenu" style={{ display: isMenuOpen ? 'block' : 'none' }}
                    className='max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50'>
                    <button id="toggleClose" onClick={handleClick} className='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-black" viewBox="0 0 320.591 320.591">
                            <path
                                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                                data-original="#000000"></path>
                            <path
                                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                                data-original="#000000"></path>
                        </svg>
                    </button>

                    <ul
                        className='lg:flex gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
                        {/* <li className='mb-6 hidden max-lg:block'>
                            <a href="#"><img src="https://readymadeui.com/readymadeui.svg" alt="logo" className='w-36' />
                            </a>
                        </li> */}
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

                    <Link href="/sign-in"><Button color='primary' className="px-6 py-3 ">Login</Button></Link>

                    <Link href="/sign-up"><Button color='primary' className="px-6 py-3 ">Sign up</Button></Link>

                    <div className="logout">
                        <div className="relative font-[sans-serif] w-max mx-auto">
                            <button type="button" onClick={handleClick2}
                                className="px-6 py-2 flex items-center rounded-full text-[#333] text-sm font-semibold border-2 border-gray-300 outline-none hover:bg-gray-100">
                                <Image src={logoLogout} className="w-7 h-7 mr-2 rounded-full shrink-0" alt="Picture of the author"></Image>
                                {/* {name} */}<p className="w-full">Truyen</p>
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
                    </div>

                    <button id="toggleOpen" onClick={handleClick} className='lg:hidden' >
                        <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            ></path>
                        </svg>
                    </button>
                </div>

            </div>
        </header>
    )
}

export default Header