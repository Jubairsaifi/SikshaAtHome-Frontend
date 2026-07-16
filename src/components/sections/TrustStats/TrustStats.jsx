import { motion } from "framer-motion";
import {
    Users,
    GraduationCap,
    BookOpen,
    Globe
} from "lucide-react";


const stats = [
    {
        id: 1,
        icon: Users,
        number: "10,000+",
        title: "Students Learning"
    },

    {
        id: 2,
        icon: GraduationCap,
        number: "500+",
        title: "Expert Teachers"
    },

    {
        id: 3,
        icon: BookOpen,
        number: "50+",
        title: "Courses Available"
    },

    {
        id: 4,
        icon: Globe,
        number: "20+",
        title: "Countries Reached"
    }
];


const TrustStats = () => {


    return (

        <section className="
py-16
bg-white
">


            <div className="
max-w-7xl
mx-auto
px-6
">


                <div className="
grid
grid-cols-2
md:grid-cols-4
gap-6
">


                    {
                        stats.map((item, index) => {

                            const Icon = item.icon;


                            return (

                                <motion.div

                                    key={item.id}

                                    initial={{
                                        opacity: 0,
                                        y: 30
                                    }}

                                    whileInView={{
                                        opacity: 1,
                                        y: 0
                                    }}

                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1
                                    }}

                                    viewport={{
                                        once: true
                                    }}

                                    className="
bg-gray-50
rounded-2xl
p-6
text-center
hover:shadow-lg
transition
"


                                >


                                    <div className="
flex
justify-center
mb-4
">


                                        <Icon

                                            size={40}

                                            className="
text-blue-600
"

                                        />


                                    </div>



                                    <h3 className="
text-3xl
font-bold
text-gray-900
">

                                        {item.number}

                                    </h3>



                                    <p className="
mt-2
text-gray-600
">

                                        {item.title}

                                    </p>



                                </motion.div>


                            )

                        })

                    }


                </div>


            </div>


        </section>

    )

}


export default TrustStats;