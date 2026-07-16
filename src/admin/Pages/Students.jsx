import { useEffect, useState } from "react";
import API from "../../api";
import toast from "react-hot-toast";

const AdminStudents = () => {
    const grades = [
        "Nursery",
        "LKG",
        "UKG",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
    ];

    const boards = [
        "CBSE",
        "ICSE",
        "IB",
        "IGCSE",
        "State Board",
    ];

    const countries = [
        "India",
        "UAE",
        "Saudi Arabia",
        "Qatar",
        "Kuwait",
        "Oman",
        "Bahrain",
        "USA",
        "Canada",
        "UK",
    ];

    const subjects = [
        "Mathematics",
        "Science",
        "Physics",
        "Chemistry",
        "Biology",
        "English",
        "Hindi",
        "Social Science",
        "Computer Science",
    ];
    const [students, setStudents] = useState([]);
    const [teachers, setTeachers] = useState([]);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [assigningId, setAssigningId] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [creating, setCreating] = useState(false);

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        grade: "",
        board: "",
        parentName: "",
        parentPhone: "",
        subjects: [],
        assignedTeacher: "",
        country: "",
    });



    const [pagination, setPagination] = useState({
        currentPage: 1,
        totalPages: 1,
        totalStudents: 0,
    });

    const fetchStudents = async () => {
        try {
            setLoading(true);

            const { data } = await API.get("/admin/students", {
                params: {
                    page,
                    limit: 10,
                    search,
                },
            });

            if (data.success) {
                setStudents(data.students);
                setPagination(data.pagination);
            }
        } catch (error) {
            console.error("Error fetching students:", error);
        } finally {
            setLoading(false);
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
                setTeachers(data.teachers);
            }
        } catch (error) {
            console.error("Error fetching teachers:", error);
        }
    };

    useEffect(() => {
        fetchTeachers();
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            fetchStudents();
        }, 400);

        return () => clearTimeout(timer);
    }, [page, search]);

    const handleCreateStudent = async (e) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(formData.email)) {
            toast.error("Please enter a valid email address");
            return;
        }
        if (formData.phone.length !== 10) {
            toast.error("Mobile number must be 10 digits");
            return;
        }
        e.preventDefault();

        try {
            setCreating(true);

            const { data } = await API.post(
                "/admin/students",
                formData
            );

            if (data.success) {
                toast.success("Student created successfully");
                setShowModal(false);

                setFormData({
                    fullName: "",
                    email: "",
                    phone: "",
                    grade: "",
                    board: "",
                    parentName: "",
                    parentPhone: "",
                    subjects: [],
                    assignedTeacher: "",
                    country: "",
                });

                fetchStudents();
            }
        } catch (error) {
            toast.error(
                error.response?.data?.message ||
                "Failed to create student"
            );
        } finally {
            setCreating(false);
        }
    };

    const handleAssignTeacher = async (studentId, teacherId) => {
        if (!teacherId) return;

        try {
            setAssigningId(studentId);

            const { data } = await API.patch(
                `/admin/students/${studentId}/assign-teacher`,
                { teacherId }
            );

            if (data.success) {
                setStudents((prev) =>
                    prev.map((student) =>
                        student._id === studentId
                            ? data.student
                            : student
                    )
                );
            }
        } catch (error) {
            console.error(
                "Error assigning teacher:",
                error.response?.data?.message || error.message
            );
        } finally {
            setAssigningId(null);
        }
    };

    return (
        <div>
            <div className="mb-8">
                <div className="flex justify-between items-center mb-8">

                    <div>
                        <h1 className="text-3xl font-bold text-slate-800">
                            Students
                        </h1>

                        <p className="text-gray-500 mt-2">
                            Manage all students
                        </p>
                    </div>

                    <button
                        onClick={() => setShowModal(true)}
                        className="px-5 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-xl"
                    >
                        + Add Student
                    </button>

                </div>

                {/* <p className="text-gray-500 mt-2">
                    Manage students and assign them to teachers.
                </p> */}
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6">
                <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                            setPage(1);
                        }}
                        placeholder="Search name, email, mobile or grade..."
                        className="w-full md:w-96 px-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-pink-500"
                    />

                    <p className="text-sm text-gray-500">
                        Total Students: {pagination.totalStudents}
                    </p>
                </div>

                {loading ? (
                    <p className="text-center py-10 text-gray-500">
                        Loading students...
                    </p>
                ) : (
                    <>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="border-b text-sm text-gray-500">
                                        <th className="pb-4">Student</th>
                                        <th className="pb-4">Mobile</th>
                                        <th className="pb-4">Grade</th>
                                        <th className="pb-4">Subjects</th>
                                        <th className="pb-4">Assigned Teacher</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {students.map((student) => (
                                        <tr
                                            key={student._id}
                                            className="border-b border-gray-100"
                                        >
                                            <td className="py-4">
                                                <p className="font-semibold text-gray-800">
                                                    {student.fullName}
                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    {student.email}
                                                </p>
                                            </td>

                                            <td className="py-4">
                                                {student.phone || "N/A"}
                                            </td>

                                            <td className="py-4">
                                                {student.grade || "N/A"}
                                            </td>

                                            <td className="py-4">
                                                {student.subjects?.length
                                                    ? student.subjects.join(", ")
                                                    : "N/A"}
                                            </td>

                                            <td className="py-4">
                                                <select
                                                    value={
                                                        student.assignedTeacher?._id || ""
                                                    }
                                                    disabled={assigningId === student._id}
                                                    onChange={(e) =>
                                                        handleAssignTeacher(
                                                            student._id,
                                                            e.target.value
                                                        )
                                                    }
                                                    className="min-w-52 px-3 py-2 border rounded-lg outline-none disabled:opacity-50"
                                                >
                                                    <option value="">
                                                        Select Teacher
                                                    </option>

                                                    {teachers.map((teacher) => (
                                                        <option
                                                            key={teacher._id}
                                                            value={teacher._id}
                                                        >
                                                            {teacher.name}
                                                        </option>
                                                    ))}
                                                </select>

                                                {assigningId === student._id && (
                                                    <p className="text-xs text-gray-500 mt-1">
                                                        Assigning...
                                                    </p>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            {students.length === 0 && (
                                <p className="text-center py-10 text-gray-500">
                                    No students found.
                                </p>
                            )}
                        </div>

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
            {showModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl p-8 max-h-[90vh] overflow-y-auto">

                        <div className="flex justify-between items-center mb-8">
                            <h2 className="text-2xl font-bold">
                                Add New Student
                            </h2>

                            <button
                                onClick={() => setShowModal(false)}
                                className="text-3xl text-gray-500 hover:text-black"
                            >
                                ×
                            </button>
                        </div>

                        <form onSubmit={handleCreateStudent}
                            className="grid grid-cols-2 gap-5">

                            <input
                                placeholder="Student Name *"
                                required
                                value={formData.fullName}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        fullName: e.target.value,
                                    })
                                }
                                className="border rounded-xl px-4 py-3 focus:ring-2 focus:ring-pink-500 outline-none"
                            />

                            <input
                                placeholder="Email *"
                                required
                                type="email"
                                value={formData.email}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        email: e.target.value,
                                    })
                                }
                                className="border rounded-xl px-4 py-3 focus:ring-2 focus:ring-pink-500 outline-none"
                            />

                            <input
                                type="tel"
                                required
                                placeholder="Mobile Number *"
                                value={formData.phone}
                                maxLength={10}
                                onChange={(e) => {
                                    const value = e.target.value.replace(/\D/g, "");

                                    setFormData({
                                        ...formData,
                                        phone: value,
                                    });
                                }}
                                className="border rounded-xl px-4 py-3 focus:ring-2 focus:ring-pink-500 outline-none"
                            />

                            <select
                                value={formData.grade}
                                required
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        grade: e.target.value,
                                    })
                                }
                                className="border rounded-xl px-4 py-3 focus:ring-2 focus:ring-pink-500 outline-none"
                            >
                                <option value="">Select Grade *</option>

                                {grades.map((grade) => (
                                    <option key={grade} value={grade}>
                                        Grade {grade}
                                    </option>
                                ))}
                            </select>

                            <select
                                value={formData.board}
                                required
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        board: e.target.value,
                                    })
                                }
                                className="border rounded-xl px-4 py-3 focus:ring-2 focus:ring-pink-500 outline-none"
                            >
                                <option value="">Select Board *</option>

                                {boards.map((board) => (
                                    <option key={board} value={board}>
                                        {board}
                                    </option>
                                ))}
                            </select>

                            <select
                                value={formData.country}
                                required
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        country: e.target.value,
                                    })
                                }
                                className="border rounded-xl px-4 py-3 focus:ring-2 focus:ring-pink-500 outline-none"
                            >
                                <option value="">Select Country *</option>

                                {countries.map((country) => (
                                    <option key={country} value={country}>
                                        {country}
                                    </option>
                                ))}
                            </select>

                            <input
                                placeholder="Parent Name *"
                                required
                                value={formData.parentName}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        parentName: e.target.value,
                                    })
                                }
                                className="border rounded-xl px-4 py-3 focus:ring-2 focus:ring-pink-500 outline-none"
                            />

                            {/* <input
                                placeholder="Parent Phone"
                                value={formData.parentPhone}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        parentPhone: e.target.value,
                                    })
                                }
                                className="border rounded-xl px-4 py-3"
                            /> */}

                            <div className="col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-3">
                                    Subjects *
                                </label>

                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                    {subjects.map((subject) => (
                                        <label
                                            key={subject}
                                            className="flex items-center gap-2 border rounded-lg px-3 py-2 cursor-pointer hover:bg-pink-50"
                                        >
                                            <input
                                                type="checkbox"
                                                required
                                                checked={formData.subjects.includes(subject)}
                                                onChange={(e) => {
                                                    if (e.target.checked) {
                                                        setFormData({
                                                            ...formData,
                                                            subjects: [...formData.subjects, subject],
                                                        });
                                                    } else {
                                                        setFormData({
                                                            ...formData,
                                                            subjects: formData.subjects.filter(
                                                                (item) => item !== subject
                                                            ),
                                                        });
                                                    }
                                                }}
                                            />

                                            <span>{subject}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                            <select
                                value={formData.assignedTeacher}
                                required
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        assignedTeacher: e.target.value,
                                    })
                                }
                                className="border rounded-xl px-4 py-3 focus:ring-2 focus:ring-pink-500 outline-none"
                            >
                                <option value="">Assign Teacher (Optional)</option>

                                {teachers.map((teacher) => (
                                    <option key={teacher._id} value={teacher._id}>
                                        {teacher.name}
                                    </option>
                                ))}
                            </select>

                            <div className="col-span-2 flex justify-end gap-4 mt-6">

                                <button
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                    className="px-6 py-3 rounded-xl border"
                                >
                                    Cancel
                                </button>

                                <button
                                    type="submit"
                                    disabled={creating}
                                    className="px-8 py-3 rounded-xl bg-pink-600 text-white disabled:opacity-50"
                                >
                                    {creating ? "Creating..." : "Create Student"}
                                </button>

                            </div>

                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminStudents;