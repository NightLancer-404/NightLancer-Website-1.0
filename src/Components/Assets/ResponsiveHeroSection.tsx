"use client";
import React from "react";
import { motion } from "framer-motion";

export function ResponsiveHeroSection() {
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
    ];

    return (
        <div className="flex items-center justify-center">
            <div className="grid grid-cols-1 gap-4 w-full md:grid-cols-4 sm:grid-cols-3 min-[400px]:grid-cols-1">
                {cards.map((card, idx) => (
                    <motion.div
                        key={"card" + idx}
                        style={{
                            rotate: Math.random() * 20 - 10,
                        }}
                        className='col-span-1 p-4 bg-[#121212] rounded-lg overflow-hidden flex flex-col items-center justify-center'
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
                        <p className='text-xs text-white text-center'>{card.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
