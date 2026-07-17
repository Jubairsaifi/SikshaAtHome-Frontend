import { motion } from "framer-motion";

const shapes = [
    {
        size: "w-52 h-52",
        color: "bg-blue-400/20",
        top: "-40px",
        left: "-60px",
        delay: 0,
    },
    {
        size: "w-72 h-72",
        color: "bg-purple-400/20",
        bottom: "-100px",
        right: "-80px",
        delay: 1,
    },
    {
        size: "w-36 h-36",
        color: "bg-cyan-400/20",
        top: "35%",
        left: "48%",
        delay: 2,
    },
];

const FloatingShapes = () => {
    return (
        <>
            {shapes.map((shape, index) => (
                <motion.div
                    key={index}
                    className={`absolute rounded-full blur-3xl ${shape.size} ${shape.color}`}
                    style={{
                        top: shape.top,
                        left: shape.left,
                        bottom: shape.bottom,
                        right: shape.right,
                    }}
                    animate={{
                        y: [0, -25, 0],
                        x: [0, 10, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: shape.delay,
                    }}
                />
            ))}
        </>
    );
};

export default FloatingShapes;