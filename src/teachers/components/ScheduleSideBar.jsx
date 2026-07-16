const ScheduleSidebar = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-5">

      <h2 className="font-bold text-xl mb-5">
        Today's Schedule
      </h2>

      {[
        "10:00 AM - Grade 8 Mathematics",
        "12:30 PM - Grade 6 English",
        "03:00 PM - Physics Demo",
      ].map((item, index) => (
        <div
          key={index}
          className="mb-4 border-l-4 border-pink-600 bg-slate-50 p-4 rounded-lg"
        >
          {item}
        </div>
      ))}

    </div>
  );
};

export default ScheduleSidebar;