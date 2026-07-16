import AvailabilityCalendar from "../components/AvailabilityCalendar";
import ScheduleSidebar from "../components/ScheduleSidebar";

const Availability = () => {
  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex justify-between items-center">

        <div>
          {/* <h1 className="text-3xl font-bold">
            My Availability
          </h1> */}

          <p className="text-gray-500 mt-1">
            Manage your teaching schedule
          </p>
        </div>

        <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-xl">
          + Add Availability
        </button>

      </div>

      <div className="grid grid-cols-12 gap-6">

        {/* Calendar */}

        <div className="col-span-9 bg-white rounded-2xl shadow-lg p-6">

          <AvailabilityCalendar />

        </div>

        {/* Right Sidebar */}

        <div className="col-span-3">

          <ScheduleSidebar />

        </div>

      </div>

    </div>
  );
};

export default Availability;