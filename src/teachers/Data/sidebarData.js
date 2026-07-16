import {
  FaHome,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaWallet,
  FaClock,
  FaUser,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { FaHandHoldingHand } from "react-icons/fa6";

export const sidebarItems = [
  {
    title: "Dashboard",
    icon: FaHome,
    path: "/teacher/dashboard",
  },
  {
    title: "Students",
    icon: FaUserGraduate,
    path: "/teacher/students",
  },
  {
    title: "Classes",
    icon: FaChalkboardTeacher,
    path: "/teacher/classes",
  },
  {
    title: "Earnings",
    icon: FaWallet,
    path: "/teacher/earnings",
  },
//   {
//     title: "Availability",
//     icon: FaClock,
//     path: "/teacher/availability",
//   },
  {
    title: "Profile",
    icon: FaUser,
    path: "/teacher/profile",
  },
  {
    title: "Settings",
    icon: FaCog,
    path: "/teacher/settings",
  },
  {
    title: "Leave",
    icon: FaHandHoldingHand,
    path: "/teacher/leave",
  },
  {
    title: "Logout",
    icon: FaSignOutAlt,
    path: "/teacher/login",
  },
];