import { Star } from "lucide-react";

const reviews = [
    {
        id: 1,
        name: "Rahul Sharma",
        rating: 5,
        review:
            "Amazing course! The teacher explained every concept very clearly. My maths grades improved significantly.",
    },
    {
        id: 2,
        name: "Emily Watson",
        rating: 5,
        review:
            "Excellent teaching style and interactive classes. Highly recommended for international students.",
    },
    {
        id: 3,
        name: "Aarav Gupta",
        rating: 4,
        review:
            "Very structured curriculum with lots of practice worksheets and doubt sessions.",
    },
];

const Reviews = () => {
    return (
        <section className="rounded-3xl bg-white p-8 shadow-sm">

            <h2 className="text-3xl font-bold text-slate-900">
                Student Reviews
            </h2>

            <p className="mt-3 text-slate-500">
                See what our students say about this course.
            </p>

            <div className="mt-8 space-y-6">

                {reviews.map((review) => (

                    <div
                        key={review.id}
                        className="rounded-2xl border border-slate-200 p-6"
                    >

                        <div className="flex items-center justify-between">

                            <h3 className="font-semibold text-slate-900">
                                {review.name}
                            </h3>

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

                        </div>

                        <p className="mt-4 leading-7 text-slate-600">
                            {review.review}
                        </p>

                    </div>

                ))}

            </div>

        </section>
    );
};

export default Reviews;