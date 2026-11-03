
import { useState } from "react";
import Users from "../../pages/super-admin/Users";

import {
  LayoutDashboard,
  Users as UsersIcon,
  GraduationCap,
  UserRound,
  Shield,
  Building2,
  ClipboardList,
  ArrowLeftRight,
  BarChart3,
  Settings,
  LogOut,
  ShieldCheck,
  QrCode,
  ClockAlert,
  FileText
} from "lucide-react";

function SuperAdminSidebar() {
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Users", icon: UsersIcon },
    { name: "Students", icon: GraduationCap },
    { name: "Hostel Admins", icon: ShieldCheck },
    { name: "Caretakers", icon: UserRound },
    { name: "Security Staff", icon: Shield },
    { name: "Hostel Blocks", icon: Building2 },
    { name: "Outpasses", icon: ClipboardList },
    { name: "Gate Transactions", icon: ArrowLeftRight },
    { name: "OTP Verification Logs", icon: ShieldCheck },
    { name: "QR Code Records", icon: QrCode },
    { name: "Late Returns", icon: ClockAlert },
    { name: "Audit Logs", icon: FileText },
    { name: "Reports", icon: BarChart3 },
    { name: "Settings", icon: Settings }
  ];

  return (
    <div className="flex h-[calc(100vh-64px)] overflow-hidden bg-[#f7f9fc]">
      {/* Sidebar */}
      <div className="w-80 shrink-0 bg-white border-r border-blue-300 p-4 flex flex-col h-full overflow-hidden  ">
        {/* Logo */}
        <div className=" mb-3 px-2 shrink-0 drop-shadow-md">
          <h2 className="text-2xl font-bold text-[#09428f]">
            Super Admin Panel
          </h2>
        </div>
        {/* Menu Items */}
        <div className="flex-1 min-h-0 space-y-2 overflow-y-auto overflow-x-hidden ">
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
                className={`w-full flex items-center gap-3 rounded-xl p-3 text-left text-sm ${buttonStyle}`}
              >
                <Icon size={19} />
                <span>{item.name}</span>
              </button>
            );
          })}
        </div>
        {/* Logout */}
        <div className="border-t pt-3 mt-3 shrink-0">
          <button className="w-full flex items-center gap-3 p-3 text-left text-red-500 hover:bg-red-50 rounded-xl">
            <LogOut size={19} />
            Logout
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
                  SUPER ADMIN DASHBOARD
                </p>
                <h1
                  className="mt-2 text-2xl md:text-3xl font-bold text-gray-900"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  Welcome back, Super Admin
                </h1>
              </div>
              <div className="flex items-center gap-3">
                <button className="bg-white border rounded-lg px-4 py-2 text-sm hover:bg-gray-50">
                  Notifications
                </button>
                <div className="w-10 h-10 rounded-full bg-[#09428f] text-white flex items-center justify-center font-bold">
                  SA
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Users Page */}
        {activeMenu === "Users" && <Users />}
      </div>
    </div>
  );
}

export default SuperAdminSidebar;
