const TeacherBadge = ({
    children,
    color = "blue",
}) => {

    const colors = {
        blue: "bg-blue-100 text-blue-700",
        green: "bg-green-100 text-green-700",
        purple: "bg-purple-100 text-purple-700",
        orange: "bg-orange-100 text-orange-700",
    };

    return (
        <span
            className={`
                inline-flex
                items-center
                rounded-full
                px-3
                py-1
                text-xs
                font-semibold
                ${colors[color]}
            `}
        >
            {children}
        </span>
    );
};

export default TeacherBadge;