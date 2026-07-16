import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../../api";

const TeacherDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [teacher, setTeacher] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeacher = async () => {
      try {
        const { data } = await API.get(`/admin/teachers/${id}`);

        if (data.success) {
          setTeacher(data.teacher);
        }
      } catch (error) {
        console.error("Error fetching teacher:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeacher();
  }, [id]);

  if (loading) {
    return (
      <p className="text-center py-10 text-gray-500">
        Loading teacher details...
      </p>
    );
  }

  if (!teacher) {
    return (
      <p className="text-center py-10 text-red-500">
        Teacher not found.
      </p>
    );
  }

  return (
    <div>
      <button
        onClick={() => navigate("/admin/teachers")}
        className="mb-6 text-pink-600 font-medium"
      >
        ← Back to Teachers
      </button>

      <div className="bg-white rounded-2xl shadow-md p-8">
        <div className="border-b pb-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            {teacher.name}
          </h1>

          <p className="text-gray-500 mt-2">
            {teacher.email}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Detail label="Mobile" value={teacher.mobile} />
          <Detail label="Country" value={teacher.country} />
          <Detail
            label="State / Province"
            value={teacher.stateProvince}
          />
          <Detail
            label="WhatsApp Number"
            value={teacher.whatsAppNumber}
          />
          <Detail
            label="Teaching Experience"
            value={teacher.teachingExperience}
          />
          <Detail
            label="Highest Qualification"
            value={teacher.highestQualification}
          />
          <Detail
            label="Subjects"
            value={
              teacher.subjectTeach?.length
                ? teacher.subjectTeach.join(", ")
                : "N/A"
            }
          />
          <Detail
            label="Joined"
            value={
              teacher.createdAt
                ? new Date(teacher.createdAt).toLocaleDateString()
                : "N/A"
            }
          />
        </div>

        <div className="mt-8">
          <h2 className="font-semibold text-gray-800 mb-2">
            Introduction
          </h2>

          <p className="text-gray-600">
            {teacher.introduction || "No introduction available."}
          </p>
        </div>
      </div>
    </div>
  );
};

const Detail = ({ label, value }) => (
  <div>
    <p className="text-sm text-gray-500">{label}</p>
    <p className="font-semibold text-gray-800 mt-1">
      {value || "N/A"}
    </p>
  </div>
);

export default TeacherDetails;