'use client'
import React from 'react'
import Headings from '../Assets/Headings'
import ServicesCard1, { ServicesCard2 } from '../Assets/ServicesCard'

const Services = () => {
    return (
        <div className='services'>
            <div className='flex flex-col gap-16'>
                <Headings
                    heading='Our Services'
                    subHeading='What are we doing ?'
                    description='Explore our services and elevate your projects to excellence.'
                />
                <ServicesCard1
                    name='UI/UX Design'
                    desc='Improve your skills faster with hands-on projects. Advance your career with complete confidence.'
                    img='/images/Our-services/Uiux.png'
                    icon='/images/Our-services/uiux_icon.webp'
                />
                <ServicesCard2
                    name='Website Design'
                    desc='We create beautiful, user-friendly websites that captivate and responsive.'
                    img='/images/Our-services/Website.png'
                    icon='/images/Our-services/website_icon.webp'
                />
                <ServicesCard1
                    name='Rest APIs'
                    desc='We create robust, scalable APIs that seamlessly integrate with your applications.'
                    img='/images/Our-services/Rest-api.png'
                    icon='/images/Our-services/api_icon.webp'
                />
                <ServicesCard2
                    name='Logo Design'
                    desc={`Our designs are crafted to visually represent your brand's identity and values effectively.`}
                    img='/images/Our-services/Logo.png'
                    icon='/images/Our-services/logo_icon.webp'
                />
            </div>
        </div>
    )
}

export default Services