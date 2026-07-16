import {
  FaHome,
  FaChalkboardTeacher,
  FaUserGraduate,
  FaBook,
  FaCalendarAlt,
  FaMoneyBillWave,
  FaCog,
  FaSignOutAlt,
  FaClipboardList
} from "react-icons/fa";

export const sidebarItems = [
  {
    title: "Dashboard",
    path: "/admin/dashboard",
    icon: FaHome,
  },
   {
    title: "Demo Requests",
    path: "/admin/demo-requests",
    icon: FaClipboardList,
  },
  {
    title: "Teachers",
    path: "/admin/teachers",
    icon: FaChalkboardTeacher,
  },
  {
    title: "Students",
    path: "/admin/students",
    icon: FaUserGraduate,
  },
  {
  title: "Classes",
  path: "/admin/classes",
  icon: FaCalendarAlt,
},
  {
    title: "Courses",
    path: "/admin/courses",
    icon: FaBook,
  },
  // {
  //   title: "Classes",
  //   path: "/admin/classes",
  //   icon: FaCalendarAlt,
  // },
  {
    title: "Earnings",
    path: "/admin/earnings",
    icon: FaMoneyBillWave,
  },
  {
    title: "Settings",
    path: "/admin/settings",
    icon: FaCog,
  },
  {
    title: "Logout",
    path: "/admin/login",
    icon: FaSignOutAlt,
  },
];