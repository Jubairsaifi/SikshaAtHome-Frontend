import {
  FaUsers,
  FaCalendarAlt,
  FaStar,
  FaAward,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaUsers className="text-blue-600 text-3xl" />,
    value: "10,000+",
    label: "Active Teachers",
  },
  {
    icon: <FaCalendarAlt className="text-green-600 text-3xl" />,
    value: "50,000+",
    label: "Live Classes",
  },
  {
    icon: <FaStar className="text-yellow-500 text-3xl" />,
    value: "4.9/5",
    label: "Teacher Rating",
  },
  {
    icon: <FaAward className="text-orange-500 text-3xl" />,
    value: "5+ Years",
    label: "Trusted Platform",
  },
];

const Statistics = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

      {stats.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-lg p-6 flex items-center gap-4 hover:-translate-y-1 transition"
        >
          {item.icon}

          <div>
            <h2 className="font-bold text-xl">
              {item.value}
            </h2>

            <p className="text-gray-500 text-sm">
              {item.label}
            </p>
          </div>
        </div>
      ))}

    </div>
  );
};

export default Statistics;