import { Link } from "react-router-dom";
import { navigation } from "../../../constants/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
// import { courseMenu } from "../../../constants/navigation";

const MobileMenu = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [courseOpen, setCourseOpen] = useState(false);
    const [loginOpen, setLoginOpen] = useState(false);

    return (
        <div className="lg:hidden">

            {/* Hamburger */}
            <button
                onClick={() => setOpen(true)}
                className="p-2 rounded-lg hover:bg-slate-100"
            >
                <Menu size={28} />
            </button>

            <AnimatePresence>

                {open && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setOpen(false)}
                            className="fixed inset-0 bg-black/40 z-40"
                        />

                        {/* Drawer */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ duration: 0.3 }}
                            className="fixed top-0 right-0 h-screen w-80 bg-white z-50 shadow-xl"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between p-5 border-b">

                                <h2 className="text-xl font-bold">
                                    Menu
                                </h2>

                                <button onClick={() => setOpen(false)}>
                                    <X size={26} />
                                </button>

                            </div>

                            {/* Body */}
                            <div className="p-5 space-y-2">

                                {navigation.map((item) => {

                                    if (item.mega) {
                                        return (
                                            <div key={item.title}>

                                                <button
                                                    onClick={() => setCourseOpen(!courseOpen)}
                                                    className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-slate-700 hover:bg-slate-100"
                                                >
                                                    <span>{item.title}</span>

                                                    {courseOpen ? (
                                                        <ChevronUp size={18} />
                                                    ) : (
                                                        <ChevronDown size={18} />
                                                    )}
                                                </button>

                                                {courseOpen && (
                                                    <div className="ml-5 mt-2 space-y-4">

                                                        <div>
                                                            <p className="font-semibold text-slate-800 mb-2">
                                                                K-12 Courses
                                                            </p>

                                                            {navigation[1].children[0].items.map((course) => (
                                                                <Link
                                                                    key={course.title}
                                                                    to={course.path}
                                                                    onClick={() => setOpen(false)}
                                                                    className="block py-1 text-slate-600 hover:text-purple-600"
                                                                >
                                                                    {course.title}
                                                                </Link>
                                                            ))}
                                                        </div>

                                                        <div>
                                                            <p className="font-semibold text-slate-800 mb-2">
                                                                Coding
                                                            </p>

                                                            {navigation[1].children[1].items.map((course) => (
                                                                <Link
                                                                    key={course.title}
                                                                    to={course.path}
                                                                    onClick={() => setOpen(false)}
                                                                    className="block py-1 text-slate-600 hover:text-purple-600"
                                                                >
                                                                    {course.title}
                                                                </Link>
                                                            ))}
                                                        </div>

                                                        <div>
                                                            <p className="font-semibold text-slate-800 mb-2">
                                                                Languages
                                                            </p>

                                                            {navigation[1].children[2].items.map((course) => (
                                                                <Link
                                                                    key={course.title}
                                                                    to={course.path}
                                                                    onClick={() => setOpen(false)}
                                                                    className="block py-1 text-slate-600 hover:text-purple-600"
                                                                >
                                                                    {course.title}
                                                                </Link>
                                                            ))}
                                                        </div>

                                                    </div>
                                                )}

                                            </div>
                                        );
                                    }

                                    return (
                                        <Link
                                            key={item.title}
                                            to={item.path}
                                            onClick={() => setOpen(false)}
                                            className="block rounded-lg px-4 py-3 text-slate-700 hover:bg-slate-100 hover:text-purple-600 transition"
                                        >
                                            {item.title}
                                        </Link>
                                    );
                                })}
                                <button
                                    onClick={() => setLoginOpen(!loginOpen)}
                                    className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-slate-700 hover:bg-slate-100"
                                >
                                    <span>Login</span>

                                    {loginOpen ? (
                                        <ChevronUp size={18} />
                                    ) : (
                                        <ChevronDown size={18} />
                                    )}
                                </button>

                                {loginOpen && (
                                    <div className="ml-5 mt-2 space-y-4">

                                        <div>
                                            <Link
                                                to="/teacher/login"
                                                onClick={() => setLoginOpen(false)}
                                                className="block py-1 text-slate-600 hover:text-purple-600"
                                            >
                                                Teacher Login
                                            </Link>
                                        </div>

                                        <div>
                                            <Link
                                                to="/student/login"
                                                onClick={() => setLoginOpen(false)}
                                                className="block py-1 text-slate-600 hover:text-purple-600"
                                            >
                                                Student Login
                                            </Link>
                                        </div>
                                    </div>
                                )}


                                <button
                                    onClick={() => {
                                        setOpen(false);
                                        navigate("/book-a-free-trial")
                                    }}
                                    className="mt-6 w-full rounded-xl bg-purple-600 py-3 font-semibold text-white hover:bg-purple-700 transition">
                                    Book Free Trial
                                </button>
                            </div>

                        </motion.div>

                    </>
                )}

            </AnimatePresence>

        </div>
    );
};

export default MobileMenu;