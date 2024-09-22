'use client'
import React, { useState } from 'react'
import { Button } from '../Assets/Button'
import { Loader2, MoveRight } from 'lucide-react'
import TechIons from '../Assets/TechIons'
import RoboSpline from '../Assets/RoboSpline'

const Hero = () => {
    const [isLoading, setIsLoading] = useState(false)

    return (
        <div className='grid grid-cols-5 px-16 py-[4.5rem] max-sm:px-10 relative max-[991px]:grid-cols-1'>
            <div className='col-span-3 flex flex-col gap-8 max-[991px]:items-center'>
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
            <div className='col-span-2 max-[991px]:mt-16 flex items-center justify-center '>
                <RoboSpline />
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
            <div className='absolute bottom-0 right-0 -z-10 max-[991px]:right-[50%] max-[991px]:translate-x-[50%]'>
                <svg width="100%" height="100%" viewBox="0 0 586 518" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_1041_778)">
                        <path d="M447 251.5C411.5 352.5 245.536 367.5 176.5 367.5C107.464 367.5 197 307.557 197 251.5C197 195.443 252.964 150 322 150C391.036 150 447 195.443 447 251.5Z" fill="#5D2E76" />
                    </g>
                    <defs>
                        <filter id="filter0_f_1041_778" x="0.358765" y="0" width="596.641" height="517.5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur_1041_778" />
                        </filter>
                    </defs>
                </svg>
            </div>
        </div>
    )
}

export default Hero