import { students } from "../data/students";
import { FaSearch, FaPlus } from "react-icons/fa";
import { useEffect, useState } from "react";
import  API  from "../../api"

const Students = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStudents();
  }, []);


  const fetchStudents = async () => {
    try {
      const { data } = await API.get("/students");
      console.log("stundet Data", data);
      
      setStudents(data.students);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h2>Loading Students...</h2>;
  }

  return (
    <div className="space-y-8">

      {/* Header */}
      <div className="flex justify-between items-center">

        <div>
          {/* <h1 className="text-3xl font-bold">
            Students
          </h1> */}

          <p className="text-gray-500">
            Your enrolled students
          </p>
        </div>

        {/* <button className="bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700 flex items-center gap-2">
          <FaPlus />
          Add Student
        </button> */}

      </div>

      {/* Search */}
      <div className="bg-white rounded-xl shadow p-5">

        <div className="relative max-w-md">

          <FaSearch className="absolute top-4 left-4 text-gray-400" />

          <input
            placeholder="Search student..."
            className="w-full border rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>

      </div>

      {/* Table */}

      <div className="bg-white rounded-2xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>

              <th className="p-4 text-left">Student</th>

              <th className="text-left">Grade</th>

              <th className="text-left">Subject</th>

              <th className="text-left">Status</th>

              <th className="text-center">Action</th>

            </tr>

          </thead>

          <tbody>

            {students.map((student) => (

              <tr
                key={student.id}
                className="border-t hover:bg-slate-50"
              >

                <td className="p-4">

                  <div className="flex items-center gap-4">

                    {/* <img
                      src={student.image}
                      alt={student.name}
                      className="w-12 h-12 rounded-full"
                    /> */}

                    <div>

                      <h3 className="font-semibold">
                        {student.fullName}
                      </h3>

                    </div>

                  </div>

                </td>

                <td>{student.grade}</td>

                <td>{student.subjects}</td>

                <td>

                  <span
                    className={`px-3 py-1 rounded-full text-sm ${student.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                      }`}
                  >
                    {student.status}
                  </span>

                </td>

                <td className="text-center">

                  <button className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700">
                    View
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default Students;