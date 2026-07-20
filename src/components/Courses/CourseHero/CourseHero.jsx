import { Search } from "lucide-react";
import Container from "../../ui/Container";
import Button from "../../ui/Button";

const CourseHero = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-purple-700 via-indigo-700 to-blue-700 py-24">

            {/* Background Blur */}

            <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>

            <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-pink-400/20 blur-3xl"></div>

            <Container>

                <div className="relative z-10 mx-auto max-w-4xl text-center">

                    <span className="rounded-full bg-white/15 px-5 py-2 text-sm font-medium text-white backdrop-blur">
                        🌍 Learn from Top Educators Worldwide
                    </span>

                    <h1 className="mt-8 text-4xl font-extrabold leading-tight text-white md:text-6xl">
                        Discover Courses
                        <span className="block text-yellow-300">
                            That Shape Your Future
                        </span>
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-purple-100">
                        Explore K-12, Coding, Languages, Olympiads,
                        Competitive Exams and much more from India's
                        best teachers.
                    </p>

                    {/* Search */}

                    <div className="mx-auto mt-10 flex max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl">

                        <div className="flex flex-1 items-center px-5">

                            <Search
                                className="text-slate-400"
                                size={20}
                            />

                            <input
                                type="text"
                                placeholder="Search for Mathematics, Python, IELTS..."
                                className="w-full px-4 py-5 outline-none"
                            />

                        </div>

                        <Button className="rounded-none px-8">
                            Search
                        </Button>

                    </div>

                </div>

            </Container>

        </section>
    );
};

export default CourseHero;