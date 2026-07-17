// import { motion } from "framer-motion";

// const TestimonialCard = ({ testimonial }) => {

//     return (
//         <motion.div
//             whileHover={{ y: -8 }}
//             className="
//             bg-white
//             rounded-2xl
//             shadow-md
//             p-6
//             hover:shadow-xl
//             transition
//             "
//         >

//             <div className="flex items-center gap-4">

//                 <img
//                     src={testimonial.image}
//                     className="
//                     w-14
//                     h-14
//                     rounded-full
//                     object-cover
//                     "
//                 />

//                 <div>
//                     <h3 className="font-semibold text-lg">
//                         {testimonial.name}
//                     </h3>

//                     <p className="text-gray-500 text-sm">
//                         {testimonial.role}
//                     </p>
//                 </div>

//             </div>


//             <div className="mt-4 text-yellow-500">
//                 {"⭐".repeat(testimonial.rating)}
//             </div>


//             <p className="
//                 mt-4
//                 text-gray-600
//                 leading-relaxed
//             ">
//                 "{testimonial.review}"
//             </p>


//         </motion.div>
//     )
// }

// export default TestimonialCard;

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const TestimonialCard = ({ testimonial }) => {
    return (
        <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl border border-slate-200"
        >
            {/* Quote Icon */}
            <Quote
                className="absolute right-8 top-8 text-blue-100"
                size={50}
            />

            {/* Stars */}
            <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, index) => (
                    <Star
                        key={index}
                        size={18}
                        className="fill-yellow-400 text-yellow-400"
                    />
                ))}
            </div>

            {/* Review */}
            <p className="text-slate-600 leading-8 mb-8">
                "{testimonial.review}"
            </p>

            {/* User */}
            <div className="flex items-center gap-4">
                <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                />

                <div>
                    <h4 className="font-bold text-slate-900">
                        {testimonial.name}
                    </h4>

                    <p className="text-sm text-slate-500">
                        {testimonial.role}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default TestimonialCard;