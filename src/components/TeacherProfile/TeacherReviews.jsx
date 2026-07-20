import { Star } from "lucide-react";

const TeacherReviews = ({ teacher }) => {
    const reviews = teacher.reviews || [];

    return (
        <section className="py-16 bg-slate-50">

            <div className="mx-auto max-w-7xl px-6">

                <h2 className="text-3xl font-bold text-slate-900">
                    What Students Say
                </h2>

                <p className="mt-2 text-slate-500">
                    Reviews from students who learned with {teacher.name}
                </p>

                <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

                    {reviews.map((review, index) => (

                        <div
                            key={index}
                            className="rounded-3xl bg-white p-6 shadow-sm"
                        >

                            <div className="flex">

                                {[...Array(review.rating)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={16}
                                        fill="#FBBF24"
                                        color="#FBBF24"
                                    />
                                ))}

                            </div>

                            <p className="mt-5 leading-7 text-slate-600">
                                "{review.comment}"
                            </p>

                            <h4 className="mt-6 font-semibold text-slate-900">
                                {review.student}
                            </h4>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
};

export default TeacherReviews;