import { useState } from "react";
import HostelAdminDashboard from "../../pages/hostel-admin/HostelAdminDashboard";
import OutpassRequests from "../../pages/hostel-admin/OutpassRequests";
import OtpVerification from "../../pages/hostel-admin/OTPVerification";
import PendingApprovals from "../../pages/hostel-admin/PendingApprovals";
import ApprovedOutpasses from "../../pages/hostel-admin/ApprovedOutpasses";
import RejectedOutpasses from "../../pages/hostel-admin/RejectedOutpasses";
import OutpassHistory from "../../pages/hostel-admin/OutpassHistory";
import HostelStudents from "../../pages/hostel-admin/HostelStudents";
import RoomsOccupancy from "../../pages/hostel-admin/Rooms&Occupancy";
import CaretakerManagement from "../../pages/hostel-admin/CaretakerManagement";
import GateReports from "../../pages/hostel-admin/Gate&Reports";
import QrCodeRecords from "../../pages/hostel-admin/QRCodeRecords";
import GateTransactions from "../../pages/hostel-admin/GateTransactions";
import MyProfile from "../../pages/hostel-admin/MyProfile";
import HostelAdminSettings from "../../pages/hostel-admin/AccountSettings";


import {
  LayoutDashboard,
  ClipboardList,
  ShieldCheck,
  Clock,
  ClipboardCheck,
  ClipboardX,
  History,
  GraduationCap,
  BedDouble,
  Users,
  ClockAlert,
  QrCode,
  ArrowLeftRight,
  UserRound,
  Settings,
  LogOut
} from "lucide-react";

function HostelAdminSidebar() {
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Out-pass Requests", icon: ClipboardList },
    { name: "OTP Verification", icon: ShieldCheck },
    { name: "Pending Approvals", icon: Clock },
    { name: "Approved Out-passes", icon: ClipboardCheck },
    { name: "Rejected Out-passes", icon: ClipboardX },
    { name: "Outpass History", icon: History },
    { name: "Hostel Students", icon: GraduationCap },
    { name: "Rooms & Occupancy", icon: BedDouble },
    { name: "Caretaker Management", icon: Users },
    { name: "Gate & Reports", icon: ClockAlert },
    { name: "QR Code Records", icon: QrCode },
    { name: "Gate Transactions", icon: ArrowLeftRight },
    { name: "My Profile", icon: UserRound },
    { name: "Settings", icon: Settings }
  ];

  return (
    <div className="flex h-[calc(100vh-64px)] overflow-hidden bg-[#f7f9fc]">

      {/* Sidebar */}
      <div className="w-80 shrink-0 bg-white border-r border-blue-300 p-4 flex flex-col h-full overflow-hidden">

        {/* Logo */}
        <div className="mb-8 px-2 shrink-0 " >
          <h2 className="text-2xl font-bold text-[#09428f]">
            Hostel Admin Panel
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
        {activeMenu === "Dashboard" && <HostelAdminDashboard />}
        {/* Out-pass Requests Page */}
        {activeMenu === "Out-pass Requests" && <OutpassRequests />}
        {/* OTP Verification Page */}
        {activeMenu === "OTP Verification" && <OtpVerification />}
        {/* Pending Approvals Page */}
        {activeMenu === "Pending Approvals" && <PendingApprovals />}
        {/* Approved Out-passes Page */}
        {activeMenu === "Approved Out-passes" && <ApprovedOutpasses />}
        {/* Rejected Out-passes Page */}
        {activeMenu === "Rejected Out-passes" && <RejectedOutpasses />}
        {/* Outpass History Page */}
        {activeMenu === "Outpass History" && <OutpassHistory />}
        {/* Hostel Students Page */}
        {activeMenu === "Hostel Students" && <HostelStudents />}
        {/* Rooms & Occupancy Page */}
        {activeMenu === "Rooms & Occupancy" && <RoomsOccupancy />}
        {/* Caretaker Management Page */}
        {activeMenu === "Caretaker Management" && <CaretakerManagement />}
        {/* Gate & Reports Page */}
        {activeMenu === "Gate & Reports" && <GateReports />}
        {/* QR Code Records Page */}
        {activeMenu === "QR Code Records" && <QrCodeRecords />}
        {/* Gate Transactions Page */}
        {activeMenu === "Gate Transactions" && <GateTransactions />}
        {/* My Profile Page */}
        {activeMenu === "My Profile" && <MyProfile />}
        {/* Settings Page */}
        {activeMenu === "Settings" && <HostelAdminSettings />}
      </div>
    </div>
  );
}

  
export default HostelAdminSidebar;
