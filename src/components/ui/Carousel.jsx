// import React, { useEffect, useRef } from "react";
// import Slider from "react-slick";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { useLocation } from "react-router-dom";

// const PrevArrow = ({ onClick }) => (
//     <button
//         onClick={onClick}
//         className="absolute left-[-20px] top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-white p-3 shadow-xl transition hover:scale-110 hover:bg-purple-600 hover:text-white xl:flex"
//     >
//         <ChevronLeft size={22} />
//     </button>
// );

// const NextArrow = ({ onClick }) => (
//     <button
//         onClick={onClick}
//         className="absolute right-[-20px] top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-white p-3 shadow-xl transition hover:scale-110 hover:bg-purple-600 hover:text-white xl:flex"
//     >
//         <ChevronRight size={22} />
//     </button>
// );

// const Carousel = ({ children }) => {
//     const sliderRef = useRef(null);
//     const location = useLocation();
//     useEffect(() => {
//         const timer = setTimeout(() => {
//             window.dispatchEvent(new Event("resize"));

//             if (sliderRef.current) {
//                 sliderRef.current.innerSlider?.onWindowResized();
//             }
//         }, 200);

//         return () => clearTimeout(timer);
//     }, [location.pathname]);
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 700,
//         autoplay: true,
//         autoplaySpeed: 2800,
//         pauseOnHover: true,
//         swipeToSlide: true,
//         draggable: true,
//         slidesToShow: 4,
//         slidesToScroll: 1,
//         adaptiveHeight: false,
//         waitForAnimate: false,

//         nextArrow: <NextArrow />,
//         prevArrow: <PrevArrow />,

//         responsive: [
//             {
//                 breakpoint: 1280,
//                 settings: {
//                     slidesToShow: 3,
//                 },
//             },
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 2,
//                 },
//             },
//             {
//                 breakpoint: 640,
//                 settings: {
//                     slidesToShow: 1,
//                 },
//             },
//         ],
//     };

//     return (
//         <div className="relative">
//             <Slider
//                 ref={sliderRef}
//                 {...settings}>
//                 {React.Children.map(children, (child, index) => (
//                     <div key={index} className="px-3 py-4">
//                         {child}
//                     </div>
//                 ))}
//             </Slider>
//         </div>
//     );
// };

// export default Carousel;

import { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Children } from "react";

const Carousel = ({ children }) => {
    const autoplay = Autoplay({
        delay: 3000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
        playOnInit: true,
    });

    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: "start",
            skipSnaps: false,
            dragFree: false,
        },
        [autoplay]
    );

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;

        emblaApi.reInit();
    }, [emblaApi]);
    return (
        <div className="relative">

            {/* Left Arrow */}

            <button
                onClick={scrollPrev}
                className="absolute left-0 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-slate-200 bg-white p-3 shadow-xl transition-all duration-300 hover:scale-110 hover:bg-purple-600 hover:text-white xl:flex"
            >
                <ChevronLeft size={22} />
            </button>

            {/* Right Arrow */}

            <button
                onClick={scrollNext}
                className="absolute right-0 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-slate-200 bg-white p-3 shadow-xl transition-all duration-300 hover:scale-110 hover:bg-purple-600 hover:text-white xl:flex"
            >
                <ChevronRight size={22} />
            </button>

            <div
                ref={emblaRef}
                className="overflow-hidden"
            >
                <div className="flex">

                    {Children.map(children, (child, index) => (
                        <div
                            key={index}
                            className="
                                min-w-0
                                flex-[0_0_100%]
                                px-3
                                py-4
                                sm:flex-[0_0_50%]
                                lg:flex-[0_0_33.333%]
                                xl:flex-[0_0_25%]
                            "
                        >
                            {child}
                        </div>
                    ))}

                </div>
            </div>

        </div>
    );
};

export default Carousel;