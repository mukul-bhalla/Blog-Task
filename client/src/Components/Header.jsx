import React from 'react';
import { Button, Navbar, TextInput } from "flowbite-react";
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';
export default function Header() {
    return (
        <Navbar className='border-b-2'>
            <Link to={"/"} className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
                <span className='px-2 py-1 bg-pink-500 rounded-lg dark:text-white'>MERN</span>
                Blog
            </Link>
            <Button className='w-12 h-10 lg:hidden' color='gray' pill>
                <AiOutlineSearch />
            </Button>
            <div className='flex gap-2 md:order-2' color='gray'>
                <Button className='w-12 h-10 ' color='black'>
                    <FaMoon />
                </Button>
                <Link to="/register">
                    <Button className="" outline gradientDuoTone='purpleToBlue'>
                        Sign In
                    </Button>
                </Link>



            </div>
        </Navbar>
    )
}
