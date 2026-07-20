import mathCourse from "../../assets/courses/mathematics.jpg";
import pythonCourse from "../../assets/courses/python.jpg";
import englishCourse from "../../assets/courses/english.jpg";

import teacher1 from "../../assets/teachers/teacher1.jpg";
import teacher2 from "../../assets/teachers/teacher3.jpg";
import teacher3 from "../../assets/teachers/teacher4.jpg";

export const courses = [
    {
        id: 1,
        title: "Complete Mathematics Mastery (Grade 6-10)",
        subtitle: "Learn Mathematics from expert educators through live interactive classes, practice worksheets,quizzes and real-world problem solving.",
        description:
            "This comprehensive Mathematics course is designed to help students master concepts from fundamentals to advanced problem-solving through live interactive sessions, worksheets, quizzes, and doubt-solving.",
        learningPoints: [
            "Master concepts from basics to advanced level.",
            "Solve real-world mathematical problems confidently.",
            "Develop analytical and logical thinking.",
            "Practice with worksheets and assignments.",
            "Prepare for school exams and Olympiads.",
            "Get personalized guidance from expert teachers.",
        ],
        curriculum: [
            {
                title: "Module 1 - Number System",
                duration: "8 Lessons • 5 Hours",
                lessons: [
                    "Introduction",
                    "Natural Numbers",
                    "Whole Numbers",
                    "Integers",
                    "Fractions",
                    "Practice Quiz",
                ],
            },
            {
                title: "Module 2 - Algebra",
                duration: "10 Lessons • 8 Hours",
                lessons: [
                    "Variables",
                    "Expressions",
                    "Equations",
                    "Word Problems",
                    "Practice Worksheet",
                ],
            },
        ],
        faqs: [
            {
                question: "Do I get class recordings?",
                answer:
                    "Yes. Every live class recording is available for lifetime access.",
            },
            {
                question: "Will I receive study material?",
                answer:
                    "Yes. Worksheets, notes, quizzes and assignments are included.",
            },
        ],
        category: "K-12",
        teacher: "Ajay Shehrani",
        teacherId: 1,
        teacherImage: teacher1,
        image: mathCourse,
        rating: 4.9,
        students: "2.4k",
        duration: "6-8 Months",
        price: 4999,
        originalPrice: 7999,
        bestSeller: true,
        expert: "Mathematics expert",
        certificate: true,
        lifetimeAccess: true,
        downloadableResources: true,
    },

    {
        id: 2,
        title: "Python Programming From Scratch",
        subtitle: "Learn Python from expert educators through live interactive classes, practice worksheets,quizzes and real-world problem solving.",
        description:
            "This comprehensive Mathematics course is designed to help students master concepts from fundamentals to advanced problem-solving through live interactive sessions, worksheets, quizzes, and doubt-solving.",
        learningPoints: [
            "Master concepts from basics to advanced level.",
            "Solve real-world mathematical problems confidently.",
            "Develop analytical and logical thinking.",
            "Practice with worksheets and assignments.",
            "Prepare for school exams and Olympiads.",
            "Get personalized guidance from expert teachers.",
        ],
        curriculum: [
            {
                title: "Module 1 - Number System",
                duration: "8 Lessons • 5 Hours",
                lessons: [
                    "Introduction",
                    "Natural Numbers",
                    "Whole Numbers",
                    "Integers",
                    "Fractions",
                    "Practice Quiz",
                ],
            },
            {
                title: "Module 2 - Algebra",
                duration: "10 Lessons • 8 Hours",
                lessons: [
                    "Variables",
                    "Expressions",
                    "Equations",
                    "Word Problems",
                    "Practice Worksheet",
                ],
            },
        ],
        faqs: [
            {
                question: "Do I get class recordings?",
                answer:
                    "Yes. Every live class recording is available for lifetime access.",
            },
            {
                question: "Will I receive study material?",
                answer:
                    "Yes. Worksheets, notes, quizzes and assignments are included.",
            },
        ],
        category: "Coding",
        teacher: "Sarah Wilson",
        teacherImage: teacher2,
        teacherId: 2,
        image: pythonCourse,
        rating: 4.8,
        students: "1.8k",
        duration: "8-9 Months",
        price: 5999,
        originalPrice: 8999,
        bestSeller: true,
        expert: "Coding expert",
        certificate: true,
        lifetimeAccess: true,
        downloadableResources: true,
    },

    {
        id: 3,
        title: "Spoken English & IELTS Preparation",
        subtitle: "Learn English from expert educators through live interactive classes, practice worksheets,quizzes and real-world problem solving.",
        description:
            "This comprehensive Mathematics course is designed to help students master concepts from fundamentals to advanced problem-solving through live interactive sessions, worksheets, quizzes, and doubt-solving.",
        learningPoints: [
            "Master concepts from basics to advanced level.",
            "Solve real-world mathematical problems confidently.",
            "Develop analytical and logical thinking.",
            "Practice with worksheets and assignments.",
            "Prepare for school exams and Olympiads.",
            "Get personalized guidance from expert teachers.",
        ],
        curriculum: [
            {
                title: "Module 1 - Number System",
                duration: "8 Lessons • 5 Hours",
                lessons: [
                    "Introduction",
                    "Natural Numbers",
                    "Whole Numbers",
                    "Integers",
                    "Fractions",
                    "Practice Quiz",
                ],
            },
            {
                title: "Module 2 - Algebra",
                duration: "10 Lessons • 8 Hours",
                lessons: [
                    "Variables",
                    "Expressions",
                    "Equations",
                    "Word Problems",
                    "Practice Worksheet",
                ],
            },
        ],
        faqs: [
            {
                question: "Do I get class recordings?",
                answer:
                    "Yes. Every live class recording is available for lifetime access.",
            },
            {
                question: "Will I receive study material?",
                answer:
                    "Yes. Worksheets, notes, quizzes and assignments are included.",
            },
        ],
        category: "Languages",
        teacher: "Emily Johnson",
        teacherImage: teacher3,
        teacherId: 3,
        image: englishCourse,
        rating: 4.9,
        students: "3.1k",
        duration: "7-9 Months",
        price: 6999,
        originalPrice: 9999,
        bestSeller: false,
        expert: "English expert",
        certificate: true,
        lifetimeAccess: true,
        downloadableResources: true,
    },
];