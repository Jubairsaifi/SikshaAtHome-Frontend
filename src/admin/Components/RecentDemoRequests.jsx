import { useEffect, useState } from "react";
import API from "../../api";

const RecentDemoRequests = () => {
    const [demoRequests, setDemoRequests] = useState([]);

    useEffect(() => {
        const fetchDemoRequests = async () => {
            try {
                const { data } = await API.get(
                    "/admin/recent-demo-requests"
                );

                if (data.success) {
                    setDemoRequests(data.demoRequests);
                }
            } catch (error) {
                console.error("Error fetching demo requests:", error);
            }
        };

        fetchDemoRequests();
    }, []);

    const handleStatusChange = async (id, newStatus) => {
        try {
            const { data } = await API.patch(
                `/admin/demo-requests/${id}/status`,
                { status: newStatus }
            );

            if (data.success) {
                setDemoRequests((prev) =>
                    prev.map((demo) =>
                        demo._id === id
                            ? { ...demo, status: data.demoRequest.status }
                            : demo
                    )
                );
            }
        } catch (error) {
            console.error("Error updating status:", error);
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-md p-6 mt-8">
            <h2 className="text-xl font-bold text-gray-800 mb-6">
                Latest Demo Requests
            </h2>

            {demoRequests.length === 0 ? (
                <p className="text-gray-500">
                    No demo requests found.
                </p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-gray-200 text-gray-500 text-sm">
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
                                        <p className="font-semibold text-gray-800">
                                            {demo.name}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            {demo.email}
                                        </p>
                                    </td>

                                    <td className="py-4">
                                        {demo.parentname}
                                    </td>

                                    <td className="py-4">
                                        {demo.subjects?.join(", ") || "N/A"}
                                    </td>

                                    <td className="py-4">
                                        {demo.mobile}
                                    </td>

                                    <td className="py-4">
                                        {demo.country}
                                    </td>

                                    <td className="py-4 text-gray-500">
                                        {new Date(
                                            demo.createdAt
                                        ).toLocaleDateString()}
                                    </td>
                                    <td className="py-4">
                                        <select
                                            value={demo.status || "Pending"}
                                            onChange={(e) =>
                                                handleStatusChange(demo._id, e.target.value)
                                            }
                                            className="px-3 py-2 rounded-lg border border-gray-200 bg-white outline-none"
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
                </div>
            )}
        </div>
    );
};

export default RecentDemoRequests;