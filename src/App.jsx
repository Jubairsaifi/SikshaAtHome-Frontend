import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/signIn";
import Register from "./pages/Register";
import TeacherRegistration from "./components/TeacherRegistration/TeacherRegistration";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import NavbarV2 from "./components/layout/navbar/NavbarV2";
import Footer from "./components/sections/Footer/Footer";
// import Footer from "./components/Footer/Footer";
import DemoBookingModal from "./components/DemoBooking/BookDemo";
import FreeTrialForm from "./components/BookAFreeTrial/BookaFreeTrial"
import ContactUs from "./components/ContactUs/ContactUs";
import AboutUs from "./components/AboutUS/AboutUs";
import Blog from "./components/Blog/Blog";
import ChildSafety from "./components/ChildSafety/ChildSafety";
import WhySikshaAtHome from "./components/WhyShikshaAtHome/WhyShikshaAtHome";
import K12Courses from "./components/Courses/K-12-Courses";
import CodingCourses from "./components/Courses/Coding-Courses";
import LanguageCourses from "./components/Courses/Language-Courses";
import EnglishSpeaking from "./components/Courses/English-Speaking";
import MathCourse from "./components/Courses/Math";
import PhysicsCourse from "./components/Courses/Physics";
import ChemistryCourse from "./components/Courses/chemistry";
import BiologyCourse from "./components/Courses/Biology";
import EnglishCourse from "./components/Courses/English";
import EconomicsCourse from "./components/Courses/economics";
import BusinessStudiesCourse from "./components/Courses/Business-studies";
import AccountancyCourse from "./components/Courses/Accounts";
import ScratchProgrammingCourse from "./components/Courses/Coding-Courses/Scratch-programming";
import PythonProgrammingCourse from "./components/Courses/Coding-Courses/python";
import WebDevelopmentCourse from "./components/Courses/Coding-Courses/web-development";
import AppDevelopmentCourse from "./components/Courses/Coding-Courses/App-dev";
import AICourse from "./components/Courses/Coding-Courses/Artificial-Intelligent";
import RoboticsCourse from "./components/Courses/Coding-Courses/Robotics";
import GameDevelopmentCourse from "./components/Courses/Coding-Courses/Game-Development";
import DataScienceCourse from "./components/Courses/Coding-Courses/Data-Science";
import FrenchLanguageCourse from "./components/Courses/Language-Courses/French";
import SpanishLanguageCourse from "./components/Courses/Language-Courses/Spanish";
import GermanCourse from "./components/Courses/Language-Courses/German";
import JapaneseLanguageCourse from "./components/Courses/Language-Courses/Japanese";
import IELTS_TOEFL_Course from "./components/Courses/Language-Courses/IELTS";
import HindiCourse from "./components/Courses/Language-Courses/Hindi";
import { useEffect } from "react";
import ScrollToTop from "./components/scrollToTop";
import TeacherLayout from "./teachers/components/TeacherLayout"
import Dashboard from "./teachers/Pages/Dashboard";
import { useLocation } from "react-router-dom";
import TeacherLogin from "./teachers/Pages/TeacherLogin";
import Availability from "./teachers/Pages/Availablity";
import Students from "./teachers/Pages/Students";
import Classes from "./teachers/Pages/Classes";
import Earnings from "./teachers/Pages/Earnings";
import Profile from "./teachers/Pages/Profile";
import ProtectedTeacherRoute from "./teachers/components/ProtectedTeacherRoute";
import AdminLayout from "./admin/Components/AdminLayout";
import ProtectedAdminRoute from "./admin/components/ProtectedAdminRoute";
import AdminLogin from "./admin/Pages/AdminLogin";
// import DashboardCard from "./admin/Components/DashboardCard";
import AdminDashboard from "./admin/Pages/Dashboard";
import DemoRequests from "./admin/Pages/DemoRequests";
import Teachers from "./admin/Pages/Teachers";
import TeacherDetails from "./admin/Pages/TeacherDetails";
import AdminStudents from "./admin/Pages/Students";
import AdminClasses from "./admin/Pages/Classes";
import CourseDetails from "./pages/CourseDetails/CourseDetails";
import TeacherProfile from "./pages/TeacherProfile/TeacherProfile";
const App = () => {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);
  const location = useLocation();

  const isTeacherRoute =
    location.pathname.startsWith("/teacher") || location.pathname.startsWith("/admin");

  return (
    <div className="flex flex-col min-h-screen">
      {!isTeacherRoute && <NavbarV2 />}
      {/* <TeacherLayout>
        <Dashboard />
      </TeacherLayout> */}
      {/* <Navbar /> */}
      <div className="flex-grow">
        <ScrollToTop />
        <Routes>
          {/* <Route path="*" element={<Home />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/become-a-teacher" element={<TeacherRegistration />} />
          <Route path="/book-demo" element={<DemoBookingModal />} />
          <Route path="/book-a-free-trial" element={<FreeTrialForm />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/child-safety" element={<ChildSafety />} />
          <Route path="/whyShikshaAtHome" element={<WhySikshaAtHome />} />
          <Route path="/explore-k-12-courses" element={<K12Courses />} />
          <Route path="/explore-coding-courses" element={<CodingCourses />} />
          <Route path="/explore-language-courses" element={<LanguageCourses />} />
          <Route path="/explore-english-speaking-course" element={<EnglishSpeaking />} />
          <Route path="/english-speaking" element={<EnglishSpeaking />} />
          <Route path="/explore-k-12-courses/mathematics" element={<MathCourse />} />
          <Route path="/mathematics" element={<MathCourse />} />
          <Route path="/english" element={<EnglishCourse />} />
          <Route path="/web-development" element={<WebDevelopmentCourse />} />
          <Route path="/game-development" element={<GameDevelopmentCourse />} />
          <Route path="/scratch-programming" element={<ScratchProgrammingCourse />} />
          <Route path="/explore-k-12-courses/physics" element={<PhysicsCourse />} />
          <Route path="/explore-k-12-courses/chemistry" element={<ChemistryCourse />} />
          <Route path="/explore-k-12-courses/biology" element={<BiologyCourse />} />
          <Route path="/explore-k-12-courses/english" element={<EnglishCourse />} />
          <Route path="/explore-k-12-courses/economics" element={<EconomicsCourse />} />
          <Route path="/explore-k-12-courses/business-studies" element={<BusinessStudiesCourse />} />
          <Route path="/explore-k-12-courses/accounts" element={<AccountancyCourse />} />
          <Route path="/explore-coding-courses/scratch-programming" element={<ScratchProgrammingCourse />} />
          <Route path="/explore-coding-courses/python-programming" element={<PythonProgrammingCourse />} />
          <Route path="/explore-coding-courses/web-development" element={<WebDevelopmentCourse />} />
          <Route path="/explore-coding-courses/app-development" element={<AppDevelopmentCourse />} />
          <Route path="/explore-coding-courses/artificial-intelligence" element={<AICourse />} />
          <Route path="/explore-coding-courses/robotics" element={<RoboticsCourse />} />
          <Route path="/explore-coding-courses/game-development" element={<GameDevelopmentCourse />} />
          <Route path="/explore-coding-courses/data-science" element={<DataScienceCourse />} />
          <Route path="/explore-language-courses/french" element={<FrenchLanguageCourse />} />
          <Route path="/explore-language-courses/spanish" element={<SpanishLanguageCourse />} />
          <Route path="/explore-language-courses/german" element={<GermanCourse />} />
          <Route path="/explore-language-courses/japanese" element={<JapaneseLanguageCourse />} />
          <Route path="/explore-language-courses/IELTS-TOEFL" element={<IELTS_TOEFL_Course />} />
          <Route path="/explore-language-courses/hindi" element={<HindiCourse />} />

          <Route
            path="/courses/:id"
            element={<CourseDetails />}
          />
          <Route
            path="/teachers/:id"
            element={<TeacherProfile />}
          />

          <Route path="/teacher/login" element={<TeacherLogin />} />
          <Route path="/teacher" element={<ProtectedTeacherRoute> <TeacherLayout /> </ProtectedTeacherRoute>}>
            <Route path="dashboard" element={<Availability />} />
            <Route path="students" element={<Students />} />
            <Route path="classes" element={<Classes />} />
            <Route path="earnings" element={<Earnings />} />
            {/* <Route path="availability" element={<Availability />} /> */}
            <Route path="profile" element={<Profile />} />

          </Route>


          <Route path="/admin/login" element={<AdminLogin />} />

          <Route
            path="/admin"
            element={
              <ProtectedAdminRoute>
                <AdminLayout />
              </ProtectedAdminRoute>
            }
          >
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="demo-requests" element={<DemoRequests />} />
            <Route path="teachers" element={<Teachers />} />
            <Route path="teachers/:id" element={<TeacherDetails />} />
            <Route path="students" element={<AdminStudents />} />
            <Route path="classes" element={<AdminClasses />} />
          </Route>
        </Routes>
        {!isTeacherRoute && <Footer />}

      </div>
      {/* <Footer /> */}
    </div>





  );
};

export default App;
