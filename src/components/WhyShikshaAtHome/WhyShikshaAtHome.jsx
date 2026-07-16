import { motion } from "framer-motion";
import { FaChalkboardTeacher, FaClock, FaUserGraduate, FaGlobe, FaSmile } from "react-icons/fa";

const features = [
  {
    icon: <FaChalkboardTeacher />,
    title: "Expert 1-on-1 Tutors",
    desc: "Learn from certified, experienced tutors who focus only on your child — not a classroom of 30 students.",
  },
  {
    icon: <FaClock />,
    title: "Flexible Scheduling",
    desc: "Classes that fit your routine. Choose your own time slots with complete flexibility.",
  },
  {
    icon: <FaUserGraduate />,
    title: "Personalized Learning",
    desc: "Customized lesson plans based on the student's strengths, weaknesses, and learning pace.",
  },
  {
    icon: <FaGlobe />,
    title: "Learn From Anywhere",
    desc: "Attend live interactive classes from the comfort and safety of your home.",
  },
  {
    icon: <FaSmile />,
    title: "Proven Results",
    desc: "Better confidence, improved grades, and strong conceptual understanding.",
  },
];

const WhySikshaAtHome = () => {
  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Why Siksha At Home?
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We combine expert teachers, modern technology, and personalized learning
            to deliver the best online education experience for your child.
          </p>
        </motion.div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-pink-500 text-white flex items-center justify-center text-2xl">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Experience the Difference
          </h2>
          <p className="text-gray-600 mb-6">
            Book a free demo class today and see how learning becomes simple,
            engaging, and effective.
          </p>
          <a
            href="/free-trial"
            className="inline-block px-8 py-3 rounded-full bg-pink-500 text-white font-semibold hover:bg-pink-600 transition"
          >
            Book a Free Demo
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default WhySikshaAtHome;
