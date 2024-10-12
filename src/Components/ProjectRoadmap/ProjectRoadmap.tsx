'use client'
import React from 'react'
import Headings from '../Assets/Headings'
import { Card, Carousel } from '../Assets/RoadMap_Card'

const data = [
    {
        phase: "Phase 01",
        percentage: "0%",
        title: "Let's Start our Journey",
        description: "Initiate the project by defining objectives, setting goals, and creating a roadmap aligned with strategic goals.",
        points: [],
    },
    {
        phase: "Phase 02",
        percentage: "10%",
        title: "Research ",
        description: "Analyze market trends and insights to create a design that prioritizes user needs and functionality.",
        points: ["Strategic Decisions", "Amplify success potential", "Operational Action Plans"]
    },
    {
        phase: "Phase 03",
        percentage: "35%",
        title: "Designing",
        description: "Create wireframes and prototypes to craft an intuitive, engaging user experience and interface..",
        points: ["Credibility and expertise  ", "Engage target audience", "Cutting-edge design"]
    },
    {
        phase: "Phase 04",
        percentage: "70%",
        title: "Development",
        description: "Develop and code the website, integrating features for optimal performance and seamless usability on all devices.",
        points: ["Tech-Driven Approach ", "Optimal Performance ", "Quality and Ethical Standard"]
    },
    {
        phase: "Phase 05",
        percentage: "85%",
        title: "Testing",
        description: "Implement comprehensive testing for functionality and usability to ensure seamless operation and superior performance.",
        points: ["Continuous Monitoring", "Scalability & Error Tracking", "Security Evaluation"]
    },
    {
        phase: "Phase 06",
        percentage: "100%",
        title: "Launch",
        description: "Formulate a dynamic launch plan to generate enthusiasm and appeal to early customers.",
        points: ["Ignite Growth", "Collect Significant feedback ", "engage potential investor and partners"]
    }
];

const ProjectRoadmap = () => {

    const cards = data.map((card, index) => (
        <Card key={card.phase} card={card} index={index} />
    ));
    return (
        <>
            <div className='Roadmap py-6 2xl:px-16 lg:px-14 md:px-12 sm:px-10 px-4'>
                <div className='flex flex-col gap-16'>
                    <Headings
                        heading='Project Roadmap'
                        subHeading='Our Journey'
                        description='Outlined steps to achieve our goals and future vision.'
                    />
                    <Carousel items={cards} />
                </div>
            </div>
        </>
    )
}

export default ProjectRoadmap