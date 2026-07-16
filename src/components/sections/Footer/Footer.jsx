import { Link } from "react-router-dom";
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaLinkedin
} from "react-icons/fa";


const Footer = () => {


    return (

        <footer className="
bg-gray-900
text-gray-300
pt-16
pb-8
">


            <div className="
max-w-7xl
mx-auto
px-6
grid
md:grid-cols-4
gap-10
">


                {/* Brand */}

                <div>

                    <h2 className="
text-2xl
font-bold
text-white
">
                        Siksha At Home
                    </h2>


                    <p className="
mt-4
text-gray-400
leading-relaxed
">

                        Connecting students with expert teachers
                        through personalized online learning.

                    </p>


                </div>



                {/* Quick Links */}

                <div>

                    <h3 className="
text-white
font-semibold
mb-5
">
                        Quick Links
                    </h3>


                    <ul className="
space-y-3
">


                        <li>
                            <Link to="/" className="hover:text-white">
                                Home
                            </Link>
                        </li>


                        <li>
                            <Link to="/courses" className="hover:text-white">
                                Courses
                            </Link>
                        </li>


                        <li>
                            <Link to="/teachers" className="hover:text-white">
                                Teachers
                            </Link>
                        </li>


                        <li>
                            <Link to="/contact" className="hover:text-white">
                                Contact
                            </Link>
                        </li>


                    </ul>


                </div>




                {/* Courses */}

                <div>

                    <h3 className="
text-white
font-semibold
mb-5
">
                        Courses
                    </h3>


                    <ul className="
space-y-3
">

                        <li>Mathematics</li>

                        <li>Science</li>

                        <li>Coding</li>

                        <li>Languages</li>


                    </ul>


                </div>




                {/* Support */}

                <div>

                    <h3 className="
text-white
font-semibold
mb-5
">
                        Support
                    </h3>


                    <ul className="
space-y-3
">

                        <li>
                            Privacy Policy
                        </li>

                        <li>
                            Terms & Conditions
                        </li>

                        <li>
                            Help Center
                        </li>


                    </ul>


                </div>


            </div>



            {/* Bottom */}

            <div className="
border-t
border-gray-700
mt-12
pt-6
max-w-7xl
mx-auto
px-6
flex
flex-col
md:flex-row
justify-between
items-center
gap-5
">


                <p className="
text-sm
">
                    © {new Date().getFullYear()} Siksha At Home. All rights reserved.
                </p>



                <div className="
flex
gap-5
">
                    <FaInstagram
                        size={22}
                        className="cursor-pointer hover:text-white"
                    />

                    <FaYoutube
                        size={22}
                        className="cursor-pointer hover:text-white"
                    />

                    <FaLinkedin
                        size={22}
                        className="cursor-pointer hover:text-white"
                    />

                    <FaFacebook
                        size={22}
                        className="cursor-pointer hover:text-white"
                    />


                </div>


            </div>


        </footer>

    )

}


export default Footer;