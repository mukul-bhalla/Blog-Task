import React from 'react'
import { Button, Navbar, TextInput } from "flowbite-react";
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai'
export default function Header() {
    return (
        <Navbar className='border-b-2'>
            <Link to={"/"} className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
                <span className='px-2 py-1 bg-pink-500 rounded-lg dark:text-white'>MERN</span>
                Blog
            </Link>
            <form>
                <TextInput
                    type='text'
                    placeholder='Search...'
                    rightIcon={AiOutlineSearch}
                    className='hidden lg:inline'
                />
            </form>
            <Button className='w-12 h-10 lg:hidden' color='gray'>
                <AiOutlineSearch />
            </Button>
        </Navbar>
    )
}
