import { FaWallet, FaMoneyBillWave, FaClock, FaUniversity } from "react-icons/fa";
import { transactions } from "../data/earnings";

const Earnings = () => {
  return (
    <div className="space-y-8">

      {/* Header */}
      <div className="flex justify-between items-center">

        <div>
          {/* <h1 className="text-3xl font-bold">
            Earnings
          </h1> */}

          <p className="text-gray-500">
            Track your income.
          </p>
        </div>

        {/* <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl">
          Withdraw Earnings
        </button> */}

      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <FaWallet className="text-blue-600 text-3xl mb-3" />
          <p className="text-gray-500">Total Earnings</p>
          <h2 className="text-3xl font-bold mt-2">₹1,24,500</h2>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <FaMoneyBillWave className="text-green-600 text-3xl mb-3" />
          <p className="text-gray-500">This Month</p>
          <h2 className="text-3xl font-bold mt-2">₹18,600</h2>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <FaClock className="text-yellow-500 text-3xl mb-3" />
          <p className="text-gray-500">Pending</p>
          <h2 className="text-3xl font-bold mt-2">₹3,400</h2>
        </div>

        {/* <div className="bg-white rounded-2xl shadow-lg p-6">
          <FaUniversity className="text-purple-600 text-3xl mb-3" />
          <p className="text-gray-500">Withdrawn</p>
          <h2 className="text-3xl font-bold mt-2">₹1,03,000</h2>
        </div> */}

      </div>

      {/* Placeholder for Chart */}
      <div className="bg-white rounded-2xl shadow-lg p-6">

        <h2 className="text-xl font-bold mb-4">
          Earnings Overview
        </h2>

        <div className="h-72 flex items-center justify-center border-2 border-dashed rounded-xl text-gray-400">
          📈 Monthly Earnings Chart (Coming Soon)
        </div>

      </div>

      {/* Transactions Table */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

        <div className="p-6 border-b">
          <h2 className="text-xl font-bold">
            Recent Transactions
          </h2>
        </div>

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>
              <th className="text-left p-4">Date</th>
              <th className="text-left">Student</th>
              <th className="text-left">Subject</th>
              <th className="text-left">Amount</th>
              <th className="text-left">Status</th>
            </tr>

          </thead>

          <tbody>

            {transactions.map((item) => (

              <tr
                key={item.id}
                className="border-t hover:bg-gray-50"
              >

                <td className="p-4">{item.date}</td>

                <td>{item.student}</td>

                <td>{item.subject}</td>

                <td className="font-semibold">
                  ₹{item.amount}
                </td>

                <td>

                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      item.status === "Paid"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {item.status}
                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default Earnings;