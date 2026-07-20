import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
    {
        question: "Do I get class recordings?",
        answer:
            "Yes. Every live class recording is available for lifetime access.",
    },
    {
        question: "Will I receive study material?",
        answer:
            "Yes. Worksheets, notes, quizzes and assignments are included.",
    },
    {
        question: "Can I switch my batch later?",
        answer:
            "Yes. You can request a batch change depending on availability.",
    },
    {
        question: "Will I get a certificate?",
        answer:
            "Yes. You'll receive a certificate after successfully completing the course.",
    },
    {
        question: "Is this course live or recorded?",
        answer:
            "The course includes live classes along with recorded sessions for revision.",
    },
];

const FAQ = ({ course }) => {
    const [open, setOpen] = useState(0);

    return (
        <section className="rounded-3xl bg-white p-8 shadow-sm">

            <h2 className="text-3xl font-bold text-slate-900">
                Frequently Asked Questions
            </h2>

            <p className="mt-3 text-slate-500">
                Everything you need to know before joining.
            </p>

            <div className="mt-8 space-y-4">

                {course.faqs.map((faq, index) => (

                    <div
                        key={faq.question}
                        className="rounded-2xl border border-slate-200"
                    >

                        <button
                            onClick={() =>
                                setOpen(open === index ? -1 : index)
                            }
                            className="flex w-full items-center justify-between px-6 py-5"
                        >

                            <span className="text-left font-semibold text-slate-900">
                                {faq.question}
                            </span>

                            {open === index ? (
                                <ChevronUp />
                            ) : (
                                <ChevronDown />
                            )}

                        </button>

                        {open === index && (

                            <div className="border-t border-slate-200 px-6 py-5 text-slate-600 leading-7">

                                {faq.answer}

                            </div>

                        )}

                    </div>

                ))}

            </div>

        </section>
    );
};

export default FAQ;