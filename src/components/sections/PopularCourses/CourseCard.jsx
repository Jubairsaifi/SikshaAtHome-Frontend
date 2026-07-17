// import { motion } from "framer-motion";
// import { Star, Users, ArrowRight } from "lucide-react";
// import { Link } from "react-router-dom";

// const CourseCard = ({ course }) => {
//     return (
//         <motion.div
//             whileHover={{ y: -8 }}
//             transition={{ duration: 0.3 }}
//             className="group overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-2xl"
//         >
//             {/* Image */}
//             <div className="relative overflow-hidden h-56">
//                 <img
//                     src={course.image}
//                     alt={course.title}
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                 />

//                 {course.popular && (
//                     <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
//                         Most Popular
//                     </span>
//                 )}
//             </div>

//             {/* Content */}
//             <div className="p-6">

//                 <h3 className="text-2xl font-bold text-slate-900">
//                     {course.title}
//                 </h3>

//                 <p className="mt-2 text-slate-500">
//                     {course.level}
//                 </p>

//                 <div className="flex justify-between mt-6">

//                     <div className="flex items-center gap-2">
//                         <Star
//                             className="text-yellow-400 fill-yellow-400"
//                             size={18}
//                         />
//                         <span>{course.rating}</span>
//                     </div>

//                     <div className="flex items-center gap-2">
//                         <Users size={18} />
//                         <span>{course.students}</span>
//                     </div>

//                 </div>

//                 <div className="mt-6 flex items-center justify-between">

//                     <div>
//                         <p className="text-sm text-slate-500">
//                             Starting From
//                         </p>

//                         <h4 className="text-xl font-bold text-blue-600">
//                             {course.price}
//                         </h4>
//                     </div>

//                     <Link
//                         to={course.link}
//                         className="flex items-center gap-2 font-semibold text-blue-600 hover:gap-3 transition-all"
//                     >
//                         Explore

//                         <ArrowRight size={18} />
//                     </Link>

//                 </div>

//             </div>
//         </motion.div>
//     );
// };

// export default CourseCard;

import { motion } from "framer-motion";
import { Star, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";


const CourseCard = ({ course }) => {

    const gradients = {
        blue: "from-blue-50 to-blue-100",
        purple: "from-purple-50 to-purple-100",
        green: "from-green-50 to-green-100",
        orange: "from-orange-50 to-orange-100",
    };


    return (

        <motion.div

            whileHover={{ y: -8 }}

            transition={{ duration: 0.3 }}

            className={`
            group
            relative
            overflow-hidden
            rounded-3xl
            bg-gradient-to-br
            ${gradients[course.color]}
            border
            border-white
            shadow-sm
            hover:shadow-xl
            p-7
            transition-all
            duration-300
            `}

        >


            {/* Popular Badge */}

            {
                course.popular && (

                    <span className="
                    absolute
                    top-2
                    right-2
                    bg-purple-600
                    text-white
                    text-xs
                    px-3
                    py-1
                    rounded-full
                    font-medium
                    ">

                        Popular

                    </span>

                )
            }





            {/* Icon */}

            {/* <div className="
            text-5xl
            mb-6
            group-hover:scale-110
            transition-transform
            duration-300
            ">

                {course.icon}

            </div> */}





            {/* Title */}

            <h3 className="
            text-2xl
            font-bold
            text-slate-900
            ">

                {course.title}

            </h3>





            {/* Description */}

            <p className="
            mt-3
            text-slate-600
            leading-relaxed
            ">

                {course.description}

            </p>





            {/* Level */}

            <div className="
            mt-5
            inline-block
            bg-white
            px-4
            py-2
            rounded-xl
            text-sm
            font-medium
            text-slate-700
            ">

                {course.level}

            </div>







            {/* Stats */}

            <div className="
            flex
            items-center
            gap-5
            mt-6
            ">


                <div className="
                flex
                items-center
                gap-1
                ">

                    <Star

                        size={17}

                        className="
                        text-yellow-500
                        fill-yellow-500
                        "

                    />

                    <span className="font-medium">

                        {course.rating}

                    </span>

                </div>




                <div className="
                flex
                items-center
                gap-1
                text-slate-600
                ">

                    <Users size={17} />

                    <span>

                        {course.students}

                    </span>

                </div>


            </div>






            {/* Button */}


            <Link

                to={course.link}

                className="
                mt-7
                inline-flex
                items-center
                gap-2
                bg-white
                px-5
                py-3
                rounded-xl
                font-semibold
                text-purple-600
                shadow-sm
                hover:gap-3
                transition-all
                "

            >

                Explore Course

                <ArrowRight size={18} />


            </Link>



        </motion.div>

    );

};


export default CourseCard;