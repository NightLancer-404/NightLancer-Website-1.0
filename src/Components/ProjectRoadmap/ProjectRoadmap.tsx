'use client'
import React from 'react'
import Headings from '../Assets/Headings'
import RoadmapCard from '../Assets/RoadmapCard'

const ProjectRoadmap = () => {
    return (
        <>
            <div className='Roadmap'>
                <div className='flex flex-col gap-16'>
                    <Headings
                        heading='Project Roadmap'
                        subHeading='Our Journey'
                        description='Outlined steps to achieve our goals and future vision.'
                    />
                    <RoadmapCard />
                </div>
            </div>
        </>
    )
}

export default ProjectRoadmap