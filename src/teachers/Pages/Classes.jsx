import { useEffect, useState } from "react";
import API from "../../api";

const Classes = () => {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchClasses = async () => {
    try {
      setLoading(true);

      const { data } = await API.get("/teachers/classes");

      if (data.success) {
        setClasses(data.classes || []);
      }
    } catch (error) {
      console.error(
        "Error fetching classes:",
        error.response?.data || error.message
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClasses();
  }, []);

  if (loading) {
    return (
      <div className="p-6 text-gray-500">
        Loading classes...
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800">
          My Classes
        </h1>

        <p className="text-gray-500 mt-2">
          View your assigned classes and schedule.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-6 overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b text-gray-500">
              <th className="pb-4">Class</th>
              <th className="pb-4">Student</th>
              <th className="pb-4">Date</th>
              <th className="pb-4">Time</th>
              <th className="pb-4">Duration</th>
              <th className="pb-4">Status</th>
              <th className="pb-4">Meeting</th>
            </tr>
          </thead>

          <tbody>
            {classes.map((classItem) => (
              <tr
                key={classItem._id}
                className="border-b border-gray-100"
              >
                <td className="py-4">
                  <p className="font-semibold">
                    {classItem.title}
                  </p>
                  <p className="text-sm text-gray-500">
                    {classItem.subject}
                  </p>
                </td>

                <td className="py-4">
                  {classItem.student?.fullName ||
                    classItem.student?.name ||
                    "N/A"}
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
                  {classItem.status}
                </td>

                <td className="py-4">
                  {classItem.meetingLink ? (
                    <a
                      href={classItem.meetingLink}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 bg-pink-600 text-white rounded-lg"
                    >
                      Join
                    </a>
                  ) : (
                    <span className="text-gray-400">
                      No link
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {classes.length === 0 && (
          <p className="text-center py-10 text-gray-500">
            No classes assigned yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default Classes;