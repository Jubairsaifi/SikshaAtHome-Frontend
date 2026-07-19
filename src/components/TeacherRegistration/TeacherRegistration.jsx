import React, { useState, useEffect, useRef } from "react";
import API from "../../api";

const TeacherRegistration = () => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all?fields=name");
        const data = await res.json();

        const countryNames = data
          .map(c => c.name.common)
          .sort();

        setCountries(countryNames);
      } catch (error) {
      }
    };

    fetchCountries();
  }, []);

  const fetchStates = async (country) => {
    try {
      const res = await fetch(
        "https://countriesnow.space/api/v0.1/countries/states",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ country })
        }
      );
      setStates(data.data.states.map(s => s.name));
    } catch (error) {
    }
  };

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success");
  const resumeRef = useRef(null);

  const initialFormState = {
    fName: "",
    email: "",
    password: "",
    introduction: "",
    stateProvince: "",
    country: "",
    mobileNumber: "",
    whatsAppNumber: "",
    teachingExperience: "",
    highestQualification: "",
    subjectTeach: [],
    resume: "",
  };
  const [formData, setFormData] = useState(initialFormState)

  const experiences = [
    "0-1 years",
    "1-3 years",
    "3-5 years",
    "5+ years"
  ];

  const qualifications = [
    "High School",
    "Bachelor's Degree",
    "Master's Degree",
    "PhD"
  ];

  const subjectsList = [
    "Mathematics",
    "Science",
    "English",
    "Coding",
    "Art & Craft",
    "Languages"
  ];

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (name === "country") {
      setFormData({ ...formData, country: value, stateProvince: "" });
      fetchStates(value);
      return;
    }

    if (type === "checkbox") {
      if (checked) {
        setFormData({
          ...formData,
          subjectTeach: [...formData.subjectTeach, value]
        });
      } else {
        setFormData({
          ...formData,
          subjectTeach: formData.subjectTeach.filter(sub => sub !== value)
        });
      }
    } else if (type === "file") {
      setFormData({ ...formData, resume: files[0].name });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowToast(true);
    setToastType("loading");
    setToastMessage("Submitting your details...");
    try {
      const res = await API.post("/teachers/register", formData, {
        headers: {
          "Content-Type": "application/json"
        }
      });

      setTimeout(() => {
        setToastType("success");
        setToastMessage(res.data?.message || "Registered successfully");
        setFormData(initialFormState);
        if (resumeRef.current) {
          resumeRef.current.value = "";
        }
      }, 2000);
    } catch (err) {

      setTimeout(() => {
        setToastType("error");
        setToastMessage(
          err?.response?.data?.message || "Something went wrong"
        );
      }, 2000);

    } finally {
      setTimeout(() => {
        setShowToast(false)
      }, 5000);
    }
  };



  return (
    <div className="min-h-screen py-12 flex justify-center py-20">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl w-full max-w-6xl space-y-6"
      >
        <h2 className="text-2xl font-bold text-left mb-12">
          Shape Futures : Become a Part of Our Educator Network
        </h2>
        <div className="ml-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {/* Name */}
            <div>
              <label className="block mb-3 font-sm">Full Name <span className="text-red-500"> * </span></label>
              <input
                type="text"
                name="fName"
                value={formData.fName}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full border rounded-md p-3"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-3 font-sm">Email <span className="text-red-500"> * </span></label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@mail.com"
                className="w-full border rounded-md p-3 mb-3"
                required
              />
            </div>
          </div>


          {/* Introduction */}
          <div>
            <label className="block mb-3 font-sm">Introduction <span className="text-red-500"> * </span></label>
            <textarea
              name="introduction"
              value={formData.introduction}
              onChange={handleChange}
              placeholder="Tell us about yourself"
              className="w-full border rounded-md p-3 mb-3"
              rows="4"
              required
            />
          </div>

          {/*Country  */}
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full border rounded-md p-3 mb-3"
            required
          >
            <option value="">Select Country</option>
            {countries.map((c, idx) => (
              <option key={idx} value={c}>{c}</option>
            ))}
          </select>


          {/* State/Province */}
          <select
            name="stateProvince"
            value={formData.stateProvince}
            onChange={handleChange}
            className="w-full border rounded-md p-3 mb-3"
            required
            disabled={!formData.country}
          >
            <option value="">
              {formData.country ? "Select State / Province" : "Select country first"}
            </option>

            {states.map((state, idx) => (
              <option key={idx} value={state}>{state}</option>
            ))}
          </select>


          {/* Mobile & WhatsApp */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block mb-3 font-sm">Mobile Number <span className="text-red-500"> * </span></label>
              <input
                type="tel"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="w-full border rounded-md p-3 mb-3"
                required
              />
            </div>
            <div>
              <label className="block mb-3 font-sm">WhatsApp Number <span className="text-red-500"> * </span></label>
              <input
                type="tel"
                name="whatsAppNumber"
                value={formData.whatsAppNumber}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="w-full border rounded-md p-3 mb-3"
              />
            </div>
          </div>



          {/* Teaching Experience */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block mb-3">Teaching Experience
                <span className="text-red-500"> * </span>
              </label>
              <select
                name="teachingExperience"
                value={formData.teachingExperience}
                onChange={handleChange}
                className="w-full border rounded-md p-3 mb-3"
                required
              >
                <option value="">Select experience</option>
                {experiences.map((exp, idx) => (
                  <option key={idx} value={exp}>{exp}</option>
                ))}
              </select>
            </div>



            {/* Highest Qualification */}
            <div>
              <label className="block mb-3 font-sm">Highest Qualification <span className="text-red-500"> * </span></label>
              <select
                name="highestQualification"
                value={formData.highestQualification}
                onChange={handleChange}
                className="w-full border rounded-md p-3"
                required
              >
                <option value="">Select qualification</option>
                {qualifications.map((q, idx) => (
                  <option key={idx} value={q}>{q}</option>
                ))}
              </select>
            </div>
          </div>


          {/* Subjects You Teach */}
          <div>
            <label className="block mb-3 font-sm">Subjects You Teach <span className="text-red-500"> * </span></label>
            <div className="flex flex-wrap gap-4">
              {subjectsList.map((sub, idx) => (
                <label key={idx} className="flex items-center gap-2 mb-3">
                  <input
                    type="checkbox"
                    name="subjectTeach"
                    value={sub}
                    checked={formData.subjectTeach.includes(sub)}
                    onChange={handleChange}
                  />
                  {sub}
                </label>
              ))}
            </div>
          </div>



          {/* CV Upload */}
          <div>
            <label className="block mb-3 font-sm">Attach Your CV <span className="text-red-500"> * </span></label>
            <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
              className="w-full"
              required
              ref={resumeRef}
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-purple-600 text-white font-semibold px-8 py-3 rounded-lg transition"
            >
              Submit
            </button>
          </div>
        </div>
      </form>


      {showToast && (
        <div className="fixed top-5 right-5 z-50">
          <div
            className={`flex items-center gap-3 px-5 py-4 rounded-lg shadow-lg text-white min-w-[260px]
        ${toastType === "success"
                ? "bg-green-600"
                : toastType === "error"
                  ? "bg-red-600"
                  : "bg-orange-500"
              }`}
          >
            {toastType === "loading" && (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            )}
            <p className="text-sm font-medium">{toastMessage}</p>
          </div>
        </div>
      )}

    </div>
  );
};

export default TeacherRegistration;
