
import { Bell } from "lucide-react";
import Sidebar from "../../components/organisms/CaretakerSidebar";

function CaretakerDashboard() {
  return (
    <div className="flex h-[calc(100vh-64px)] overflow-hidden bg-[#f7f9fc]">
      {/* Sidebar */}
      <CaretakerSidebar />
      {/* Main Content */}
      <div className="flex-1 min-w-0 p-6 md:p-10">
        {/* Welcome Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 pb-6">
          <div>
            <p className="text-xs font-semibold tracking-widest text-[#09428f]">
              CARETAKER DASHBOARD
            </p>
            <h1
              className="mt-2 text-2xl md:text-3xl font-bold text-gray-900"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Welcome back, Caretaker
            </h1>
          </div>
          {/* Notifications and Profile */}
          <div className="flex items-center gap-4">
            <button className="relative rounded-lg border bg-white p-3 hover:bg-blue-50">
              <Bell size={20} className="text-gray-600" />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500"></span>
            </button>
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#09428f] font-bold text-white">
              CT
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaretakerDashboard;
