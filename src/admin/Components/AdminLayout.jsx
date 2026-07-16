import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const AdminLayout = () => {
  return (
    <div className="flex">

      <Sidebar />

      <div className="ml-64 flex-1 bg-gray-100 min-h-screen">

        <Topbar />

        <main className="p-8">

          <Outlet />

        </main>

      </div>

    </div>
  );
};

export default AdminLayout;