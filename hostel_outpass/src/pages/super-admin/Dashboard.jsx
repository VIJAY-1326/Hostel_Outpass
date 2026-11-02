import { useState } from "react";

function Dashboard() {
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <div className="w-64 bg-black p-5 text-white">
        <h2 className="mb-8 text-xl font-bold">
          CampusPass
        </h2>

        <button
          onClick={() => setActiveMenu("Dashboard")}
          className="w-full rounded-lg bg-white p-3 text-left text-black"
        >
          Dashboard
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold">
          {activeMenu}
        </h1>
      </div>

    </div>
  );
}

export default Dashboard;