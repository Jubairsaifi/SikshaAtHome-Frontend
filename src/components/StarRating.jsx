import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { motion } from "framer-motion";

const StarRating = ({ rating }) => {
    return (
        <div className="flex items-center gap-1">
            {[...Array(5)].map((_, index) => {
                const starValue = index + 1;

                let StarIcon;
                if (rating >= starValue) {
                    StarIcon = <FaStar className="text-yellow-400" />;
                } else if (rating >= starValue - 0.5) {
                    StarIcon = <FaStarHalfAlt className="text-yellow-400" />;
                } else {
                    StarIcon = <FaRegStar className="text-gray-300" />;
                }

                return (
                    <motion.span
                        key={index}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                            delay: index * 0.1,
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                        }}
                        className="text-sm"
                    >
                        {StarIcon}
                    </motion.span>
                );
            })}

            {/* <span className="ml-1 text-sm font-semibold text-gray-700">
                {rating}
            </span> */}
        </div>
    );
};

export default StarRating;
