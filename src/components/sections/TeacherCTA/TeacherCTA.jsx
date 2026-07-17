import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const TeacherCTA = () => {

    return (

        <section className="
        py-20
        bg-gradient-to-r
        from-purple-600
        to-purple-700
        ">

            <div className="
            max-w-7xl
            mx-auto
            px-6
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-10
            ">


                {/* Text */}

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >

                    <h2 className="
                    text-4xl
                    font-bold
                    text-white
                    ">
                        Become a Teacher
                        <br />
                        With Siksha At Home
                    </h2>


                    <p className="
                    mt-5
                    text-blue-100
                    text-lg
                    max-w-xl
                    ">
                        Share your knowledge with students worldwide.
                        Create your own schedule and grow your teaching career.
                    </p>


                    <div className="
                    mt-8
                    flex
                    gap-4
                    ">

                        <Link
                            to="/teacher/register"
                            className="
                        bg-white
                        text-blue-600
                        px-7
                        py-3
                        rounded-xl
                        font-semibold
                        hover:bg-gray-100
                        "
                        >
                            Join As Teacher
                        </Link>


                        <Link
                            to="/teachers"
                            className="
                        border
                        border-white
                        text-white
                        px-7
                        py-3
                        rounded-xl
                        font-semibold
                        hover:bg-white
                        hover:text-blue-600
                        "
                        >
                            Learn More
                        </Link>

                    </div>


                </motion.div>



                {/* Right Card */}

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="
                bg-white/10
                backdrop-blur-lg
                rounded-3xl
                p-8
                text-white
                "
                >

                    <h3 className="
                    text-2xl
                    font-semibold
                    ">
                        Why Teach With Us?
                    </h3>


                    <ul className="
                    mt-5
                    space-y-3
                    ">

                        <li>✓ Flexible Timings</li>

                        <li>✓ Global Students</li>

                        <li>✓ Professional Growth</li>

                        <li>✓ Secure Payments</li>

                    </ul>


                </motion.div>



            </div>


        </section>

    )
}


export default TeacherCTA;