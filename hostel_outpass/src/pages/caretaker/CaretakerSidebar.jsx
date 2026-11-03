
import { useState } from "react";

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

        {/* Dashboard Page */}
        {activeMenu === "Dashboard" && (
          <div>

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

              <div className="flex items-center gap-3">

                <button className="bg-white border rounded-lg px-4 py-2 text-sm hover:bg-gray-50">
                  Notifications
                </button>

                <div className="w-10 h-10 rounded-full bg-[#09428f] text-white flex items-center justify-center font-bold">
                  CT
                </div>

              </div>

            </div>

          </div>
        )}

        {/* Other Menu Pages */}
        {activeMenu !== "Dashboard" && (
          <div>

            <p className="text-xs font-semibold tracking-widest text-[#09428f]">
              CARETAKER PANEL
            </p>

            <h1
              className="mt-2 text-2xl md:text-3xl font-bold text-gray-900"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {activeMenu}
            </h1>

            <div className="mt-6 bg-white rounded-xl border p-6 shadow-sm">
              <p className="text-gray-600">
                {activeMenu} Page Content
              </p>
            </div>

          </div>
        )}

      </div>

    </div>
  );
}

export default CaretakerSidebar;
