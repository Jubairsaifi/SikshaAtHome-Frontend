import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";


import { teachers } from "./teacherData";
import TeacherCard from "./TeacherCard";

const TeacherCarousel = () => {
    const autoplay = Autoplay({
        delay: 3000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
    });

    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: "center",
            skipSnaps: false,
        },
        [autoplay]
    );

    const scrollPrev = useCallback(() => {
        emblaApi && emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        emblaApi && emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <div className="relative">

            {/* Left */}

            <button
                onClick={scrollPrev}
                className="absolute left-2 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-slate-200 bg-white/90 p-3 shadow-xl backdrop-blur transition-all duration-300 hover:scale-110 hover:bg-purple-600 hover:text-white xl:flex"
            >
                <ChevronLeft />
            </button>

            {/* Right */}

            <button
                onClick={scrollNext}
                className="absolute right-2 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-slate-200 bg-white/90 p-3 shadow-xl backdrop-blur transition-all duration-300 hover:scale-110 hover:bg-purple-600 hover:text-white xl:flex"
            >
                <ChevronRight />
            </button>

            <div
                className="overflow-hidden py-6"
                ref={emblaRef}
            >
                <div className="flex">

                    {teachers.map((teacher) => (

                        <div
                            key={teacher.id}
                            className="min-w-0 flex-[0_0_90%] px-4 sm:flex-[0_0_60%] lg:flex-[0_0_38%] xl:flex-[0_0_34%]"
                        >

                            <TeacherCard
                                teacher={teacher}
                            />

                        </div>

                    ))}

                </div>

            </div>

        </div>
    );
};

export default TeacherCarousel;
