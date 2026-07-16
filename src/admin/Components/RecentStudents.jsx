import { useEffect, useState } from "react";
import API from "../../api";

const RecentStudents = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const { data } = await API.get("/admin/recent-students");

        if (data.success) {
          setStudents(data.students);
        }
      } catch (error) {
        console.error("Error fetching recent students:", error);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-5">
        Recent Students
      </h2>

      {students.length === 0 ? (
        <p className="text-gray-500">No students found.</p>
      ) : (
        <div className="space-y-4">
          {students.map((student) => (
            <div
              key={student._id}
              className="flex items-center justify-between border-b border-gray-100 pb-3"
            >
              <div>
                <h3 className="font-semibold text-gray-800">
                  {student.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {student.email}
                </p>
              </div>

              <span className="text-sm text-gray-500">
                {student.grade || "N/A"}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecentStudents;