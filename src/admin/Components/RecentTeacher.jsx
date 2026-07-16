import { useEffect, useState } from "react";
import API from "../../api";

const RecentTeachers = () => {
    const [teachers, setTeachers] = useState([]);

    const fetchTeachers = async () => {
        try {
            const { data } = await API.get("/admin/recent-teachers");
            console.log("recent teacher", data);


            if (data.success) {
                setTeachers(data.teachers);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchTeachers();
    }, []);

    return (
        <div className="bg-white rounded-2xl shadow-md p-6">

            <h2 className="text-xl font-bold mb-5">
                Recent Teachers
            </h2>

            <div className="space-y-4">

                {teachers.map((teacher) => (
                    <div
                        key={teacher._id}
                        className="flex items-center justify-between border-b pb-3"
                    >

                        <div>

                            <h3 className="font-semibold text-gray-800">
                                {teacher.name}
                            </h3>

                            <p className="text-sm text-gray-500">
                                {teacher.email}
                            </p>

                        </div>

                        <span className="text-sm text-gray-400">
                            {teacher.country}
                        </span>
                        <span className="text-sm text-gray-400">
                            {teacher.mobile}
                        </span>
                    </div>
                ))}

            </div>

        </div>
    );
};

export default RecentTeachers;