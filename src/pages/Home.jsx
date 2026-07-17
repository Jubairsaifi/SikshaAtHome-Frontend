import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/sections/Hero/Hero";
import Features from "../components/sections/Features/Features";
import PopularCourses from "../components/sections/PopularCourses/PopularCourses";
import LearningJourney from "../components/sections/LearningJourney/LearningJourney";
import Testimonials from "../components/sections/Testimonials/Testimonials";
import TeacherCTA from "../components/sections/TeacherCTA/TeacherCTA";
import FAQ from "../components/sections/FAQ/FAQ";
import TrustStats from "../components/sections/TrustStats/TrustStats";
import NumberCounter from "../components/NumberCounter/NumberCounter";
import Banner from "../components/Banner/Banner";
import Img1 from "../assets/banner-child-img-2.jpg";
import Img2 from "../assets/tutor.jpg";
import SubjectCard from "../components/SubjectCard/SubjectCard";
import Testimonial from "../components/Testimonial/Testimonial";
import Footer from "../components/Footer/Footer";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import OurPopularCourses from "../components/PopularCourses/OurPopularCourses";
import OurTeachers from "../components/OurTeachers/OurTeachers";
import CTA from "../components/sections/CTA/CTA";
import TeacherSection from "../components/sections/TalentedTeachers/TeacherSection";

const BannerData = {
  image: Img1,
  tag: "CUSTOMIZE WITH YOUR SCHEDULE",
  title: "Online Tutoring That Adapts to Your Schedule and Needs",
  subtitle:
    "Our personalized professional online tutoring service is designed to fit seamlessly into your schedule. With expert tutors available at flexible times, you can learn at your own pace without compromising on quality. Each session is carefully tailored to your unique needs, ensuring that you understand concepts deeply and build lasting confidence. Whether it’s strengthening fundamentals, excelling in exams, or gaining new skills, our tutors are here to guide you every step of the way—all at the time that works best for you.",
  link: "#",
};

const BannerData2 = {
  image: Img2,
  tag: "CUSTOMIZE WITH YOUR SCHEDULE",
  title: "Expert Tutors Committed to Your Academic Success.",
  subtitle:
    "At Siksha At Home, we take pride in connecting students with talented and highly qualified tutors who are passionate about teaching.Our educators are carefully selected for their expertise, experience, and dedication to student success.Whether it’s school subjects, exam preparation, or skill development, our tutors provide personalized guidance to meet every learner’s unique needs.We ensure that learning is engaging, effective, and results-driven.With the right mentor, every student can achieve their full potential—and that’s exactly what we deliver.",
  link: "#",
};
const Home = () => {
  window.scroll(0, 0)
  return (
    <main className="overflow-x-hidden">
      {/* <Navbar /> */}
      {/* <NavbarBanner /> */}
      <Hero />
      <Features />
      <PopularCourses />
      <LearningJourney />
      <TrustStats />
      {/* <OurPopularCourses /> */}
      {/* <NumberCounter /> */}
      {/* <WhyChooseUs /> */}
      {/* <Banner {...BannerData} />
      <Banner {...BannerData2} reverse={true} /> */}
      <SubjectCard />
      <TeacherSection />
      {/* <OurTeachers /> */}
      {/* <Testimonial /> */}
      <Testimonials />
      <TeacherCTA />
      <FAQ />
      <CTA />
      {/* <Footer /> */}
      {/* <Routes>
         <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes> */}

    </main>
  );
};

export default Home;
