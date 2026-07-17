const TeacherStats = ({
    icon,
    value,
}) => {
    return (
        <div className="flex items-center gap-2 text-sm text-slate-600">

            <span className="text-lg">
                {icon}
            </span>

            <span className="font-medium">
                {value}
            </span>

        </div>
    );
};

export default TeacherStats;