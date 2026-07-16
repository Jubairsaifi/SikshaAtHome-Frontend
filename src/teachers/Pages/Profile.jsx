import { FaUserEdit, FaEnvelope, FaPhone, FaGraduationCap, FaBook, FaLanguage } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="space-y-8">

      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          {/* <h1 className="text-3xl font-bold">Teacher Profile</h1> */}
          <p className="text-gray-500 mt-1">
            Manage your personal and professional information.
          </p>
        </div>

        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl">
          <FaUserEdit />
          Edit Profile
        </button>
      </div>

      {/* Profile Card */}
      <div className="bg-white rounded-2xl shadow-lg p-8">

        <div className="flex flex-col md:flex-row gap-8">

          {/* Left */}
          <div className="flex flex-col items-center">

            <img
              src="https://i.pravatar.cc/200?img=13"
              alt="Teacher"
              className="w-40 h-40 rounded-full border-4 border-blue-500"
            />

            <h2 className="mt-5 text-2xl font-bold">
              Jubair Saifi
            </h2>

            <p className="text-gray-500">
              Mathematics Teacher
            </p>

          </div>

          {/* Right */}

          <div className="flex-1 grid md:grid-cols-2 gap-6">

            <div>
              <label className="font-semibold">
                Email
              </label>

              <div className="flex items-center gap-3 mt-2 border rounded-xl px-4 py-3">
                <FaEnvelope className="text-blue-600" />
                jubair@email.com
              </div>
            </div>

            <div>
              <label className="font-semibold">
                Phone
              </label>

              <div className="flex items-center gap-3 mt-2 border rounded-xl px-4 py-3">
                <FaPhone className="text-blue-600" />
                +91 9876543210
              </div>
            </div>

            <div>
              <label className="font-semibold">
                Qualification
              </label>

              <div className="flex items-center gap-3 mt-2 border rounded-xl px-4 py-3">
                <FaGraduationCap className="text-blue-600" />
                B.Tech (Computer Science)
              </div>
            </div>

            <div>
              <label className="font-semibold">
                Experience
              </label>

              <div className="mt-2 border rounded-xl px-4 py-3">
                5 Years
              </div>
            </div>

            <div>
              <label className="font-semibold">
                Subjects
              </label>

              <div className="flex items-center gap-3 mt-2 border rounded-xl px-4 py-3">
                <FaBook className="text-blue-600" />
                Mathematics, Physics
              </div>
            </div>

            <div>
              <label className="font-semibold">
                Languages
              </label>

              <div className="flex items-center gap-3 mt-2 border rounded-xl px-4 py-3">
                <FaLanguage className="text-blue-600" />
                English, Hindi
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Bio */}

      <div className="bg-white rounded-2xl shadow-lg p-8">

        <h2 className="text-xl font-bold mb-4">
          About Me
        </h2>

        <p className="text-gray-600 leading-8">
          Passionate Mathematics educator with over five years of
          teaching experience. I enjoy making complex concepts easy
          to understand through interactive and engaging lessons.
          Dedicated to helping students achieve academic excellence.
        </p>

      </div>

      {/* Certificates */}

      <div className="bg-white rounded-2xl shadow-lg p-8">

        <h2 className="text-xl font-bold mb-5">
          Documents
        </h2>

        <div className="grid md:grid-cols-2 gap-5">

          <div className="border rounded-xl p-5 hover:bg-slate-50 cursor-pointer">
            📄 Resume.pdf
          </div>

          <div className="border rounded-xl p-5 hover:bg-slate-50 cursor-pointer">
            📄 Degree Certificate.pdf
          </div>

        </div>

      </div>

    </div>
  );
};

export default Profile;