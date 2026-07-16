import { NavLink } from "react-router-dom";
import { navigation } from "../../../constants/navigation";
import { ChevronDown } from "lucide-react";

const DesktopMenu = ({ onCourseHover }) => {
    return (
        <ul className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
                <li
                    key={item.title}
                    className="relative"
                    onMouseEnter={() => item.mega && onCourseHover(true)}
                    onMouseLeave={() => item.mega && onCourseHover(false)}
                >
                    {item.mega ? (
                        <button className="flex items-center gap-1 font-medium text-slate-700 hover:text-blue-600 transition">
                            {item.title}
                            <ChevronDown size={18} />
                        </button>
                    ) : (
                        <NavLink
                            to={item.path}
                            className={({ isActive }) =>
                                `font-medium transition ${isActive
                                    ? "text-blue-600"
                                    : "text-slate-700 hover:text-blue-600"
                                }`
                            }
                        >
                            {item.title}
                        </NavLink>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default DesktopMenu;