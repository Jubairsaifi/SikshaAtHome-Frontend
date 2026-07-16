import React from "react";
import { NavbarMenu } from "../../mockData/data.js";
import { MdMenu } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { motion } from "framer-motion";
import ResponsiveMenu from "./ResponsiveMenu.jsx";
import SikshaLogo from "../../assets/siksha-logo.png"
import { HiChevronDown } from "react-icons/hi";
import { Link } from "react-router-dom";
import DemoBookingModal from "../DemoBooking/BookDemo.jsx";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [loginDropdownOpen, setLoginDropdownOpen] = React.useState(false);
  const handleItemClick = (title, link) => {
    if (title === "Book Your Demo") {
      setDropdownOpen(false);
      setIsOpen(true);
    }
    if (title === "Become A Teacher") {
      setDropdownOpen(false);
      navigate(link);

    }
    if (title === "k-12 Courses") {
      setDropdownOpen(false);
      navigate(link);
    }
    if (title === "Coding Courses") {
      setDropdownOpen(false);
      navigate(link);
    }
    if (title === "Language Courses") {
      setDropdownOpen(false);
      navigate(link);
    }
    if (title === "English Speaking") {
      setDropdownOpen(false);
      navigate(link);
    }
  };
  const bookAFreeTrial = () => {
    navigate("/book-a-free-trial")
  }
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="fixed top-0 left-0 w-full z-50 bg-white shadow-ms"
      >
        <div className="container flex justify-between items-center py-6 pr-8">
          {/* Logo section */}
          <div className="text-xl flex items-center font-bold -ml-16">
            <motion.img
              src={SikshaLogo}
              alt=""
              className="w-[40px] md:w-[40px] xl:w-[40px]"
            />
            <p className="ml-1 text-sky-600 ">Siksha At Home</p>
          </div>

          {/* Menu section */}
          <div className="hidden lg:block ml-6">
            <ul className="flex items-center">
              {NavbarMenu.map((item) => {
                return (
                  <li key={item.id} className="relative group">
                    {item.id === 2 || item.id === 3 ? (
                      <>
                        <button
                          // onClick={() => setDropdownOpen(!dropdownOpen)}
                          className="flex items-center gap-1 text-black-600 text-sm xl:text-base py-1 px-2 xl:px-3 hover:text-secondary transition-all duration-300 "
                        >
                          {item.title}
                          <HiChevronDown className="text-base transition-transform duration-300 group-hover:rotate-180" />
                        </button>

                        {/* Dropdown Menu */}
                        {true && (
                          <ul className="absolute left-0 top-full w-60 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2 z-50">
                            {Array.isArray(item.options) && item.options.map((opt, index) => {
                              return (
                                <li key={index} className="block px-4 py-2 text-black-600 hover:bg-gray-100 hover:text-secondary transition-all duration-300">
                                  <button
                                    onClick={() => handleItemClick(opt.title, opt.link)}
                                  >
                                    <div className="flex flex-col">
                                      <span className="text-sm">{opt.title}</span>
                                      <span className="text-left text-xs text-orange-500">{opt.class}</span>
                                    </div>
                                  </button>
                                </li>
                              );
                            })}

                          </ul>
                        )
                        }
                        <DemoBookingModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
                      </>
                    ) : (
                      <a
                        href={item.link}
                        className="inline-block text-black-600 text-sm xl:text-base py-1 px-2 xl:px-3 hover:text-secondary transition-all"
                      >
                        {item.title}
                      </a>
                    )}
                  </li>
                );
              })}

            </ul>
          </div>
          {/* CTA Button section */}
          <div className="hidden lg:block relative">
            <div className="flex items-center">
              <div className="flex items-center gap-2 underline underline-offset-4 decoration-2 decoration-black-500">
                <MdPhone className="text-xl" />
                <p >+91-8630755881</p>
              </div>
              {/* <MdPhone className="text-xl" /><p className="font-medium">+91-7055798195</p> */}
              <button className="ml-8 bg-gradient-to-r from-pink-500 to-purple-500 
              text-white  rounded-lg px-4 py-2 flex items-center gap-2"
                onClick={() => bookAFreeTrial()}
              > Book a Free Trial</button>
            </div>
          </div>
          {/* Mobile Hamburger Menu */}
          <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            <MdMenu className="text-4xl" />
          </div>
        </div>
      </motion.div>

      {/* mobile Sidebar section */}
      <ResponsiveMenu isOpen={isOpen} />
    </>
  );
};

export default Navbar;
