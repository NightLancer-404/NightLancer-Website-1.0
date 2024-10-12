"use client"
import React from 'react';
import { ResponsiveHeroSection } from './ResponsiveHeroSection';
import { motion } from 'framer-motion';

const HeroSection = () => {
    const cards = [
        {
            imgSrc: "/Images/Hero/client.png",
            title: "Client-Centric",
            description: "We prioritize your vision with open communication and collaboration.",
        },
        {
            imgSrc: "/Images/Hero/innovation.png",
            title: "Innovative Designs",
            description: "Our designs are tailored to meet your unique needs and preferences.",
        },
        {
            imgSrc: "/Images/Hero/Timely.png",
            title: "Timely Delivery",
            description: "We respect your time and ensure projects are delivered on schedule.",
        },
        {
            imgSrc: "/Images/Hero/expert.png",
            title: "Expert Support",
            description: "Our team is always here to assist you every step of the way.",
        },
        {
            imgSrc: "/Images/Hero/quality.png",
            title: "Quality Assurance",
            description: "We ensure top-notch quality in all our services and products.",
        },
        {
            imgSrc: "/Images/Hero/discover.png",
            title: "Discover",
            description: "Discover clarity in complexity",
        },
    ];
    return (
        <>
            <div className='p-2'>
                <div className=' grid grid-cols-2 max-[991px]:hidden gap-16 flex-col items-center justify-center  w-[100%] h-[350px]  rotate-[20deg]'>

                    {cards.map((card, idx) => (
                        <motion.div
                            key={"card" + idx}
                            style={{
                                rotate: Math.random() * 30 - 10,
                            }}
                            className='col-span-1 space-y-1 w-40 h-40 p-2 bg-[#121212] rounded-lg'
                            whileHover={{
                                scale: 1.1,
                                rotate: 0,
                                zIndex: 100,
                            }}
                            whileTap={{
                                scale: 1.1,
                                rotate: 0,
                                zIndex: 100,
                            }}
                        >
                            <img src={card.imgSrc} alt="loading..." className='w-8' />
                            <h1 className='text-gradient-animation text-base hero_subh1'>{card.title}</h1>
                            <p className='text-xs text-white'>{card.description}</p>
                        </motion.div>
                    ))}
                </div>


                <div className='min-[991px]:hidden flex-col items-center justify-center'>
                    <ResponsiveHeroSection />
                </div>
            </div>
        </>
    );
};

export default HeroSection;
