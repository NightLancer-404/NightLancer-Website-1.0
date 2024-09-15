'use client'
import { SquareX } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Sidebar = ({ active, setActive }: any) => {
    return (
        <div className={`small_screen_navbar ${active ? 'w-[350px] max-[350px]:w-[100%]' : 'w-[0]'}`}>
            <div className='flex flex-col justify-center py-10 gap-8'>
                <div className='flex justify-between items-center w-[100%] px-6'>
                    <Link href={'/'}>
                        <img src="/images/Logos/Nightlancer-Logo.png" alt="LOGO" className='w-16' />
                    </Link>
                    <SquareX className='small_screen_cross' onClick={() => setActive(false)} />
                </div>
                <div className='nav_items_sidebar'>
                    <Link href={'/'} className='group nav_item_sidebar' onClick={() => setActive(false)}>
                        <span className='group-hover:opacity-60 flex justify-between items-center'>Home <img src="/images/Navbar/home.png" alt="Home" className='h-4 w-4' /></span>
                    </Link>
                    <Link href={'#whyus'} className='group nav_item_sidebar' onClick={() => setActive(false)}>
                        <span className='group-hover:opacity-60 flex justify-between items-center'>Why Us <img src="/images/Navbar/whyus.png" alt="Why Us" className='h-4 w-4' /></span>
                    </Link>
                    <Link href={'#aboutus'} className='group nav_item_sidebar' onClick={() => setActive(false)}>
                        <span className='group-hover:opacity-60 flex justify-between items-center'>About <img src="/images/Navbar/About.png" alt="About Us" className='h-4 w-4' /></span>
                    </Link>
                    <Link href={'#services'} className='group nav_item_sidebar' onClick={() => setActive(false)}>
                        <span className='group-hover:opacity-60 flex justify-between items-center'>Services <img src="/images/Navbar/services.png" alt="Our Services" className='h-4 w-4' /></span>
                    </Link>
                    <Link href={'#roadmap'} className='group nav_item_sidebar' onClick={() => setActive(false)}>
                        <span className='group-hover:opacity-60 flex justify-between items-center'>Roadmap <img src="/images/Navbar/roadmap.png" alt="Roadmap" className='h-4 w-4' /></span>
                    </Link>
                    <Link href={'#roadmap'} className='group nav_item_sidebar' onClick={() => setActive(false)}>
                        <span className='group-hover:opacity-60 flex justify-between items-center'>Download Brochure <img src="/images/Navbar/download.png" alt="Download Brochure" className='h-4 w-4' /></span>
                    </Link>
                    <Link href={'#roadmap'} className='group px-6 py-[.65rem]' onClick={() => setActive(false)}>
                        <span className='group-hover:opacity-60 flex justify-between items-center'>Contact Us <img src="/images/Navbar/whatsapp-2.png" alt="Contact Us" className='h-4 w-4' /></span>
                    </Link>
                </div>
                <div className='flex justify-center gap-6'>
                    <Link href={'#'}>
                        <img src="/images/Navbar/instagram.png" alt="Instagram" className='h-8 w-8' />
                    </Link>
                    <Link href={'#'}>
                        <img src="/images/Navbar/youtube.png" alt="Youtube" className='h-8 w-8' />
                    </Link>
                    <Link href={'#'}>
                        <img src="/images/Navbar/facebook.png" alt="Facebook" className='h-8 w-8' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Sidebar