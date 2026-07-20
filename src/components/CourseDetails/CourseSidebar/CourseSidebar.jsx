import {
    Clock3,
    Globe,
    Award,
    Download,
    Infinity,
    Heart,
    Share2,
} from "lucide-react";

import Button from "../../ui/Button";
import python from "../../../assets/courses/python.jpg";

const CourseSidebar = ({ course }) => {
    return (
        <div className="sticky top-28 overflow-hidden rounded-3xl bg-white shadow-2xl">

            {/* Course Image */}

            <img
                src={course.image}
                alt="Course"
                className="h-60 w-full object-cover"
            />

            <div className="p-6">

                {/* Price */}

                <div className="flex items-center gap-3">

                    <h2 className="text-4xl font-bold text-slate-900">
                        {course.price}
                    </h2>

                    <span className="text-xl text-slate-400 line-through">
                        {course.originalPrice}
                    </span>

                </div>

                <p className="mt-2 text-green-600 font-medium">
                    Save 38%
                </p>

                {/* Buttons */}

                <div className="mt-8 space-y-3">

                    <Button className="w-full">
                        Book Free Trial
                    </Button>

                    <Button
                        variant="secondary"
                        className="w-full"
                    >
                        Enroll Now
                    </Button>

                </div>

                {/* Wishlist */}

                <div className="mt-5 flex gap-3">

                    <button className="flex-1 rounded-xl border border-slate-200 py-3 transition hover:bg-slate-100">

                        <Heart className="mx-auto" size={20} />

                    </button>

                    <button className="flex-1 rounded-xl border border-slate-200 py-3 transition hover:bg-slate-100">

                        <Share2 className="mx-auto" size={20} />

                    </button>

                </div>

                {/* Includes */}

                <div className="mt-8">

                    <h3 className="font-bold text-slate-900">
                        This Course Includes
                    </h3>

                    <div className="mt-5 space-y-4">

                        <div className="flex items-center gap-3">

                            <Clock3 size={18} />

                            <span>{course.duration}</span>

                        </div>

                        {/* <div className="flex items-center gap-3">

                            <Infinity size={18} />

                            <span>Lifetime Access</span>

                        </div> */}

                        <div className="flex items-center gap-3">

                            <Download size={18} />

                            <span>Notes & Worksheets</span>

                        </div>

                        {course.certificate && (
                            <div className="flex items-center gap-3">
                                <Award size={18} />
                                <span>Certificate Included</span>
                            </div>
                        )}

                        <div className="flex items-center gap-3">

                            <Globe size={18} />

                            <span>English Language</span>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default CourseSidebar;