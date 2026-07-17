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
                className="absolute left-0 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-white p-3 shadow-xl transition hover:scale-110 xl:flex"
            >
                <ChevronLeft />
            </button>

            {/* Right */}

            <button
                onClick={scrollNext}
                className="absolute right-0 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-white p-3 shadow-xl transition hover:scale-110 xl:flex"
            >
                <ChevronRight />
            </button>

            <div
                className="overflow-hidden"
                ref={emblaRef}
            >
                <div className="flex">

                    {teachers.map((teacher) => (

                        <div
                            key={teacher.id}
                            className="min-w-0 flex-[0_0_100%] px-4 md:flex-[0_0_50%] xl:flex-[0_0_33.333%]"
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