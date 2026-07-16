import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const DemoBookingModal = ({ isOpen, onClose, getStarted }) => {
  const [submitted, setSubmitted] = React.useState(false);
  const [loading, setLoading] = React.useState(false); // 🔹 new state
  const [formData, setFormData] = React.useState({
    name: "",
    phone: "",
    email: "",
    grade: "",
    subject: "",
    topic: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 2500);
  };

  React.useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: "",
          phone: "",
          email: "",
          grade: "",
          subject: "",
          topic: "",
          date: "",
          time: "",
        });
        onClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [submitted, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-lg shadow-lg w-full max-w-4xl p-6 relative max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            {/* Close button only before submission */}
            {!submitted && !loading && (
              <button
                onClick={onClose}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              >
                ✖
              </button>
            )}

            {/* Loader */}
            {loading ? (
              <div className="flex flex-col items-center justify-center py-20 h-[55vh]">
                <div className="w-12 h-12 border-4 border-pink-500 border-t-transparent rounded-full animate-spin"></div>
                <p className="mt-4 text-gray-600">Booking your demo...</p>
              </div>
            ) : submitted ? (
              // Success Message
              <div className="text-center py-10 h-[55vh]">
                <h2 className="text-2xl font-bold text-green-600 mb-6">
                  Congratulations 🎉 Dear {formData.name}, Your demo Booked Successfully!
                </h2>
                <p className="text-gray-700 mb-8">
                  Thanks for booking your demo. Our Team will contact you soon.
                </p>
              </div>
            ) : (
              // Form
              <>
                <h2 className="text-xl font-bold mb-4 text-center">
                  Book Your 30 minutes Demo For Free
                </h2>
                <form
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    required
                  />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    required
                  />
                  <input
                    type="text"
                    name="grade"
                    placeholder="Grade"
                    value={formData.grade}
                    onChange={handleChange}
                    className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                  <input
                    type="text"
                    name="topic"
                    placeholder="Topic"
                    value={formData.topic}
                    onChange={handleChange}
                    className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                  <input
                    type="date"
                    name="date"
                    placeholder="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    required
                  />
                  <input
                    type="time"
                    name="time"
                    placeholder="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    required
                  />
                  <div className="md:col-span-2 flex justify-center">
                    <button
                      type="submit"
                      className={`py-2 px-6 rounded transition-colors ${getStarted
                          ? "primary-btn text-black"
                          : "bg-pink-500 hover:bg-pink-600 text-white"
                        }`}
                      // className="bg-pink-500 text-white py-2 px-6 rounded hover:bg-pink-600 transition-colors"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DemoBookingModal;

