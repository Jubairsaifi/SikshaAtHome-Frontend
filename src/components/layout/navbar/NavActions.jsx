import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import Button from "../../ui/Button";

const NavActions = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    return (
        <div className="hidden lg:flex items-center gap-4">
            <Button onClick={() => navigate("/book-a-free-trial")}>
                Book Free Trial
            </Button>

            <div
                className="relative"
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
            >
                <Button variant="ghost"
                    className="flex items-center gap-2">
                    <span>Login</span>
                    <ChevronDown size={12} />
                </Button>

                {open && (
                    <div className="absolute right-0 top-full w-52 rounded-xl border border-slate-200 bg-white shadow-xl overflow-hidden">

                        <button
                            onClick={() => navigate("/teacher/login")}
                            className="block w-full px-5 py-3 text-center hover:bg-slate-50 transition"
                        >
                            Teacher Login

                        </button>

                        <button
                            onClick={() => navigate("/student/login")}
                            className="block w-full px-5 py-3 text-center hover:bg-slate-50 transition"
                        >
                            Student Login
                        </button>

                    </div>
                )}
            </div>

        </div>
    );
};

export default NavActions;