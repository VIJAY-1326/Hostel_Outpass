
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
    { name: "Setting", icon: Settings }
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
        {/* Users Page */}
        {activeMenu === "Users" && <Users />}
        {/* Students page*/}
        {activeMenu === "Students" && <Students />}
        {/* Hostel Admin page*/}
        {activeMenu === "Hostel Admins" && <HostelAdmin />}
        {/* Caretaker page*/}
        {activeMenu === "Caretakers" && <Caretaker />}
        {/* Security Staff page*/}
        {activeMenu === "Security Staff" && <SecurityStaff />}
        {/* Hostel Blocks page*/}
        {activeMenu === "Hostel Blocks" && <HostelBlocks />}
        {/* Outpass page*/}
        {activeMenu === "Outpasses" && <Outpass />}
        {/* Gate Transactions page*/}
        {activeMenu === "Gate Transactions" && <GateTransactions />}
        {/* OTP Verification Logs page*/}
        {activeMenu === "OTP Verification Logs" && <OtpVerificationLogs />}
        {/* QR Code Records page*/}
        {activeMenu === "QR Code Records" && <QrCodesRecords />}
        {/* Late Returns page*/}
        {activeMenu === "Late Returns" && <LateReturns />}
        {/* Audit Logs page*/}
        {activeMenu === "Audit Logs" && <AduitLogs />}
        {/* Reports page*/}
        {activeMenu === "Reports" && <Reports />}
        {/* Settings page*/}
        {activeMenu === "Setting" && <SuperAdminSettings />}
      </div>
    </div>
  );
}

export default SuperAdminSidebar;
