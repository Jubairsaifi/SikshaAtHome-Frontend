import { NavLink } from "react-router-dom";
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

                            <p>✉ support@MathLead.com</p>

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
                                <NavLink
                                    key={item.title}
                                    to={item.link}
                                    className="block text-slate-400 hover:text-white duration-300"
                                >
                                    {item.title}
                                </NavLink>

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

                                <NavLink
                                    key={item.title}
                                    to={item.link}
                                    className="block text-slate-400 hover:text-white"
                                >
                                    {item.title}
                                </NavLink>

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

                                <NavLink
                                    key={item.title}
                                    to={item.link}
                                    className="block text-slate-400 hover:text-white"
                                >
                                    {item.title}
                                </NavLink>

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
                        © 2026 Math Lead. All rights reserved.
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