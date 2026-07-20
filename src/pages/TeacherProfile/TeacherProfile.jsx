import { useParams } from "react-router-dom";
import { teachers } from "../../components/sections/TalentedTeachers/teacherData";
import TeacherHero from "../../components/TeacherProfile/TeacherHero";
import TeacherAbout from "../../components/TeacherProfile/TeacherAbout";
import TeacherCourses from "../../components/TeacherProfile/TeacherCourses";
import TeacherReviews from "../../components/TeacherProfile/TeacherReviews";
import TeacherCTA from "../../components/TeacherProfile/TeacherCTA";

const TeacherProfile = () => {
    const { id } = useParams();

    const teacher = teachers.find(
        (item) => item.id === Number(id)
    );

    if (!teacher) {
        return (
            <div className="py-40 text-center text-2xl font-bold">
                Teacher Not Found
            </div>
        );
    }

    return (
        <div>
            <TeacherHero teacher={teacher} />
            <TeacherAbout teacher={teacher} />
            <TeacherCourses teacher={teacher} />
            <TeacherReviews teacher={teacher} />
            <TeacherCTA teacher={teacher} />
        </div>

    );
};

export default TeacherProfile;