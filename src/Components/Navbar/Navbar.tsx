'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button } from "@/Components/Assets/Button";
import Sidebar from './Sidebar';

const Navbar = () => {
    const [fix, setFix] = useState(false);
    const [active, setActive] = useState(false);

    useEffect(() => {
        const setFixed = () => {
            if (window.scrollY >= 100) {
                setFix(true);
            } else {
                setFix(false);
            }
        };
        window.addEventListener('scroll', setFixed);
        return () => {
            window.removeEventListener('scroll', setFixed);
        };
    }, []);

    return (
        <>
            <div className={fix ? `navbar fixed top-0  backdrop-blur-[15px]` : `navbar`}>
                <Link href={'/'}>
                    <img src="/images/Logos/Nightlancer-Logo.png" alt="LOGO" className='w-16' />
                </Link>
                <div className='nav_items'>
                    <Link href={'#home'} className='group'>
                        <span className='group-hover:opacity-60'>Home</span>
                    </Link>
                    <Link href={'#whyus'} className='group'>
                        <span className='group-hover:opacity-60'>Why Us</span>
                    </Link>
                    <Link href={'#aboutus'} className='group'>
                        <span className='group-hover:opacity-60'>About</span>
                    </Link>
                    <Link href={'#services'} className='group'>
                        <span className='group-hover:opacity-60'>Services</span>
                    </Link>
                    <Link href={'#roadmap'} className='group'>
                        <span className='group-hover:opacity-60'>Roadmap</span>
                    </Link>
                </div>
                <Link href={'https://wa.me/918328837701'} target='_blank'>
                    <div className='connect_button'>
                        <Button
                            containerClassName="rounded-full"
                            as="button"
                            className="px-6"
                            gradientColor={fix ? `#6100FF` : `#952CA1`}
                        >
                            <span>Connect On Whatsapp</span>
                        </Button>
                    </div>
                    <div className='whatsapp_button'>
                        <img src="/images/Navbar/whatsapp.svg" alt="WhatsApp" className='h-8 w-8' />
                    </div>
                </Link>
                <div className='small_screen_nav_button'>
                    <img src="/images/Navbar/menu.svg" alt="Menu" className='h-8 w-8' onClick={() => setActive(true)} />
                </div>
            </div>
            {/* Small Screen Nav */}
            <Sidebar
                active={active}
                setActive={setActive}
            />
        </>
    )
}

export default Navbar