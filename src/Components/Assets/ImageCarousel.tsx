import images from "../Assets/Image";

const row1 = images.row1;
const row2 = images.row2;
const row3 = images.row3;

const ImageCarousel = () => {
    return (
        <div className="bg-gradient-main relative h-[100vh] md:h-[80vh] sm:h-[70vh] min-[479px]:h-[65vh] min-[350px]:h-[60vh] min-[300px]:h-[55vh]  w-full flex items-center justify-center overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-14 bg-gradient-top z-10"></div>
            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-bottom z-10"></div>
            <div className="grid grid-cols-3  gap-8 px-8">
                <div className="col-span-1  ">
                    <div className=" animate-scrollY space-y-8">
                        {[...row1].map((el, index) => (
                            <div key={index} className="">
                                <img src={el} className="object-cover vertical-marquee-image " alt="loading..." />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-span-1  ">
                    <div className=" animate-scrollY-reverse animation-delay-3 space-y-8">
                        {[...row2].map((el, index) => (
                            <div key={index} className="">
                                <img src={el} className="w-[55rem]  vertical-marquee-image" alt="loading..." />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-span-1  ">
                    <div className=" animate-scrollY space-y-8">
                        {[...row3].map((el, index) => (
                            <div key={index} className="">
                                <img src={el} className="object-cover  vertical-marquee-image" alt="loading..." />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageCarousel;
