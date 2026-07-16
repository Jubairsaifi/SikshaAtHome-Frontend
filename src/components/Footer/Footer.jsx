import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { MdComputer, MdEmail, MdPhone } from "react-icons/md";
import FooterImg from "../../assets/footer.jpg";
import { motion } from "framer-motion";
import SikshaLogo from "../../assets/siksha-logo.png"

const FooterBg = {
  backgroundImage: `url(${FooterImg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "bottom center",
};

const Footer = () => {
  return (
    <div className="rounded-t-3xl">
      <div className="bg-black text-white">
        <div className="container">
          <div className="grid md:grid-cols-4 md:gap-4 py-5 border-t-2 border-gray-300/10 text-gray-300
">
            {/* brand info section */}
            <div className="py-8 px-4 space-y-4">
              <div className="text-2xl flex items-center gap-2 font-bold uppercase">
                {/* <MdComputer className="text-secondary text-4xl" /> */}
                <motion.img
                  src={SikshaLogo}
                  alt=""
                  className="w-[40px] md:w-[40px] xl:w-[40px]"
                />
                <p className="text-lg text-sky-600 whitespace-nowrap">
                  Siksha At Home
                </p>
              </div>
              <div className="text-left text-sm text-white leading-relaxed">
                At <span className="font-bold">Siksha At Home</span>, we believe that learning should be simple,
                accessible, and empowering. Our mission is to bring quality education to every home,
                breaking the barriers of location, time, and resources.
                <br /><br />
                We are more than just an online learning platform — we are a community of passionate
                educators, curious learners, and supportive parents, all working together to make
                education engaging and meaningful.
              </div>
              <hr className="h-1 bg-black my-5" ></hr>
              <div className="flex items-center justify-start gap-5 !mt-6 text-gray-300 hover:scale-110 transition">
                <a href="#" className="text-grey-100 duration-200">
                  <HiLocationMarker className="text-3xl" />
                </a>
                <a href="#" className="text-secondary duration-200">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#" className="text-pink-700 duration-200">
                  <FaInstagram className="text-3xl " />
                </a>

                <a href="#" className="text-secondary duration-200">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
              <div className="text-sm text-gray-400">Sec 3, Noida, India</div>
            </div>
            {/* Footer Links  */}
            <div className="grid grid-cols-2 md:grid-cols-3 md:col-span-3 md:ml-14">
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-5 text-yellow-600">
                  Company
                </h1>
                <ul className="flex flex-col gap-3">
                  <li>
                    <a href="/about-us" className="hover:text-secondary duration-200">
                      About us
                    </a>
                  </li>
                  <li>
                    <a href="/contact-us" className="hover:text-secondary duration-200">
                      Contact us
                    </a>
                  </li>
                  <li>
                    <a href="/blog" className="hover:text-secondary duration-200">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="/child-safety" className="hover:text-secondary duration-200">
                      Child Safety
                    </a>
                  </li>
                  <li>
                    <a href="/whyShikshaAtHome" className="hover:text-secondary duration-200">
                      Why Sikhsha At Home
                    </a>
                  </li>
                </ul>
              </div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-5 text-yellow-600">
                  Resources
                </h1>
                <ul className="flex flex-col gap-3">
                  <li>
                    <a href="#" className="hover:text-secondary duration-200">
                      Courses
                    </a>
                  </li>
                  <li>
                    <a href="/teacher-Registration" className="hover:text-secondary duration-200">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="/sign-in" className="hover:text-secondary duration-200">
                      Login
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-secondary duration-200">
                      Term-Condition
                    </a>
                  </li>
                </ul>
              </div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-5 text-yellow-600">
                  Company
                </h1>
                <ul className="flex flex-col gap-3">
                  <li>
                    <a href="/" className="hover:text-secondary duration-200">
                      Our Story
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-secondary duration-200">
                      Awards
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-secondary duration-200">
                      Team
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-secondary duration-200">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-secondary duration-200">
                      Meet the Experts
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-secondary duration-200">
                      Join Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-secondary duration-200">
                      Blogs
                    </a>
                  </li>
                </ul>
              </div>


              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-5 text-yellow-600">
                  Policies
                </h1>
                <ul className="flex flex-col gap-3">
                  <li>
                    <a href="/" className="hover:text-secondary duration-200">
                      Terms and Conditions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-secondary duration-200">
                      Refund and Cancellation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-secondary duration-200">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-secondary duration-200">
                      Vendor Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-secondary duration-200">
                      Vendor Terms and Conditions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-secondary duration-200">
                      Disclaimer
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* copyright section  */}
          <div className="mt-8">
            <div className="text-center py-6 border-t border-gray-700 text-gray-300 space-y-2">
              <div className="flex items-center space-x-2">
                <MdPhone /><p className="font-medium">+91-7055798195, +91-8630755881</p>
              </div>
              <div className="flex items-center space-x-2">
                <MdEmail /> <p className="font-medium">care@sikshaAtHome.com </p>
              </div>
              <span className="text-sm text-gray-500">
                {" "}
                @copyright 2026 Siksha At Home. All Right Reserved
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
