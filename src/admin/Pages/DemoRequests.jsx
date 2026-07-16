import { useEffect, useState } from "react";
import API from "../../api";

const DemoRequests = () => {
  const [demoRequests, setDemoRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [page, setPage] = useState(1);

  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalRequests: 0,
  });

  const fetchDemoRequests = async () => {
    try {
      setLoading(true);

      const { data } = await API.get("/admin/demo-requests", {
        params: {
          page,
          limit: 10,
          search,
          status: statusFilter,
        },
      });

      if (data.success) {
        setDemoRequests(data.demoRequests);
        setPagination(data.pagination);
      }
    } catch (error) {
      console.error("Error fetching demo requests:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Small delay prevents API call on every keystroke
    const timer = setTimeout(() => {
      fetchDemoRequests();
    }, 400);

    return () => clearTimeout(timer);
  }, [page, search, statusFilter]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setPage(1);
  };

  const handleStatusFilter = (e) => {
    setStatusFilter(e.target.value);
    setPage(1);
  };

  const handleStatusChange = async (id, status) => {
    try {
      const { data } = await API.patch(
        `/admin/demo-requests/${id}/status`,
        { status }
      );

      if (data.success) {
        fetchDemoRequests();
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  return (
    <div>
      <div className="mb-8">
        {/* <h1 className="text-3xl font-bold text-slate-800">
          Demo Requests
        </h1> */}

        <p className="text-gray-500 mt-2">
          Manage all student demo requests.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-6">

        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row gap-4 justify-between mb-6">
          <input
            type="text"
            placeholder="Search by name, email or mobile..."
            value={search}
            onChange={handleSearch}
            className="w-full md:w-96 px-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-pink-500"
          />

          <select
            value={statusFilter}
            onChange={handleStatusFilter}
            className="px-4 py-3 border rounded-xl outline-none"
          >
            <option value="All">All Status</option>
            <option value="Pending">Pending</option>
            <option value="Contacted">Contacted</option>
            <option value="Scheduled">Scheduled</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <p className="text-sm text-gray-500 mb-5">
          Total Requests: {pagination.totalRequests}
        </p>

        {loading ? (
          <p className="text-center py-10 text-gray-500">
            Loading demo requests...
          </p>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b text-sm text-gray-500">
                    <th className="pb-4">Student</th>
                    <th className="pb-4">Parent</th>
                    <th className="pb-4">Subject</th>
                    <th className="pb-4">Mobile</th>
                    <th className="pb-4">Country</th>
                    <th className="pb-4">Date</th>
                    <th className="pb-4">Status</th>
                  </tr>
                </thead>

                <tbody>
                  {demoRequests.map((demo) => (
                    <tr
                      key={demo._id}
                      className="border-b border-gray-100"
                    >
                      <td className="py-4">
                        <p className="font-semibold">{demo.name}</p>
                        <p className="text-sm text-gray-500">
                          {demo.email}
                        </p>
                      </td>

                      <td className="py-4">{demo.parentname}</td>

                      <td className="py-4">
                        {demo.subjects?.join(", ") || "N/A"}
                      </td>

                      <td className="py-4">{demo.mobile}</td>

                      <td className="py-4">{demo.country}</td>

                      <td className="py-4">
                        {new Date(demo.createdAt).toLocaleDateString()}
                      </td>

                      <td className="py-4">
                        <select
                          value={demo.status || "Pending"}
                          onChange={(e) =>
                            handleStatusChange(
                              demo._id,
                              e.target.value
                            )
                          }
                          className="px-3 py-2 border rounded-lg outline-none"
                        >
                          <option value="Pending">Pending</option>
                          <option value="Contacted">Contacted</option>
                          <option value="Scheduled">Scheduled</option>
                          <option value="Completed">Completed</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {demoRequests.length === 0 && (
                <p className="text-center py-10 text-gray-500">
                  No demo requests found.
                </p>
              )}
            </div>

            {/* Pagination */}
            {pagination.totalPages > 1 && (
              <div className="flex items-center justify-between mt-6">
                <button
                  disabled={page === 1}
                  onClick={() => setPage((prev) => prev - 1)}
                  className="px-4 py-2 border rounded-lg disabled:opacity-40"
                >
                  Previous
                </button>

                <p className="text-sm text-gray-600">
                  Page {pagination.currentPage} of{" "}
                  {pagination.totalPages}
                </p>

                <button
                  disabled={page === pagination.totalPages}
                  onClick={() => setPage((prev) => prev + 1)}
                  className="px-4 py-2 bg-pink-600 text-white rounded-lg disabled:opacity-40"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default DemoRequests;