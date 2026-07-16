import React, { useState, useEffect } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaThumbsUp, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import API from "../../api";

const ContactUs = () => { 
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });



    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [message, setMessage] = useState("");
    const [isError, setIsError] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = {};
        if (!formData.name) newErrors.name = "Name is required";
        if (!formData.email) newErrors.email = "Email is required";
        if (!formData.phone) newErrors.phone = "Phone is required";
        if (!formData.message) newErrors.message = "Message is required";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        } else {
            try {
                const jasonData = JSON.stringify(formData)
                const res = await API.post("/contact", jasonData, {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
                );
                setMessage(res.data?.message || "Your message has been sent successfully")
                setIsError(false);
                setFormData({ name: "", email: "", phone: "", message: "" });
            } catch (err) {
                setMessage(err?.response?.data?.message || "You have enquired before");
                setIsError(true);

            } finally {
                setErrors({});
                setSubmitted(true);
                setFormData({ name: "", email: "", message: "", phone: "" });
            }
        }
    };

    useEffect(() => {
        if (submitted) {
            const timer = setTimeout(() => setSubmitted(false), 7000);
            return () => clearTimeout(timer);
        }
    }, [submitted]);



    return (
        <div className="py-20 flex flex-col lg:flex-row bg-gray-50 min-h-screen">
            <div className="bg-white text-black p-20 w-full lg:w-1/3 flex flex-col gap-6 
    mt-4 lg:mt-0 transition-all duration-300">

                <h2 className="text-2xl font-bold mb-6 border-b pb-2 border-blue-200">
                    Contact Details
                </h2>

                {/* Address */}
                <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="p-3 bg-blue-100 rounded-full group-hover:bg-sky-600 group-hover:text-white transition">
                        <FaMapMarkerAlt size={18} />
                    </div>

                    {/* Text Section */}
                    <div className="flex flex-col">
                        <h3 className="text-sm font-semibold text-gray-700">
                            Address
                        </h3>
                        <span className="text-sm font-medium text-gray-800 whitespace-nowrap">
                            Sec 3, Noida, India
                        </span>
                    </div>
                </div>

                {/* Contact Us */}
                <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="p-3 bg-blue-100 rounded-full group-hover:bg-sky-600 group-hover:text-white transition">
                        <FaPhone size={18} />
                    </div>

                    {/* Text Section */}
                    <div className="flex flex-col">
                        <h3 className="text-sm font-semibold text-gray-700">
                            Call Us
                        </h3>
                        <span className="text-sm font-medium text-gray-800 whitespace-nowrap">
                            +91 7055798195, +91 8630755881
                        </span>
                    </div>
                </div>
                {/* Mail Us */}
                <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="p-3 bg-blue-100 rounded-full group-hover:bg-sky-600 group-hover:text-white transition">
                        <FaEnvelope size={18} />
                    </div>

                    {/* Text Section */}
                    <div className="flex flex-col">
                        <h3 className="text-sm font-semibold text-gray-700">
                            Mail Us
                        </h3>
                        <span className="text-sm font-medium text-gray-800 whitespace-nowrap">
                            helpdesk@sikshtaathome.com
                        </span>
                    </div>
                </div>

                {/* Social media */}

                <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="p-3 bg-blue-100 rounded-full group-hover:bg-sky-600 group-hover:text-white transition">
                        <FaThumbsUp size={18} />
                    </div>

                    {/* Text Section */}
                    <div className="flex flex-col">
                        <h3 className="text-sm font-semibold text-gray-700">
                            Social Media
                        </h3>
                        <span className="text-sm font-medium text-gray-800 whitespace-nowrap">
                            Follow us on- 
                        </span>
                    </div>
                </div>
            </div>



            {/* Form */}
            <div className="bg-gray-200 flex-1 p-8">
                <h2 className="text-xl font-bold mb-6">Get in Touch</h2>
                {submitted && (
                    <div
                        className={`flex items-center justify-between p-3 rounded mb-4 ${isError
                            ? "bg-red-100 text-red-700"
                            : "bg-green-100 text-green-700"
                            }`}
                    >
                        <span>{message}</span>

                        {/* Close Button */}
                        <button
                            onClick={() => setSubmitted(false)}
                            className="font-bold px-2 hover:opacity-70"
                        >
                            ✕
                        </button>
                    </div>
                )}
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                        <label className="block mb-1 font-sm">Name *</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border rounded-md p-3"
                            placeholder="Your Name"
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                        )}
                    </div>

                    <div>
                        <label className="block mb-1 font-sm">Email *</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border rounded-md p-3"
                            placeholder="Your Email"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                        )}
                    </div>

                    <div>
                        <label className="block mb-1 font-sm">Phone *</label>
                        <input
                            type="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full border rounded-md p-3"
                            placeholder="Your Phone Number"
                        />
                        {errors.phone && (
                            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                        )}
                    </div>

                    <div>
                        <label className="block mb-1 font-sm">Message *</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full border rounded-md p-3"
                            placeholder="Your Message"
                            rows="5"
                        />
                        {errors.message && (
                            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="bg-orange-500 text-white px-6 py-3 rounded-md font-semibold transition"
                    // onClick={() => handleSendMessage()}
                    >
                        Send Message
                    </button>
                </form>
            </div>
            {/* Floating WhatsApp Button */}
            <a
                href="https://wa.me/918630755881"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center animate-bounce transition"
                title="Chat on WhatsApp"
            >
                <FaWhatsapp size={28} />
            </a>
        </div>
    );
};

export default ContactUs;


