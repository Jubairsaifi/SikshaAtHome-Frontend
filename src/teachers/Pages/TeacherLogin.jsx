import LeftBanner from "../components/LeftBanner";
import LoginForm from "../components/LoginForm";
import Statistics from "../components/Statistics";

const TeacherLogin = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-blue-100">

      {/* Main Section */}
      <div className="max-w-7xl mx-auto py-8 px-5">

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden grid lg:grid-cols-2">

          {/* Left Side */}
          <LeftBanner />

          {/* Right Side */}
          <LoginForm />

        </div>

        {/* Bottom Statistics */}
        <Statistics />

      </div>

    </div>
  );
};

export default TeacherLogin;