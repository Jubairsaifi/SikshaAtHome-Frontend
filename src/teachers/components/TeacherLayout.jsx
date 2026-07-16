import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Outlet } from "react-router-dom";

const TeacherLayout = ({ children }) => {
  return (
    <div className="flex bg-slate-100 min-h-screen">

      <Sidebar />

      <div className="flex-1 ml-64">

        <Topbar />

        <main className="p-8">
          {/* {children} */}
          <Outlet/>
        </main>

      </div>

    </div>
  );
};

export default TeacherLayout;