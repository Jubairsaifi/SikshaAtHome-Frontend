import React, { useState, useEffect } from "react";
import API from "../../api";
import countryList from "react-select-country-list";
import { useMemo } from "react";
import Select from "react-select";
import { useLocation } from "react-router-dom";


const FreeTrialForm = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const subjectFromURL = queryParams.get("subject");

    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        parentname: "",
        email: "",
        mobile: "",
        country: "India",
        subjects: []
    });

    const [errors, setErrors] = useState({});
    const [otp, setOtp] = useState("");
    const [otpSent, setOtpSent] = useState(false);
    const [otpLoading, setOtpLoading] = useState(false);
    const [otpError, setOtpError] = useState("");

    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const [toastType, setToastType] = useState("success"); // success | error | loading

    const countryOptions = useMemo(() => countryList().getData(), []);
    const subjectOptions = [
        { value: "mathematics", label: "Mathematics" },
        { value: "science", label: "Science" },
        { value: "physics", label: "Physics" },
        { value: "accounts", label: "Accounts" },
        { value: "biology", label: "Biology" },
        { value: "business-studies", label: "Business Studies" },
        { value: "economics", label: "Economics" },
        { value: "english-speaking", label: "English Speaking" },
        { value: "english", label: "English" },
        { value: "coding", label: "Coding" },
        { value: "chemistry", label: "Chemistry" },
        { value: "french", label: "French" },
        { value: "germen", label: "Germen" },
        { value: "hindi", label: "Hindi" },
        { value: "IELTS-TOEFL", label: "IELTS-TOEFL" },
        { value: "japanese", label: "Japanese" },
        { value: "spanish", label: "Spanish" },
        { value: "app-dev", label: "App Dev" },
        { value: "artificial-intelligent", label: "Artificial Intelligent" },
        { value: "data-science", label: "Data Science" },
        { value: "game-development", label: "Game Development" },
        { value: "python-programming", label: "Python" },
        { value: "economics", label: "Economics" },
        { value: "robotics", label: "Robotics" },
        { value: "scratch-programming", label: "Scratch Programming" },
        { value: "web-development", label: "Web Development" },
    ];


    useEffect(() => {
        if (subjectFromURL) {
            const matchedSubject = subjectOptions.find(
                (sub) => sub.value === subjectFromURL
            );

            if (matchedSubject) {
                setFormData((prev) => ({
                    ...prev,
                    subjects: [matchedSubject], // ✅ array of objects
                }));
            }
        }
    }, [subjectFromURL]);


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: "" });
        }
    };

    const validateStep = () => {
        let tempErrors = {};
        if (step === 1) {
            if (!formData.name.trim()) tempErrors.name = "Name is required";
            if (!formData.parentname.trim()) tempErrors.parentname = "Parent's Name is required";
            if (!formData.email.trim()) tempErrors.email = "Email is required";
            if (!formData.mobile.trim()) tempErrors.mobile = "Mobile Number is required";
        }
        return tempErrors;
    };

    const nextStep = () => {
        const tempErrors = validateStep();
        if (Object.keys(tempErrors).length > 0) {
            setErrors(tempErrors);
            return;
        }
        if (step < 3) setStep(step + 1);
    };

    const prevStep = () => setStep(step - 1);


    // const prevStep = () => {
    //     if (step > 1) setStep(step - 1);
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        const tempErrors = validateStep();
        if (Object.keys(tempErrors).length > 0) {
            setErrors(tempErrors);
            return;
        }
        setStep(3);
    };

    const handleEmailOTP = async () => {
        setOtpLoading(true);
        setOtpError("");
        setShowToast(true);
        setToastType("loading");
        setToastMessage("Sending OTP...");

        try {
            await API.post("/send-email-otp", {
                email: formData.email,
            });

            setOtpSent(true);
            setToastType("success");
            setToastMessage("OTP sent to your email");
            setStep(2); // move to OTP screen
        } catch (err) {
            setOtpError(
                err?.response?.data?.message || "Failed to send OTP"
            );
            setToastType("error");
            setToastMessage(
                err?.response?.data?.message || "Failed to send OTP"
            );
        } finally {
            setOtpLoading(false);
            setTimeout(() => {
                setShowToast(false);
            }, 3000);
        }

    }

    const verifyEmailOTP = async () => {
        if (!otp.trim()) {
            setOtpError("OTP is required");
            return;
        }
        setOtpLoading(true);
        setOtpError("");
        setShowToast(true);
        setToastType("loading");
        setToastMessage("Verifying OTP...");
        try {
            await API.post("/verify-email-otp", {
                email: formData.email,
                otp: otp,
            });
            setTimeout(() => {
                setToastType("success");
                setToastMessage("OTP verified successfully.Please wait a while");

                setTimeout(() => {
                    setShowToast(false);
                    setStep(3);

                }, 3000);
            }, 2000);
        } catch (err) {
            setOtpError(
                err?.response?.data?.message || "Invalid OTP"
            );
            setToastType("error");
            setToastMessage(
                err?.response?.data?.message || "Failed to send OTP"
            );
            setTimeout(() => {
                setShowToast(false);
            }, 3000);
        }
        finally {
            setOtpLoading(false);
            const payload = {
                ...formData,
                country: formData.country?.label,
                subjects: formData.subjects.map(s => s.value)
            };

            const jsonData = JSON.stringify(payload)
            await API.post("/demo/register", jsonData)
            setTimeout(() => {
                setShowToast(false);
                setStep(3);
                setOtp("");
                setFormData({
                    name: "",
                    parentname: "",
                    email: "",
                    mobile: "",
                    country: "India",
                });

            }, 3000);
        }
    };


    return (
        <section className="py-5 bg-gradient-to-b from-gray-50 via-white to-gray-100">
            <div className="flex flex-col md:flex-row justify-center items-stretch min-h-screen bg-gray-100 
                        my-16 md:my-24 rounded-2xl shadow-xl max-w-6xl mx-auto shadow-lg overflow-hidden">
                {/* Left Section */}
                <div className="md:w-1/2 bg-purple-500 text-white rounded-l-2xl flex flex-col justify-center p-10">
                    <p className="bg-gray-800 text-sm px-3 py-1 rounded-full w-max mb-4 flex items-center gap-2 animate-bounce-slow">
                        <span>⏳</span> Hurry! Limited Time Offer
                    </p>

                    <h2 className="text-2xl font-bold mb-4">
                        What You’ll Get in Every Class:
                    </h2>
                    <ul className="space-y-2 text-white-300">
                        <li>🎯 Personalized Learning Support</li>
                        <li>👩‍🏫 One-on-One Interactive Sessions</li>
                        <li>🕒 Flexible Scheduling Anytime</li>
                        <li>🧬 Certified & Experienced Tutors</li>
                    </ul>
                </div>

                {/* Right Section */}
                <div className="md:w-1/2 bg-gray-200 rounded-r-2xl p-10 shadow-lg flex flex-col justify-center">
                    <div className="flex justify-center mb-6">
                        {[1, 2, 3].map((num) => (
                            <div
                                key={num}
                                className={`w-8 h-8 rounded-full flex items-center justify-center mx-2 ${num === step
                                    ? "bg-purple-500 text-white"
                                    : "bg-gray-300 text-gray-600"
                                    }`}
                            >
                                {num}
                            </div>
                        ))}
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {step === 1 && (
                            <>
                                <div>
                                    <label className="block mb-1 font-medium">
                                        Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter Your Full Name"
                                        className="w-full border rounded-md p-3"
                                        required

                                    />
                                    {errors.name && (
                                        <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                                    )}
                                </div>
                                <div>
                                    <label className="block mb-1 font-medium">Parent's Name</label>
                                    <input
                                        type="text"
                                        name="parentname"
                                        value={formData.parentname}
                                        onChange={handleChange}
                                        placeholder="Enter Your Parent's Name"
                                        className="w-full border rounded-md p-3"
                                    />
                                </div>

                                <div>
                                    <label className="block mb-1 font-medium">
                                        Country <span className="text-red-500">*</span>
                                    </label>

                                    <Select
                                        options={countryOptions}
                                        value={formData.country}
                                        onChange={(selected) =>
                                            setFormData({ ...formData, country: selected })
                                        }
                                        placeholder="Select Country"
                                    />
                                </div>


                                <div>
                                    <label className="block mb-1 font-medium">
                                        Subjects
                                    </label>

                                    <Select
                                        options={subjectOptions}
                                        isMulti
                                        value={formData.subjects}
                                        onChange={(selected) =>
                                            setFormData({ ...formData, subjects: selected })
                                        }
                                        placeholder="Select Demo Subject/Subjects"
                                    />
                                </div>



                                <div>
                                    <label className="block mb-1 font-medium">
                                        Mobile Number <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        name="mobile"
                                        value={formData.mobile}
                                        onChange={handleChange}
                                        placeholder="+91 98880 98880"
                                        className="w-full border rounded-md p-3"
                                        required
                                    />
                                    {errors.mobile && (
                                        <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block mb-1 font-medium">
                                        Email <span className="text-red-500">*</span>
                                    </label>
                                    <div className="flex">
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Enter Your Email Address"
                                            className="flex-1 border rounded-l-md p-3"
                                            required
                                        />
                                        <button
                                            type="button"
                                            className="bg-purple-500 text-white px-4 rounded-r-md"
                                            onClick={() => handleEmailOTP()}
                                        >
                                            Send OTP
                                        </button>
                                    </div>
                                    {errors.email && (
                                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                                    )}
                                </div>
                            </>
                        )}

                        {step === 2 && (
                            <div className="text-center">
                                <h3 className="text-xl font-semibold mb-4">
                                    Verify Your Email OTP
                                </h3>
                                <input
                                    type="text"
                                    placeholder="Enter OTP"
                                    className="border p-3 rounded-md w-full mb-4"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                />
                                {otpError && (
                                    <p className="text-red-500 text-sm mb-2">{otpError}</p>
                                )}
                                <div className="flex justify-between">
                                    <button
                                        type="button"
                                        onClick={prevStep}
                                        className="bg-gray-300 px-4 py-2 rounded-md"
                                    >
                                        Back
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => verifyEmailOTP()}
                                        className="bg-pink-500 text-white px-4 py-2 rounded-md"
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                        )}

                        {step === 3 && (
                            <div className="text-center">
                                <h3 className="text-xl font-semibold mb-2">
                                    🎉 Booking Confirmed!
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    Our team will contact you shortly.
                                </p>
                                <button
                                    type="button"
                                    onClick={() => setStep(1)}
                                    className="bg-pink-500 text-white px-4 py-2 rounded-md"
                                >
                                    Book Another
                                </button>
                            </div>
                        )}
                    </form>
                </div>
            </div>
            {showToast && (
                <div className="fixed top-5 right-5 z-50">
                    <div
                        className={`flex items-center gap-3 px-5 py-4 rounded-lg shadow-lg text-white min-w-[260px]
        ${toastType === "success"
                                ? "bg-green-600"
                                : toastType === "error"
                                    ? "bg-red-600"
                                    : "bg-pink-500"
                            }`}
                    >
                        {toastType === "loading" && (
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        )}

                        <p className="text-sm font-medium">{toastMessage}</p>
                    </div>
                </div>
            )}
        </section>

    );
};

export default FreeTrialForm;
