import K12CourseImg from "../../assets/K12-Courses.jpg";
import Coding from "../../assets/Coding.jpg";
import Languagues from "../../assets/Languages.jpg";
import ArtAndCraft from "../../assets/Art-and-Craft.jpg";
import { Link, useNavigate } from "react-router-dom";
import StarRating from "../StarRating";

const PopularCourses = [
    {
        id: 1,
        title: "K12 Courses",
        desc: "Discover engaging K-12 courses, shaping a brighter, fun-filled academic journey for every student.",
        image: K12CourseImg,
        link: "/explore-k-12-courses",
        students: 500,
        rating: 5,
    },
    {
        id: 2,
        title: "Coding",
        desc: "Step into the world of coding with ease and excitement. Our courses make programming simple, practical.",
        image: Coding,
        link: "/explore-coding-courses",
        students: 800,
        rating: 4.5,
    },
    {
        id: 3,
        title: "Languages",
        desc: "Languages made easy! Explore our courses for a fun and effective journey to linguistic proficiency and fluency.",
        image: Languagues,
        link: "/explore-language-courses",
        students: 900,
        rating: 4,
    },
    {
        id: 4,
        title: "Art & Craft",
        desc: "Unleash creativity with our Art & Craft courses designed for fun and skill-building.",
        image: ArtAndCraft,
        students: 1000,
        rating: 3.8,
    },
];

const OurPopularCourses = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-[#f9fafc]">
            <div className="container py-18 pb-12">
                {/* Header */}
                <div className="space-y-4 p-6 text-center max-w-[500px] mx-auto mb-5">
                    <p className="font-semibold text-3xl">Our Popular Courses</p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {PopularCourses.map((item) => (
                        <div
                            key={item.id}
                            className="w-80 space-y-4 p-6 rounded-xl shadow-[0_0_22px_rgba(0,0,0,0.15)] bg-white"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-70 h-60 rounded-xl"
                            />

                            <div className="flex items-center justify-between gap-2">
                                <Link
                                    to={item.link}
                                    className="font-bold text-lg text-pink-500 hover:text-purple-600 transition-colors"
                                >
                                    {item.title}
                                </Link>

                                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-semibold whitespace-nowrap">
                                    👨‍🎓 {item.students}+ Enrolled
                                </span>
                            </div>

                            <p className="text-sm text-gray-800">{item.desc}</p>

                            <div className="flex items-center justify-between mt-2">
                                <StarRating rating={item.rating} />

                                <button
                                    onClick={() => navigate(item.link)}
                                    className="text-white font-semibold rounded-full px-5 py-2
                                    bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500
                                    bg-[length:200%_200%] animate-gradient"
                                >
                                    Explore Course
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurPopularCourses;
