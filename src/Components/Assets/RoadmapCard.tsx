import { MoveLeft, MoveRight } from "lucide-react";
import React, { useState, useEffect } from "react";

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

const RoadmapCard = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCards, setVisibleCards] = useState(3);

    const maxIndex = data.length - visibleCards;

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setVisibleCards(1);
            } else if (window.innerWidth < 1024) {
                setVisibleCards(2);
            } else {
                setVisibleCards(3);
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleNext = () => {
        if (currentIndex < maxIndex) {
            setCurrentIndex(currentIndex + 1);
        }
    };



    return (
        <div className="w-full flex flex-col items-center justify-center overflow-hidden">
            <div className="relative">
                <button
                    onClick={handlePrev}
                    className={`absolute left-2 top-1/2 roadmap_card_bg transform -translate-y-1/2 text-white p-2 rounded-full z-10 ${currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
                    disabled={currentIndex === 0}
                >
                    <MoveLeft />
                </button>
                <button
                    onClick={handleNext}
                    className={`absolute right-2 top-1/2 roadmap_card_bg transform -translate-y-1/2 text-white p-2 rounded-full z-10 ${currentIndex === maxIndex ? "opacity-50 cursor-not-allowed" : ""}`}
                    disabled={currentIndex === maxIndex}
                >
                    <MoveRight />
                </button>

                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full z-0 gap-8 px-10 transition-transform duration-300"
                >
                    {data.slice(currentIndex, currentIndex + visibleCards).map((item, index) => (
                        <div key={index} className="faq_card col-span-1">
                            <div className="flex items-center justify-between">
                                <h1 className="uppercase roadmap_card_bg1 font-bold text-base">{item.phase}</h1>
                                <h2 className="p-2 text-white font-bold text-base rounded-full roadmap_card_bg text-center w-12 h-12 flex items-center justify-center leading-none">
                                    {item.percentage}
                                </h2>
                            </div>
                            <h1 className="capitalize font-semibold text-4xl py-[1.625rem] text-white">{item.title}</h1>
                            <p className="font-semibold text-xl py-[1.625rem] text-gray-500">{item.description}</p>
                            <hr className="w-16 py-4" />
                            {item.phase === "Phase 01" && (
                                <div className=" py-2 roadmap_card_bg border flex items-center justify-center rounded-full">
                                    <MoveRight className="cursor-pointer animate-pulse" />
                                </div>
                            )}
                            <ul>
                                {item.points.map((point, i) => (
                                    <li key={i} className="flex gap-2 items-center justify-start">
                                        <h1 className="w-4 h-4 roadmap_card_bg rounded-full"></h1>
                                        <p className="text-base text-white">{point}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className="relative flex items-center justify-center w-60 rounded-full mt-4 h-3 progress_bar_bg">
                <div
                    className="absolute left-0 top-0 h-full roadmap_card_bg rounded-full transition-all duration-300"
                    style={{
                        width: `${(currentIndex + 1) / Math.ceil(data.length / visibleCards) * (window.innerWidth < 768 ? 100 : window.innerWidth < 1024 ? 60 : 50)}%`
                    }}
                />
            </div>
        </div>
    );
};

export default RoadmapCard;
