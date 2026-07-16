import testimonialData from "./testimonialData";
import TestimonialCard from "./TestimonialCard";


const Testimonials = () => {

    return (

        <section className="
        py-20
        bg-gray-50
        ">

            <div className="
            max-w-7xl
            mx-auto
            px-6
            ">


                <div className="text-center mb-12">

                    <h2 className="
                    text-4xl
                    font-bold
                    text-gray-900
                    ">
                        What Our Students Say
                    </h2>


                    <p className="
                    mt-3
                    text-gray-600
                    ">
                        Trusted by students and parents worldwide
                    </p>

                </div>


                <div className="
                grid
                md:grid-cols-3
                gap-8
                ">

                    {
                        testimonialData.map(item => (

                            <TestimonialCard
                                key={item.id}
                                testimonial={item}
                            />

                        ))
                    }


                </div>


            </div>


        </section>

    )
}


export default Testimonials;