'use client'
import React from 'react'
import Headings from '../Assets/Headings'
import QnA from '../Assets/QnA'

const FAQ = () => {
    const QnAData = [
        {
            question: "How do you differentiate yourself from other agencies?",
            answer: "We stand out by offering a comprehensive range of services, including design, website development, API integration, and logo creation. Our holistic approach ensures that all aspects of your brand—from visual identity to functional technology—are expertly crafted to work together seamlessly, giving you a competitive edge in the market."
        },
        {
            question: "How do I start a project with you?",
            answer: "Starting a project with us is simple! Just contact us via WhatsApp, email, or phone—details are available on our website. We'll schedule a consultation to discuss your project needs, goals, and timeline. From there, we'll provide a customized plan to bring your vision to life."
        },
        {
            question: "What makes your design work stand out?",
            answer: "Our design work is distinguished by our commitment to professionalism, expertise, and consistency. We take the time to understand your brand, ensuring that every design we create not only meets your expectations but also strengthens your brand's presence in the market."
        },
        {
            question: "How long does a typical project take?",
            answer: "The duration of a project depends on its scope and complexity. After our initial consultation, we will provide a timeline tailored to your specific needs. We prioritize delivering high-quality work efficiently, ensuring that your project is completed on time without compromising quality."
        },
        {
            question: "How do you work with clients to ensure their vision is realized?",
            answer: "We work closely with you from the outset, establishing a clear line of communication to understand your vision and goals. Through regular meetings, updates, and feedback sessions, we ensure that your ideas are not only heard but are central to the design process, resulting in a final product that truly represents your brand."
        }
    ]
    return (
        <div className='faq relative'>
            <div className='flex flex-col gap-16'>
                <Headings
                    heading='Frequently Asked Questions'
                    subHeading='Need Help ?'
                    description='Quick solutions to common inquiries for better experience.'
                />
                <div className='flex flex-col items-center z-20'>
                    <div className='w-[80%] max-md:w-[100%] flex flex-col gap-4'>
                        {
                            QnAData.map((qna, index) => (
                                <QnA
                                    key={index}
                                    question={qna.question}
                                    answer={qna.answer}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>

            {/* <div className='absolute left-[0%] top-[20%]'>
                <svg width="266" height="813" viewBox="0 0 266 813" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_383_54)">
                        <path d="M72.0058 746.483C-10.8258 780.547 -207.468 509.906 -259.537 383.295C-311.605 256.684 -252.053 -125.307 -101.126 176.677C9.87392 96.6792 203 102.502 203 289.501C61.5001 372.501 154.837 712.419 72.0058 746.483Z" fill="url(#paint0_linear_383_54)" />
                    </g>
                    <defs>
                        <filter id="filter0_f_383_54" x="-341.019" y="0.164062" width="607.019" height="812.259" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="31.5" result="effect1_foregroundBlur_383_54" />
                        </filter>
                        <linearGradient id="paint0_linear_383_54" x1="-242.72" y1="618.565" x2="56.8626" y2="494.281" gradientUnits="userSpaceOnUse">
                            <stop offset="0.311" stopColor="#0F0E20" stopOpacity="0" />
                            <stop offset="0.946" stopColor="#6100FF" stopOpacity="0.3" />
                        </linearGradient>
                    </defs>
                </svg>
            </div> */}

            <div className='absolute right-[0%] top-[10%]'>
                <svg width="250" height="577" viewBox="0 0 250 577" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_383_51)">
                        <path d="M223.996 51.515C293.029 52.1274 352.015 261.261 351.236 349.101C350.456 436.942 194.139 647.721 176.996 431.515C186.447 222.116 50.7167 330.857 51.4961 243.016C52.2754 155.175 154.963 50.9025 223.996 51.515Z" fill="url(#paint0_linear_383_51)" />
                    </g>
                    <defs>
                        <filter id="filter0_f_383_51" x="0.492737" y="0.512695" width="401.751" height="576.412" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="25.5" result="effect1_foregroundBlur_383_51" />
                        </filter>
                        <linearGradient id="paint0_linear_383_51" x1="351.243" y1="348.353" x2="101.242" y2="347.062" gradientUnits="userSpaceOnUse">
                            <stop offset="0.311" stopColor="#0F0E20" stopOpacity="0" />
                            <stop offset="0.946" stopColor="#6100FF" stopOpacity="0.3" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* <div className='absolute right-[0%] bottom-[0%]'>
                <svg width="440" height="545" viewBox="0 0 440 545" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_383_55)">
                        <path d="M293.537 490.682C229.69 516.939 94.0832 347.154 60.6726 265.911C27.2619 184.669 89.4051 -70.2843 189.203 122.275C261.853 318.895 344.67 165.962 378.081 247.205C411.492 328.447 357.384 464.425 293.537 490.682Z" fill="url(#paint0_linear_383_55)" />
                    </g>
                    <defs>
                        <filter id="filter0_f_383_55" x="0.574036" y="0.90625" width="438.697" height="543.506" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="25.5" result="effect1_foregroundBlur_383_55" />
                        </filter>
                        <linearGradient id="paint0_linear_383_55" x1="60.9564" y1="266.603" x2="291.818" y2="170.661" gradientUnits="userSpaceOnUse">
                            <stop offset="0.311" stopColor="#0F0E20" stopOpacity="0" />
                            <stop offset="0.946" stopColor="#6100FF" stopOpacity="0.3" />
                        </linearGradient>
                    </defs>
                </svg> 
            </div>*/}
        </div >
    )
}

export default FAQ