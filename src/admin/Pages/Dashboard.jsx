import DashboardCard from "../components/DashboardCard";
import API from "../../api";
import { useEffect, useState } from "react";
import RecentTeachers from "../Components/RecentTeacher";
import RecentStudents from "../Components/RecentStudents";
import RecentDemoRequests from "../components/RecentDemoRequests";

import {
    FaChalkboardTeacher,
    FaUserGraduate,
    FaBook,
    FaRupeeSign,
} from "react-icons/fa";

const AdminDashboard = () => {
    const [stats, setStats] = useState({
        totalTeachers: 0,
        totalStudents: 0,
        totalCourses: 0,
        totalRevenue: 0,
    });

    const [loading, setLoading] = useState(true);

    const fetchDashboardStats = async () => {
        try {
            const { data } = await API.get("/admin/dashboard");

            if (data.success) {
                setStats(data.stats);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDashboardStats();
    }, []);

    if (loading) {
        return (
            <div className="text-center text-xl font-semibold mt-20">
                Loading Dashboard...
            </div>
        );
    }
    return (
        <div>

            <div className="mb-8">
                {/* <h1 className="text-3xl font-bold text-slate-800">
                    Dashboard
                </h1> */}

                <p className="text-gray-500 mt-2">
                    Here's what's happening today.
                </p>
            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 ">

                <DashboardCard
                    title="Teachers"
                    value={stats.totalTeachers}
                    icon={<FaChalkboardTeacher />}
                    bgColor="from-pink-500 to-pink-600"
                />

                <DashboardCard
                    title="Students"
                    value={stats.totalStudents}
                    icon={<FaUserGraduate />}
                    bgColor="from-pink-500 to-pink-600"
                />

                <DashboardCard
                    title="Courses"
                    value={stats.totalCourses}
                    icon={<FaBook />}
                    bgColor="from-pink-500 to-pink-600"
                />

                <DashboardCard
                    title="Revenue"
                    value={stats.totalRevenue}
                    icon={<FaRupeeSign />}
                    bgColor="from-pink-500 to-pink-600"
                />

            </div>

            <div className="grid lg:grid-cols-2 gap-6 mt-8">

                <RecentTeachers />
                <RecentStudents/>

            </div>
            <RecentDemoRequests/>

        </div>
    );
};

export default AdminDashboard;