import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";

const TeacherCTA = ({ teacher }) => {
    const navigate = useNavigate();

    return (
        <section className="py-20">

            <div className="mx-auto max-w-5xl rounded-3xl bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-16 text-center text-white">

                <h2 className="text-4xl font-bold">
                    Ready to Learn with {teacher.name}?
                </h2>

                <p className="mt-5 text-lg text-purple-100">
                    Book a free trial class and experience personalized learning.
                </p>

                <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

                    <Button
                        onClick={() => navigate("/book-a-free-trial")}
                    >
                        Book Free Trial
                    </Button>

                    <Button
                        variant="secondary"
                        onClick={() => navigate("/courses")}
                    >
                        Explore Courses
                    </Button>

                </div>

            </div>

        </section>
    );
};

export default TeacherCTA;