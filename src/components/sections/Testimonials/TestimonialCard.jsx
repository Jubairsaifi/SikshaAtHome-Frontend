import { motion } from "framer-motion";

const TestimonialCard = ({ testimonial }) => {

    return (
        <motion.div
            whileHover={{ y: -8 }}
            className="
            bg-white
            rounded-2xl
            shadow-md
            p-6
            hover:shadow-xl
            transition
            "
        >

            <div className="flex items-center gap-4">

                <img
                    src={testimonial.image}
                    className="
                    w-14
                    h-14
                    rounded-full
                    object-cover
                    "
                />

                <div>
                    <h3 className="font-semibold text-lg">
                        {testimonial.name}
                    </h3>

                    <p className="text-gray-500 text-sm">
                        {testimonial.role}
                    </p>
                </div>

            </div>


            <div className="mt-4 text-yellow-500">
                {"⭐".repeat(testimonial.rating)}
            </div>


            <p className="
                mt-4
                text-gray-600
                leading-relaxed
            ">
                "{testimonial.review}"
            </p>


        </motion.div>
    )
}

export default TestimonialCard;