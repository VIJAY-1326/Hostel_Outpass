
import { useState } from "react";
import SecurityDashboard from "../../pages/security/SecurityDashboard";
import ScanQRCode from "../../pages/security/ScanQRCode";
import ManualQRReference from "../../pages/security/ManualQRReference";
import CheckOutRecords from "../../pages/security/CheckOutRecords";
import CheckInRecords from "../../pages/security/CheckInRecords";
import RecentTransactions from "../../pages/security/RecentTransactions";
import LateReturns from "../../pages/security/LateReturns";
import TransactionSearch from "../../pages/security/TransactionSearch";
import MyProfile from "../../pages/security/MyProfile";
import Reports from "../../pages/security/Reports";
import OutpassHistory from "../../pages/security/OutpassHistory";
import AccountSettings from "../../pages/security/AccountSettings";

import {
  LayoutDashboard,
  QrCode,
  Keyboard,
  ClockArrowUp,
  ClockArrowDown,
  ArrowLeftRight,
  ClockAlert,
  Search,
  UserRound,
  ChartNoAxesCombined,
  History,
  Settings,
  LogOut
} from "lucide-react";

function SecuritySidebar() {
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Scan QR Code", icon: QrCode },
    { name: "Manual QR Reference", icon: Keyboard },
    { name: "Check-Out Records", icon: ClockArrowUp },
    { name: "Check-In Records", icon: ClockArrowDown },
    { name: "Recent Transactions", icon: ArrowLeftRight },
    { name: "Late Returns", icon: ClockAlert },
    { name: "Transaction Search", icon: Search },
    { name: "My Profile", icon: UserRound },
    { name: "Reports", icon: ChartNoAxesCombined },
    { name: "Outpass History", icon: History },
    { name: "Account Settings", icon: Settings }
  ];

  return (
    <div className="flex h-[calc(100vh-64px)] overflow-hidden bg-[#f7f9fc]">

      {/* Sidebar */}
      <div className="w-80 shrink-0 bg-white border-r border-blue-300 p-4 flex flex-col h-full overflow-hidden">

        {/* Logo */}
        <div className="mb-8 px-2 shrink-0">
          <h2 className="text-2xl font-bold text-[#09428f]">
            Security Panel
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
        {activeMenu === "Dashboard" && <SecurityDashboard />}
        {/* Scan QR Code Page */}
        {activeMenu === "Scan QR Code" && <ScanQRCode />}
        {/* Manual QR Reference Page */}
        {activeMenu === "Manual QR Reference" && <ManualQRReference />}
        {/* Check Out Records Page */}
        {activeMenu === "Check-Out Records" && <CheckOutRecords />}
        {/* Check In Records Page */}
        {activeMenu === "Check-In Records" && <CheckInRecords />}
        {/* Recent Transactions Page */}
        {activeMenu === "Recent Transactions" && <RecentTransactions />}
        {/* Late Returns Page */}
        {activeMenu === "Late Returns" && <LateReturns />}
        {/* Transaction Search Page */}
        {activeMenu === "Transaction Search" && <TransactionSearch />}
        {/* My Profile Page */}
        {activeMenu === "My Profile" && <MyProfile />}
        {/* Reports Page */}
        {activeMenu === "Reports" && <Reports />}
        {/* Outpass History Page */}
        {activeMenu === "Outpass History" && <OutpassHistory />}
        {/* Account Settings Page */}
        {activeMenu === "Account Settings" && <AccountSettings />}
      </div>

    </div>
  );
}

export default SecuritySidebar;
