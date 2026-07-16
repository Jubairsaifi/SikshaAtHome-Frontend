import React from "react";

const Congratulations = (formData) => {
    return (
        <div className="text-center py-10">
            <h2 className="text-2xl font-bold text-green-600 mb-4">
                Congratulations 🎉 Dear {formData.formData.name}, Your demo Booked Successfully!
            </h2>
            <p className="text-gray-700 mb-6">
                Thanks for booking your demo. Our Team will contact you soon.
            </p>
            <button
                                    className="bg-pink-500 text-white py-2 px-6 rounded hover:bg-pink-600 transition-colors"
                                >
                                    Close
                                </button>
        </div>
    )
}

export default Congratulations;