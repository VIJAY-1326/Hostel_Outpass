
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
  Clock,
  ClipboardCheck,
  QrCode,
  History,
  Headset,
  UserCog,
  ClockAlert,
  ChartNoAxesCombined,
  LogOut,
  ChevronRight,
  PanelLeftClose,
  PanelLeftOpen,
  Building2,
} from "lucide-react";

function StudentSidebar() {
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [collapsed, setCollapsed] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  const renderPage = () => {
    switch (activeMenu) {
      case "Dashboard":
        return <StudentDashboard />;
      case "Apply for Outpass":
        return <ApplyForOutpass />;
      case "Pending Requests":
        return <PendingRequests />;
      case "Approved Outpasses":
        return <ApprovedOutpasses />;
      case "My QR Code":
        return <MyQRCode />;
      case "Outpass & History":
        return <OutpassHistory />;
      case "Help & Support":
        return <HelpSupport />;
      case "Account Settings":
        return <AccountSettings />;
      case "Late Returns":
        return <LateReturns />;
      case "Reports":
        return <Reports />;
      default:
        return <StudentDashboard />;
    }
  };

  return (
    <div className="flex h-[calc(100vh-64px)] overflow-hidden bg-[#f5f8fd]">

      {/* Sidebar */}
      <div
        className={`relative z-30 shrink-0 h-full transition-all duration-300 ease-in-out ${
          collapsed ? "w-20" : "w-72 md:w-80"
        }`}
      >
        <aside className="flex flex-col h-full min-h-0 overflow-hidden bg-white border-r border-[#e5ebf5] shadow-sm">

          {/* Header */}
          <div
            className={`shrink-0 bg-white py-6 ${
              collapsed ? "px-3" : "px-5"
            } ${isScrolled ? "shadow-sm" : ""}`}
          >
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-11 h-11 shrink-0 rounded-xl bg-blue-50 text-[#09428f]">
                <Building2 size={23} strokeWidth={2.2} />
              </div>

              {!collapsed && (
                <div className="min-w-0">
                  <h2 className="text-lg font-bold text-[#09428f] whitespace-nowrap">
                    Student Panel
                  </h2>
                  <p className="text-[10px] font-semibold tracking-wider text-gray-400 whitespace-nowrap">
                    HOSTEL MANAGEMENT PORTAL
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Menu Items */}
          <nav
            onScroll={(e) => setIsScrolled(e.currentTarget.scrollTop > 0)}
            className={`flex-1 min-h-0 overflow-y-auto overflow-x-hidden py-5 space-y-3 ${
              collapsed ? "px-2" : "px-3"
            }`}
          >
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeMenu === item.name;

              return (
                <button
                  key={item.name}
                  title={collapsed ? item.name : ""}
                  onClick={() => setActiveMenu(item.name)}
                  className={`group relative w-full flex items-center rounded-xl py-3 transition-all duration-200 ${
                    collapsed
                      ? "justify-center px-2"
                      : "justify-between px-3"
                  } ${
                    isActive
                      ? "bg-[#09428f] text-white shadow-md shadow-blue-900/15"
                      : "text-gray-600 hover:bg-blue-50 hover:text-[#09428f]"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <Icon
                      size={20}
                      strokeWidth={isActive ? 2.4 : 1.9}
                      className="shrink-0"
                    />

                    {!collapsed && (
                      <span className="text-[13px] font-semibold whitespace-nowrap">
                        {item.name}
                      </span>
                    )}
                  </div>

                  {!collapsed && isActive && (
                    <ChevronRight size={17} strokeWidth={2.5} />
                  )}

                  {isActive && (
                    <span className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-white" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Logout */}
          <div
            className={`shrink-0 border-t border-[#edf0f5] py-4 ${
              collapsed ? "px-2" : "px-3"
            }`}
          >
            <button
              title={collapsed ? "Logout" : ""}
              className={`w-full flex items-center gap-3 rounded-xl py-3 text-left transition-all duration-200 ${
                collapsed ? "justify-center px-2" : "px-3"
              } bg-[#fff7f7] text-red-500 hover:bg-[#feecec]`}
            >
              <div className="flex items-center justify-center w-9 h-9 shrink-0 rounded-lg bg-red-100">
                <LogOut size={19} strokeWidth={2} />
              </div>

              {!collapsed && (
                <>
                  <div className="flex-1 min-w-0">
                    <p className="text-[13px] font-semibold">Logout</p>
                    <p className="text-[10px] text-red-400">
                      Sign out of your account
                    </p>
                  </div>
                  <ChevronRight size={16} />
                </>
              )}
            </button>
          </div>
        </aside>

        {/* Collapse / Expand Toggle */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="absolute top-7 -right-4 z-50 flex items-center justify-center w-8 h-8 rounded-full bg-white border border-blue-200 text-[#09428f] shadow-md hover:bg-blue-50 transition-all duration-200"
          title={collapsed ? "Expand Sidebar" : "Collapse Sidebar"}
        >
          {collapsed ? (
            <PanelLeftOpen size={17} />
          ) : (
            <PanelLeftClose size={17} />
          )}
        </button>
      </div>

      {/* Main Content */}
      <main className="flex-1 min-w-0 min-h-0 h-full overflow-y-auto overflow-x-hidden p-6 md:p-10">
        {renderPage()}
      </main>
    </div>
  );
}

export default StudentSidebar;
