'use client'
import React, { useState } from 'react'
import { Button } from '../Assets/Button'
import { Loader2, MoveRight } from 'lucide-react'
import TechIons from '../Assets/TechIons'
import RoboSpline from '../Assets/RoboSpline'
import HeroSection from '../Assets/HeroSection'

const Hero = () => {
    const [isLoading, setIsLoading] = useState(false)

    return (
        <div className='grid grid-cols-7 relative max-[991px]:grid-cols-1'>
            <div className='col-span-4 flex flex-col gap-8 max-[991px]:items-center max-sm:px-10 px-16 py-[4.5rem]'>
                <h1 className='hero_title max-[991px]:text-center'>Empower your Business Startegy</h1>
                <h6 className='hero_desc w-[70%] max-[991px]:w-[100%] max-[991px]:text-center'>Build, design, and grow seamlessly with Nightlancer's expert services.</h6>
                <Button
                    containerClassName="rounded-full"
                    as="button"
                    className="px-6"
                    gradientColor={`#952CA1`}
                >
                    <span className='flex  justify-center items-center gap-2'>
                        View In Instagram
                        {
                            isLoading ?
                                <Loader2 className='h-6 w-6 animate-spin' />
                                : <MoveRight className='h-6 w-6' />
                        }
                    </span>
                </Button>
                <TechIons />
            </div>
            <div className='col-span-3 min-[991px]:overflow-hidden flex items-start justify-center '>
                <HeroSection />
            </div>

            <div className='w-[100%] absolute -top-36 left-0 -z-20 overflow-hidden'>
                <svg width="542" height="823" viewBox="0 0 542 823" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_266_47)">
                        <path
                            d="M356.408 388.959C356.408 482.143 79.5557 673 -26.0599 673C-131.675 673 -26.0596 482.143 -26.0596 388.959C-26.0596 295.774 6.52112 22.3753 165.174 220.233C227.95 333.121 484.606 248.152 356.408 388.959Z"
                            fill="#5D2E76" />
                    </g>
                    <defs>
                        <filter id="filter0_f_266_47" x="-223" y="0" width="764.793" height="823"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur_266_47" />
                        </filter>
                    </defs>
                </svg>
            </div>
            <div className='absolute max-[991px]:hidden bottom-16 right-28 -z-10 max-[991px]:right-[50%] max-[991px]:translate-x-[50%]'>
                <svg width="345" height="350" viewBox="0 0 536 521" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_1301_106)">
                        <ellipse cx="268" cy="260.5" rx="168" ry="160.5" fill="#FF00EA" />
                    </g>
                    <defs>
                        <filter id="filter0_f_1301_106" x="0" y="0" width="536" height="521" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_1301_106" />
                        </filter>
                    </defs>
                </svg>


            </div>
            <div className='absolute max-[991px]:hidden bottom-0 right-24 -z-10 max-[991px]:right-[50%] max-[991px]:translate-x-[50%]'>
                <svg width="350" height="350" viewBox="0 0 533 528" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_1301_107)">
                        <ellipse cx="266.5" cy="264" rx="185.5" ry="183" fill="#6100FF" />
                    </g>
                    <defs>
                        <filter id="filter0_f_1301_107" x="0" y="0" width="533" height="528" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="40.5" result="effect1_foregroundBlur_1301_107" />
                        </filter>
                    </defs>
                </svg>
            </div>
        </div>
    )
}

export default Hero