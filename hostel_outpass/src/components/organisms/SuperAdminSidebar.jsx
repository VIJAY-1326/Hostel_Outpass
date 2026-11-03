
import { useState } from "react";

import Users from "../../pages/super-admin/Users";
import SuperAdminDashboard from "../../pages/super-admin/SuperAdminDashboard";
import Students from "../../pages/super-admin/Students";
import HostelAdmin from "../../pages/super-admin/HostelAdmin";
import Caretaker from "../../pages/super-admin/Caretaker";
import SecurityStaff from "../../pages/super-admin/SecurityStaff";
import HostelBlocks from "../../pages/super-admin/HostelBlocks";
import Outpass from "../../pages/super-admin/Outpass";
import GateTransactions from "../../pages/super-admin/GateTransactions";
import OtpVerificationLogs from "../../pages/super-admin/OtpVerificationLogs";
import QrCodesRecords from "../../pages/super-admin/QrCodesRecords";
import LateReturns from "../../pages/super-admin/LateReturns";
import AduitLogs from "../../pages/super-admin/AuditLogs";
import Reports from "../../pages/super-admin/Reports";
import SuperAdminSettings from "../../pages/super-admin/SuperAdminSettings";

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
  FileText,
  ChevronRight,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";

function SuperAdminSidebar() {
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [collapsed, setCollapsed] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
    { name: "Account Settings", icon: Settings },
  ];

  const renderPage = () => {
    switch (activeMenu) {
      case "Dashboard":
        return <SuperAdminDashboard />;
      case "Users":
        return <Users />;
      case "Students":
        return <Students />;
      case "Hostel Admins":
        return <HostelAdmin />;
      case "Caretakers":
        return <Caretaker />;
      case "Security Staff":
        return <SecurityStaff />;
      case "Hostel Blocks":
        return <HostelBlocks />;
      case "Outpasses":
        return <Outpass />;
      case "Gate Transactions":
        return <GateTransactions />;
      case "OTP Verification Logs":
        return <OtpVerificationLogs />;
      case "QR Code Records":
        return <QrCodesRecords />;
      case "Late Returns":
        return <LateReturns />;
      case "Audit Logs":
        return <AduitLogs />;
      case "Reports":
        return <Reports />;
      case "Account Settings":
        return <SuperAdminSettings />;
      default:
        return <SuperAdminDashboard />;
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
                    Super Admin Panel
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
            onScroll={(e) =>
              setIsScrolled(e.currentTarget.scrollTop > 0)
            }
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

export default SuperAdminSidebar;
