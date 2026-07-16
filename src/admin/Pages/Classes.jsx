import { useEffect, useState } from "react";
import API from "../../api";

const AdminClasses = () => {
    const [classes, setClasses] = useState([]);
    const [status, setStatus] = useState("All");
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [students, setStudents] = useState([]);
    const [creating, setCreating] = useState(false);
    const [teachers, setTeachers] = useState([]);

    const [formData, setFormData] = useState({
        title: "",
        student: "",
        teacher: "",
        subject: "",
        classDate: "",
        startTime: "",
        duration: 60,
        meetingLink: "",
        notes: "",
    });

    const [pagination, setPagination] = useState({
        currentPage: 1,
        totalPages: 1,
        totalClasses: 0,
    });

    const fetchClasses = async () => {
        try {
            setLoading(true);

            const { data } = await API.get("/admin/classes", {
                params: {
                    page,
                    limit: 10,
                    status,
                },
            });

            if (data.success) {
                setClasses(data.classes);
                setPagination(data.pagination);
            }
        } catch (error) {
            console.error("Error fetching classes:", error);
        } finally {
            setLoading(false);
        }
    };

    const fetchStudents = async () => {
        try {
            const { data } = await API.get("/admin/students", {
                params: {
                    page: 1,
                    limit: 100,
                },
            });
            console.log("STUDENTS API RESPONSE:", data);


            if (data.success) {
                console.log("STUDENTS:", data.students);
                setStudents(data.students);
            }
        } catch (error) {
            console.error("Error fetching students:", error);
        }
    };
    const fetchTeachers = async () => {
        try {
            const { data } = await API.get("/admin/teachers", {
                params: {
                    page: 1,
                    limit: 100,
                    status: "Approved",
                },
            });

            if (data.success) {
                setTeachers(data.teachers || []);
            }
        } catch (error) {
            console.error("Error fetching teachers:", error);
        }
    };

    useEffect(() => {
        fetchStudents();
        fetchTeachers();
    }, []);

    useEffect(() => {
        fetchClasses();
    }, [page, status]);

    const handleCreateClass = async (e) => {
        e.preventDefault();

        if (!formData.teacher) {
            alert("Selected student does not have an assigned teacher.");
            return;
        }

        try {
            setCreating(true);

            const { data } = await API.post(
                "/admin/classes",
                formData
            );

            if (data.success) {
                setShowModal(false);

                setFormData({
                    title: "",
                    student: "",
                    teacher: "",
                    subject: "",
                    classDate: "",
                    startTime: "",
                    duration: 60,
                    meetingLink: "",
                    notes: "",
                });

                fetchClasses();
            }
        } catch (error) {
            alert(
                error.response?.data?.message ||
                "Failed to create class"
            );
        } finally {
            setCreating(false);
        }
    };

    const handleStudentChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            student: e.target.value,
        }));
    };

    return (
        <div>
            <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-slate-800">
                        Classes
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Schedule and manage all classes.
                    </p>
                </div>

                <button
                    onClick={() => setShowModal(true)}
                    className="px-3 py-1 bg-pink-600 text-white rounded-xl hover:bg-pink-700"
                >
                    Create Class
                </button>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6">
                <div className="flex justify-between items-center mb-6">
                    <select
                        value={status}
                        onChange={(e) => {
                            setStatus(e.target.value);
                            setPage(1);
                        }}
                        className="px-4 py-3 border rounded-xl outline-none"
                    >
                        <option value="All">All Status</option>
                        <option value="Scheduled">Scheduled</option>
                        <option value="Completed">Completed</option>
                        <option value="Cancelled">Cancelled</option>
                    </select>

                    <p className="text-sm text-gray-500">
                        Total Classes: {pagination.totalClasses}
                    </p>
                </div>

                {loading ? (
                    <p className="text-center py-10 text-gray-500">
                        Loading classes...
                    </p>
                ) : (
                    <>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="border-b text-sm text-gray-500">
                                        <th className="pb-4">Class</th>
                                        <th className="pb-4">Student</th>
                                        <th className="pb-4">Teacher</th>
                                        <th className="pb-4">Date</th>
                                        <th className="pb-4">Time</th>
                                        <th className="pb-4">Duration</th>
                                        <th className="pb-4">Status</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {classes.map((classItem) => (
                                        <tr
                                            key={classItem._id}
                                            className="border-b border-gray-100"
                                        >
                                            <td className="py-4">
                                                <p className="font-semibold text-gray-800">
                                                    {classItem.title}
                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    {classItem.subject}
                                                </p>
                                            </td>

                                            <td className="py-4">
                                                {classItem.student?.fullName || "N/A"}
                                            </td>

                                            <td className="py-4">
                                                {classItem.teacher?.name || "N/A"}
                                            </td>

                                            <td className="py-4">
                                                {new Date(
                                                    classItem.classDate
                                                ).toLocaleDateString()}
                                            </td>

                                            <td className="py-4">
                                                {classItem.startTime}
                                            </td>

                                            <td className="py-4">
                                                {classItem.duration} mins
                                            </td>

                                            <td className="py-4">
                                                <span className="px-3 py-1 rounded-full bg-gray-100 text-sm">
                                                    {classItem.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            {classes.length === 0 && (
                                <p className="text-center py-10 text-gray-500">
                                    No classes found.
                                </p>
                            )}
                        </div>

                        {pagination.totalPages > 1 && (
                            <div className="flex justify-between items-center mt-6">
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
            {showModal && (
                <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
                    <div className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl p-6">

                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold text-gray-800">
                                Create New Class
                            </h2>

                            <button
                                onClick={() => setShowModal(false)}
                                className="text-2xl text-gray-500"
                            >
                                ×
                            </button>
                        </div>

                        <form
                            onSubmit={handleCreateClass}
                            className="grid md:grid-cols-2 gap-5"
                        >
                            <input
                                required
                                type="text"
                                placeholder="Class Title"
                                value={formData.title}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        title: e.target.value,
                                    })
                                }
                                className="px-4 py-3 border rounded-xl"
                            />

                            <select
                                required
                                value={formData.student}
                                onChange={handleStudentChange}
                                className="px-4 py-3 border rounded-xl"
                            >
                                <option value="">Select Student</option>

                                {students.map((student) => (
                                    <option
                                        key={student._id}
                                        value={student._id}
                                    >
                                        {student.fullName} - {student.grade || "No Grade"}
                                    </option>
                                ))}
                            </select>

                            <div>
                                <label className="text-sm text-gray-500">
                                    Assigned Teacher
                                </label>

                                <select
                                    required
                                    value={formData.teacher}
                                    onChange={(e) =>
                                        setFormData((prev) => ({
                                            ...prev,
                                            teacher: e.target.value,
                                        }))
                                    }
                                    className="px-4 py-3 border rounded-xl"
                                >
                                    <option value="">Select Teacher</option>

                                    {teachers.map((teacher) => (
                                        <option key={teacher._id} value={teacher._id}>
                                            {teacher.name}
                                            {teacher.subjectTeach?.length
                                                ? ` - ${teacher.subjectTeach.join(", ")}`
                                                : ""}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <input
                                required
                                type="text"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        subject: e.target.value,
                                    })
                                }
                                className="px-4 py-3 border rounded-xl"
                            />

                            <input
                                required
                                type="date"
                                value={formData.classDate}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        classDate: e.target.value,
                                    })
                                }
                                className="px-4 py-3 border rounded-xl"
                            />

                            <input
                                required
                                type="time"
                                value={formData.startTime}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        startTime: e.target.value,
                                    })
                                }
                                className="px-4 py-3 border rounded-xl"
                            />

                            <input
                                required
                                type="number"
                                min="15"
                                value={formData.duration}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        duration: Number(e.target.value),
                                    })
                                }
                                className="px-4 py-3 border rounded-xl"
                                placeholder="Duration"
                            />

                            <input
                                type="url"
                                placeholder="Meeting Link"
                                value={formData.meetingLink}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        meetingLink: e.target.value,
                                    })
                                }
                                className="px-4 py-3 border rounded-xl"
                            />

                            <textarea
                                placeholder="Class Notes"
                                value={formData.notes}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        notes: e.target.value,
                                    })
                                }
                                className="md:col-span-2 px-4 py-3 border rounded-xl"
                            />

                            <button
                                type="submit"
                                disabled={creating}
                                className="md:col-span-2 py-3 bg-pink-600 text-white rounded-xl disabled:opacity-50"
                            >
                                {creating ? "Creating..." : "Create Class"}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminClasses;