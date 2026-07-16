import { useEffect, useState } from "react";
import API from "../../api";
import { useNavigate } from "react-router-dom";

const Teachers = () => {
    const navigate = useNavigate();
    const [teachers, setTeachers] = useState([]);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [statusFilter, setStatusFilter] = useState("All");

    const [pagination, setPagination] = useState({
        currentPage: 1,
        totalPages: 1,
        totalTeachers: 0,
    });

    const fetchTeachers = async () => {
        try {
            setLoading(true);

            const { data } = await API.get("/admin/teachers", {
                params: {
                    page,
                    limit: 10,
                    search,
                    status: statusFilter
                },
            });

            if (data.success) {
                setTeachers(data.teachers);
                setPagination(data.pagination);
            }
        } catch (error) {
            console.error("Error fetching teachers:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            fetchTeachers();
        }, 400);

        return () => clearTimeout(timer);
    }, [page, search, statusFilter]);

    const handleSearch = (e) => {
        setSearch(e.target.value);
        setPage(1);
    };

    const handleStatusChange = async (id, status) => {
        try {
            const { data } = await API.patch(
                `/admin/teachers/${id}/status`,
                { status }
            );

            if (data.success) {
                setTeachers((prev) =>
                    prev.map((teacher) =>
                        teacher._id === id
                            ? { ...teacher, status: data.teacher.status }
                            : teacher
                    )
                );
            }
        } catch (error) {
            console.error("Error updating teacher status:", error);
        }
    };

    return (
        <div>
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-slate-800">
                    Teachers
                </h1>

                <p className="text-gray-500 mt-2">
                    Manage all registered teachers.
                </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6">

                {/* Search */}
                <div className="flex justify-between items-center mb-6">
                    <input
                        type="text"
                        value={search}
                        onChange={handleSearch}
                        placeholder="Search name, email, mobile or country..."
                        className="w-full md:w-96 px-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-pink-500"
                    />
                    {/* <select
                        value={statusFilter}
                        onChange={(e) => {
                            setStatusFilter(e.target.value);
                            setPage(1);
                        }}
                        className="px-4 py-3 border rounded-xl outline-none"
                    >
                        <option value="All">All Status</option>
                        <option value="Pending">Pending</option>
                        <option value="Approved">Approved</option>
                        <option value="Rejected">Rejected</option>
                    </select> */}

                    <p className="hidden md:block text-sm text-gray-500">
                        Total Teachers: {pagination.totalTeachers}
                    </p>
                </div>

                {loading ? (
                    <p className="text-center py-10 text-gray-500">
                        Loading teachers...
                    </p>
                ) : (
                    <>
                        {/* Table */}
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="border-b text-sm text-gray-500">
                                        <th className="pb-4">Teacher</th>
                                        <th className="pb-4">Mobile</th>
                                        <th className="pb-4">Country</th>
                                        <th className="pb-4">Experience</th>
                                        <th className="pb-4">Subjects</th>
                                        <th className="pb-4">Joined</th>
                                        <th className="pb-4">Action</th>
                                        <th className="pb-4">Status</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {teachers.map((teacher) => (
                                        <tr
                                            key={teacher._id}
                                            className="border-b border-gray-100"
                                        >
                                            <td className="py-4">
                                                <p className="font-semibold text-gray-800">
                                                    {teacher.name}
                                                </p>

                                                <p className="text-sm text-gray-500">
                                                    {teacher.email}
                                                </p>
                                            </td>

                                            <td className="py-4">
                                                {teacher.mobile || "N/A"}
                                            </td>

                                            <td className="py-4">
                                                {teacher.country || "N/A"}
                                            </td>

                                            <td className="py-4">
                                                {teacher.teachingExperience || "N/A"}
                                            </td>

                                            <td className="py-4">
                                                {teacher.subjectTeach?.length > 0
                                                    ? teacher.subjectTeach.join(", ")
                                                    : "N/A"}
                                            </td>

                                            <td className="py-4 text-gray-500">
                                                {teacher.createdAt
                                                    ? new Date(
                                                        teacher.createdAt
                                                    ).toLocaleDateString()
                                                    : "N/A"}
                                            </td>

                                            <td className="py-4">
                                                <button
                                                    onClick={() => navigate(`/admin/teachers/${teacher._id}`)}
                                                    className="px-4 py-2 bg-pink-50 text-pink-600 rounded-lg hover:bg-pink-100 transition"
                                                >
                                                    View
                                                </button>
                                            </td>
                                            <td className="py-4">
                                                <select
                                                    value={teacher.status || "Pending"}
                                                    onChange={(e) =>
                                                        handleStatusChange(teacher._id, e.target.value)
                                                    }
                                                    className="px-3 py-2 border rounded-lg outline-none"
                                                >
                                                    <option value="Pending">Pending</option>
                                                    <option value="Approved">Approved</option>
                                                    <option value="Rejected">Rejected</option>
                                                </select>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            {teachers.length === 0 && (
                                <p className="text-center py-10 text-gray-500">
                                    No teachers found.
                                </p>
                            )}
                        </div>

                        {/* Pagination */}
                        {pagination.totalPages > 1 && (
                            <div className="flex items-center justify-between mt-6">
                                <button
                                    disabled={page === 1}
                                    onClick={() => setPage((prev) => prev - 1)}
                                    className="px-4 py-2 border rounded-lg disabled:opacity-40"
                                >
                                    Previous
                                </button>

                                <p className="text-sm text-gray-600">
                                    Page {pagination.currentPage} of{" "}
                                    {pagination.totalPages}
                                </p>

                                <button
                                    disabled={page === pagination.totalPages}
                                    onClick={() => setPage((prev) => prev + 1)}
                                    className="px-4 py-2 bg-pink-600 text-white rounded-lg disabled:opacity-40"
                                >
                                    Next
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default Teachers;