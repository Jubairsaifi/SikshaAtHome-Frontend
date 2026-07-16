import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";

const NavActions = () => {
    const navigate = useNavigate();

    return (
        <div className="hidden lg:flex items-center gap-4">
            <Button
                variant="secondary"
                onClick={() => navigate("/become-a-teacher")}
            >
                Become Teacher
            </Button>

            <Button onClick={() => navigate("/book-a-free-trial")}>
                Book Free Trial
            </Button>
        </div>
    );
};

export default NavActions;