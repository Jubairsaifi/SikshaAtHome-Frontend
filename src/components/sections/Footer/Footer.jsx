// import { Link } from "react-router-dom";
// import {
//     FaFacebook,
//     FaInstagram,
//     FaYoutube,
//     FaLinkedin
// } from "react-icons/fa";


// const Footer = () => {


//     return (

//         <footer className="
// bg-gray-900
// text-gray-300
// pt-16
// pb-8
// ">


//             <div className="
// max-w-7xl
// mx-auto
// px-6
// grid
// md:grid-cols-4
// gap-10
// ">


//                 {/* Brand */}

//                 <div>

//                     <h2 className="
// text-2xl
// font-bold
// text-white
// ">
//                         Siksha At Home
//                     </h2>


//                     <p className="
// mt-4
// text-gray-400
// leading-relaxed
// ">

//                         Connecting students with expert teachers
//                         through personalized online learning.

//                     </p>


//                 </div>



//                 {/* Quick Links */}

//                 <div>

//                     <h3 className="
// text-white
// font-semibold
// mb-5
// ">
//                         Quick Links
//                     </h3>


//                     <ul className="
// space-y-3
// ">


//                         <li>
//                             <Link to="/" className="hover:text-white">
//                                 Home
//                             </Link>
//                         </li>


//                         <li>
//                             <Link to="/courses" className="hover:text-white">
//                                 Courses
//                             </Link>
//                         </li>


//                         <li>
//                             <Link to="/teachers" className="hover:text-white">
//                                 Teachers
//                             </Link>
//                         </li>


//                         <li>
//                             <Link to="/contact" className="hover:text-white">
//                                 Contact
//                             </Link>
//                         </li>


//                     </ul>


//                 </div>




//                 {/* Courses */}

//                 <div>

//                     <h3 className="
// text-white
// font-semibold
// mb-5
// ">
//                         Courses
//                     </h3>


//                     <ul className="
// space-y-3
// ">

//                         <li>Mathematics</li>

//                         <li>Science</li>

//                         <li>Coding</li>

//                         <li>Languages</li>


//                     </ul>


//                 </div>




//                 {/* Support */}

//                 <div>

//                     <h3 className="
// text-white
// font-semibold
// mb-5
// ">
//                         Support
//                     </h3>


//                     <ul className="
// space-y-3
// ">

//                         <li>
//                             Privacy Policy
//                         </li>

//                         <li>
//                             Terms & Conditions
//                         </li>

//                         <li>
//                             Help Center
//                         </li>


//                     </ul>


//                 </div>


//             </div>



//             {/* Bottom */}

//             <div className="
// border-t
// border-gray-700
// mt-12
// pt-6
// max-w-7xl
// mx-auto
// px-6
// flex
// flex-col
// md:flex-row
// justify-between
// items-center
// gap-5
// ">


//                 <p className="
// text-sm
// ">
//                     © {new Date().getFullYear()} Siksha At Home. All rights reserved.
//                 </p>



//                 <div className="
// flex
// gap-5
// ">
//                     <FaInstagram
//                         size={22}
//                         className="cursor-pointer hover:text-white"
//                     />

//                     <FaYoutube
//                         size={22}
//                         className="cursor-pointer hover:text-white"
//                     />

//                     <FaLinkedin
//                         size={22}
//                         className="cursor-pointer hover:text-white"
//                     />

//                     <FaFacebook
//                         size={22}
//                         className="cursor-pointer hover:text-white"
//                     />


//                 </div>


//             </div>


//         </footer>

//     )

// }


// export default Footer;


import { Link } from "react-router-dom";
import {
    quickLinks,
    courses,
    company,
    socials,
} from "./footerData";

import Container from "../../ui/Container";
import Logo from "../../layout/navbar/Logo";

const Footer = () => {
    return (
        <footer className="bg-slate-950 text-white pt-20 pb-8">

            <Container>

                <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-12">

                    {/* Logo */}

                    <div>

                        <Logo />

                        <p className="mt-6 text-slate-400 leading-7">
                            Personalized live online learning for K-12,
                            Coding, Languages and Skill Development.
                        </p>

                        <div className="mt-6 space-y-2 text-slate-300">

                            <p>📞 +91 8630755881</p>

                            <p>✉ support@sikshaathome.com</p>

                            <p>📍 India</p>

                        </div>

                    </div>

                    {/* Quick Links */}

                    <div>

                        <h3 className="font-bold text-lg mb-5">
                            Quick Links
                        </h3>

                        <div className="space-y-3">

                            {quickLinks.map((item) => (

                                <Link
                                    key={item.title}
                                    to={item.href}
                                    className="block text-slate-400 hover:text-white duration-300"
                                >
                                    {item.title}
                                </Link>

                            ))}

                        </div>

                    </div>

                    {/* Courses */}

                    <div>

                        <h3 className="font-bold text-lg mb-5">
                            Courses
                        </h3>

                        <div className="space-y-3">

                            {courses.map((item) => (

                                <Link
                                    key={item.title}
                                    to={item.href}
                                    className="block text-slate-400 hover:text-white"
                                >
                                    {item.title}
                                </Link>

                            ))}

                        </div>

                    </div>

                    {/* Company */}

                    <div>

                        <h3 className="font-bold text-lg mb-5">
                            Company
                        </h3>

                        <div className="space-y-3">

                            {company.map((item) => (

                                <Link
                                    key={item.title}
                                    to={item.href}
                                    className="block text-slate-400 hover:text-white"
                                >
                                    {item.title}
                                </Link>

                            ))}

                        </div>

                    </div>

                    {/* Newsletter */}

                    <div>

                        <h3 className="font-bold text-lg">
                            Newsletter
                        </h3>

                        <p className="text-slate-400 mt-5">
                            Subscribe for latest updates.
                        </p>

                        <input
                            placeholder="Email Address"
                            className="w-full mt-6 rounded-xl px-4 py-3 bg-slate-900 border border-slate-700 outline-none"
                        />

                        <button className="w-full mt-4 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition">
                            Subscribe
                        </button>

                        <div className="flex gap-4 mt-8">

                            {socials.map((item, index) => {

                                const Icon = item.icon;

                                return (

                                    <a
                                        href={item.href}
                                        key={index}
                                        className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center duration-300"
                                    >
                                        <Icon size={18} />
                                    </a>

                                );
                            })}

                        </div>

                    </div>

                </div>

                <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

                    <p className="text-slate-500 text-sm">
                        © 2026 Siksha At Home. All rights reserved.
                    </p>

                    <div className="flex gap-6 text-sm">

                        <Link to="/privacy-policy">Privacy</Link>

                        <Link to="/terms">Terms</Link>

                        <Link to="/child-safety">Child Safety</Link>

                    </div>

                </div>

            </Container>

        </footer>
    );
};

export default Footer;