
import { useState } from "react";
import StudentDashboard from "../../pages/student/StudentDashboard";
import ApplyForOutpass from "../../pages/student/ApplyForOutpass";
import PendingRequests from "../../pages/student/PendingRequests";
import AccountSettings from "../../pages/student/AccountSettings";
import ApprovedOutpasses from "../../pages/student/ApprovedOutpasses";
import HelpSupport from "../../pages/student/Help&Support";
import LateReturns from "../../pages/student/LateReturns";
import Reports from "../../pages/student/Reports";
import MyQRCode from "../../pages/student/MyQRCode";
import OutpassHistory from "../../pages/student/Outpass&History";

import {
  LayoutDashboard,
  FilePlus,
  ClipboardList,
  Clock,
  ClipboardCheck,
  QrCode,
  History,
  Headset,
  UserCog,
  ScanLine,
  ClockAlert,
  ChartNoAxesCombined,
  Settings,
  LogOut
} from "lucide-react";

function StudentSidebar() {
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Apply for Outpass", icon: FilePlus },
    { name: "Pending Requests", icon: Clock },
    { name: "Approved Outpasses", icon: ClipboardCheck },
    { name: "My QR Code", icon: QrCode },
    { name: "Outpass & History", icon: History },
    { name: "Help & Support", icon: Headset },
    { name: "Account Settings", icon: UserCog },
    { name: "Late Returns", icon: ClockAlert },
    { name: "Reports", icon: ChartNoAxesCombined },
  ];

  return (
    <div className="flex h-[calc(100vh-64px)] overflow-hidden bg-[#f7f9fc]">

      {/* Sidebar */}
      <div className="w-80 shrink-0 bg-white border-r border-blue-300 p-4 flex flex-col h-full overflow-hidden">

        {/* Logo */}
        <div className="mb-8 px-2 shrink-0">
          <h2 className="text-2xl font-bold text-[#09428f]">
            Student Panel
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
        {activeMenu === "Dashboard" && <StudentDashboard />}
        {/* Apply for Outpass Page */}
        {activeMenu === "Apply for Outpass" && <ApplyForOutpass />}
        {/* Pending Requests Page */}
        {activeMenu === "Pending Requests" && <PendingRequests />}
        {/* Account Settings Page */}
        {activeMenu === "Account Settings" && <AccountSettings />}
        {/* Approved Outpasses Page */}
        {activeMenu === "Approved Outpasses" && <ApprovedOutpasses />}
        {/* Help & Support Page */}
        {activeMenu === "Help & Support" && <HelpSupport />}
        {/* Late Returns Page */}
        {activeMenu === "Late Returns" && <LateReturns />}
        {/* Reports Page */}
        {activeMenu === "Reports" && <Reports />}
        {/* My QR Code Page */}
        {activeMenu === "My QR Code" && <MyQRCode />}
        {/* Outpass & History Page */}
        {activeMenu === "Outpass & History" && <OutpassHistory />}
      </div>
    </div>
  );
}

export default StudentSidebar;
