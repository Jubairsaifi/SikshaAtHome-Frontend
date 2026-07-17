import React from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PrevArrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className="absolute left-[-20px] top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-white p-3 shadow-xl transition hover:scale-110 hover:bg-purple-600 hover:text-white xl:flex"
    >
        <ChevronLeft size={22} />
    </button>
);

const NextArrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className="absolute right-[-20px] top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-white p-3 shadow-xl transition hover:scale-110 hover:bg-purple-600 hover:text-white xl:flex"
    >
        <ChevronRight size={22} />
    </button>
);

const Carousel = ({ children }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        autoplay: true,
        autoplaySpeed: 2800,
        pauseOnHover: true,
        swipeToSlide: true,
        draggable: true,
        slidesToShow: 4,
        slidesToScroll: 1,

        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,

        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="relative">
            <Slider {...settings}>
                {React.Children.map(children, (child, index) => (
                    <div key={index} className="px-3 py-4">
                        {child}
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;