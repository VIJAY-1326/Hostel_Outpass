import { useState } from "react";
import CaretakerDashboard from "../../pages/caretaker/CaretakerDashboard";

import {
  LayoutDashboard,
  ClipboardList,
  KeyRound,
  ClipboardX,
  ClipboardCheck,
  FileClock,
  GraduationCap,
  QrCode,
  ArrowLeftRight,
  ClockAlert,
  UserRound,
  Settings,
  LogOut
} from "lucide-react";

function CaretakerSidebar() {
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Out-pass Requests", icon: ClipboardList },
    { name: "OTP Verification", icon: KeyRound },
    { name: "Rejected History", icon: ClipboardX },
    { name: "Approval History", icon: ClipboardCheck },
    { name: "Out-pass History", icon: FileClock },
    { name: "Student Details", icon: GraduationCap },
    { name: "QR Code Status", icon: QrCode },
    { name: "Gate Transactions", icon: ArrowLeftRight },
    { name: "Late Return Monitoring", icon: ClockAlert },
    { name: "My Profile", icon: UserRound },
    { name: "Settings", icon: Settings }
  ];

  return (
    <div className="flex h-[calc(100vh-64px)] overflow-hidden bg-[#f7f9fc]">

      {/* Sidebar */}
      <div className="w-80 shrink-0 bg-white border-r border-blue-300 p-4 flex flex-col h-full overflow-hidden">

        {/* Logo */}
        <div className="mb-8 px-2 shrink-0">
          <h2 className="text-2xl font-bold text-[#09428f]">
            Caretaker Panel
          </h2>
        </div>

        {/* Menu Items */}
        <div className="flex-1 min-h-0 space-y-2 overflow-y-auto overflow-x-hidden">

          {menuItems.map((item) => {
            const Icon = item.icon;

            let buttonStyle =
              "text-gray-600 hover:bg-blue-50 hover:text-[#09428f]";

            if (activeMenu === item.name) {
              buttonStyle = "bg-[#09428f] text-white shadow-md";
            }

            return (
              <button
                key={item.name}
                onClick={() => setActiveMenu(item.name)}
                className={`w-full flex items-center gap-3 rounded-xl p-3 text-left text-sm transition-all duration-200 ${buttonStyle}`}
              >
                <Icon size={19} strokeWidth={2} />

                <span>{item.name}</span>
              </button>
            );
          })}

        </div>

        {/* Logout */}
        <div className="border-t pt-3 mt-3 shrink-0">
          <button
            className="w-full flex items-center gap-3 p-3 text-left text-red-500 hover:bg-red-50 rounded-xl transition-all duration-200"
          >
            <LogOut size={19} strokeWidth={2} />

            <span>Logout</span>
          </button>
        </div>

      </div>
      {/* Main Content */}
      <div className="flex-1 min-w-0 min-h-0 h-full overflow-y-auto overflow-x-hidden p-6 md:p-10">
        {activeMenu === "CaretakerDashboard" && <CaretakerDashboard />}
      </div>
      
    </div>
  );
}

export default CaretakerSidebar;
