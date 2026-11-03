
import { useState } from "react";

import CaretakerDashboard from "../../pages/caretaker/CaretakerDashboard";
import OutPassRequests from "../../pages/caretaker/OutPassRequests";
import OTPVerification from "../../pages/caretaker/OTPVerification";
import RejectedHistory from "../../pages/caretaker/RejectedHistory";
import ApprovalHistory from "../../pages/caretaker/ApprovalHistory";
import StudentDetails from "../../pages/caretaker/StudentDetails";
import QRCodeStatus from "../../pages/caretaker/QRCodeStatus";
import GateTransactions from "../../pages/caretaker/GateTransactions";
import LateReturn from "../../pages/caretaker/LateReturn";
import MyProfile from "../../pages/caretaker/MyProfile";
import AccountSettings from "../../pages/caretaker/AccountSettings";

import {
  LayoutDashboard,
  ClipboardList,
  KeyRound,
  ClipboardX,
  ClipboardCheck,
  GraduationCap,
  QrCode,
  ArrowLeftRight,
  ClockAlert,
  UserRound,
  Settings,
  LogOut,
  ChevronRight,
  Building2,
  PanelLeftClose,
  PanelLeftOpen
} from "lucide-react";

function CaretakerSidebar() {
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuGroups = [
    {
      items: [
        { name: "Dashboard", icon: LayoutDashboard }
      ]
    },
    {
      items: [
        { name: "Out-pass Requests", icon: ClipboardList },
        { name: "OTP Verification", icon: KeyRound },
        { name: "Rejected History", icon: ClipboardX },
        { name: "Approval History", icon: ClipboardCheck }
      ]
    },
    {
      items: [
        { name: "Student Details", icon: GraduationCap },
        { name: "QR Code Status", icon: QrCode },
        { name: "Gate Transactions", icon: ArrowLeftRight },
        { name: "Late Return Monitoring", icon: ClockAlert }
      ]
    },
    {
      items: [
        { name: "My Profile", icon: UserRound },
        { name: "Account Settings", icon: Settings }
      ]
    }
  ];

  return (
    <div className="flex h-[calc(100vh-64px)] overflow-hidden bg-[#f5f8fd]">

      {/* SIDEBAR WRAPPER */}
      <div
        className={`
          relative z-30 shrink-0 h-full
          transition-all duration-300 ease-in-out
          ${isCollapsed ? "w-20" : "w-72 md:w-80"}
        `}
      >

        {/* SIDEBAR */}
        <aside
          className="
            relative bg-white border-r border-[#e5ebf5]
            flex flex-col h-full min-h-0
            overflow-hidden shadow-sm
          "
        >

          {/* HEADER - FIXED */}
          <div
            className={`
              relative z-20 shrink-0 bg-white
              py-6 transition-shadow duration-300
              ${isCollapsed ? "px-3" : "px-5"}
              ${
                isScrolled
                  ? "shadow-[0_8px_18px_-8px_rgba(15,45,90,0.25)]"
                  : ""
              }
            `}
          >

            <div
              className={`flex items-center gap-3 ${
                isCollapsed ? "justify-center" : ""
              }`}
            >

              {/* LOGO */}
              <div className="w-11 h-11 shrink-0 rounded-xl bg-blue-50 flex items-center justify-center">
                <Building2
                  size={25}
                  className="text-[#09428f]"
                  strokeWidth={2}
                />
              </div>

              {/* BRANDING */}
              {!isCollapsed && (
                <div className="min-w-0">
                  <h2 className="text-xl font-bold text-[#123c78] whitespace-nowrap">
                    Caretaker Panel
                  </h2>

                  <p className="text-[10px] font-medium text-gray-400 mt-1 tracking-wide whitespace-nowrap">
                    HOSTEL MANAGEMENT PORTAL
                  </p>
                </div>
              )}

            </div>

          </div>

          {/* MENU ITEMS - ONLY SCROLLABLE */}
          <nav
            onScroll={(e) => {
              setIsScrolled(e.currentTarget.scrollTop > 0);
            }}
            className={`
              flex-1 min-h-0 overflow-y-auto overflow-x-hidden
              py-5 space-y-3
              ${isCollapsed ? "px-2" : "px-3"}
            `}
          >

            {menuGroups.map((group, groupIndex) => (

              <div key={groupIndex}>

                {/* MENU ITEMS */}
                <div className="space-y-1.5">

                  {group.items.map((item) => {

                    const Icon = item.icon;
                    const isActive = activeMenu === item.name;

                    return (
                      <button
                        key={item.name}
                        title={isCollapsed ? item.name : ""}
                        onClick={() => setActiveMenu(item.name)}
                        className={`
                          relative w-full flex items-center
                          rounded-xl py-3 text-[13px] font-semibold
                          transition-all duration-200 group
                          ${
                            isCollapsed
                              ? "justify-center px-2"
                              : "gap-3 px-3 text-left"
                          }
                          ${
                            isActive
                              ? "bg-[#09428f] text-white shadow-md shadow-blue-900/15"
                              : "text-gray-600 hover:bg-blue-50 hover:text-[#09428f]"
                          }
                        `}
                      >

                        {/* ACTIVE INDICATOR */}
                        {isActive && (
                          <span className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-white" />
                        )}

                        {/* ICON */}
                        <Icon
                          size={20}
                          strokeWidth={isActive ? 2.4 : 1.9}
                          className={`
                            shrink-0 transition-colors
                            ${
                              isActive
                                ? "text-white"
                                : "text-gray-500 group-hover:text-[#09428f]"
                            }
                          `}
                        />

                        {/* MENU NAME */}
                        {!isCollapsed && (
                          <span className="flex-1 whitespace-nowrap">
                            {item.name}
                          </span>
                        )}

                        {/* ACTIVE ARROW */}
                        {isActive && !isCollapsed && (
                          <ChevronRight size={16} />
                        )}

                      </button>
                    );
                  })}

                </div>

              </div>

            ))}

          </nav>

          {/* LOGOUT - FIXED BOTTOM */}
          <div
            className={`
              shrink-0 bg-white border-t border-[#edf0f5]
              py-4
              ${isCollapsed ? "px-2" : "px-3"}
            `}
          >

            <button
              title={isCollapsed ? "Logout" : ""}
              className={`
                w-full flex items-center rounded-xl
                text-red-500 bg-[#fff7f7]
                hover:bg-[#feecec]
                transition-all duration-200 group
                ${
                  isCollapsed
                    ? "justify-center p-3"
                    : "gap-3 px-3 py-3"
                }
              `}
            >

              <div className="w-9 h-9 shrink-0 rounded-lg bg-red-100 flex items-center justify-center group-hover:bg-red-200 transition-all">
                <LogOut size={19} strokeWidth={2} />
              </div>

              {!isCollapsed && (
                <>
                  <div className="flex-1 text-left">
                    <p className="text-sm font-bold">
                      Logout
                    </p>

                    <p className="text-[10px] text-red-400 mt-0.5">
                      Sign out of your account
                    </p>
                  </div>

                  <ChevronRight
                    size={16}
                    className="text-red-300 group-hover:translate-x-1 transition-transform"
                  />
                </>
              )}

            </button>

          </div>

        </aside>

        {/* TOGGLE BUTTON - OUTSIDE SIDEBAR EDGE */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
          className="
            absolute top-7 -right-4 z-50
            w-8 h-8 rounded-full
            bg-white border border-blue-200
            shadow-md
            flex items-center justify-center
            text-[#09428f]
            hover:bg-blue-50 hover:shadow-lg
            transition-all duration-200
          "
        >

          {isCollapsed ? (
            <PanelLeftOpen size={17} />
          ) : (
            <PanelLeftClose size={17} />
          )}

        </button>

      </div>

      {/* MAIN CONTENT */}
      <main className="flex-1 min-w-0 min-h-0 h-full overflow-y-auto overflow-x-hidden p-6 md:p-10">

        {activeMenu === "Dashboard" && <CaretakerDashboard />}

        {activeMenu === "Out-pass Requests" && <OutPassRequests />}

        {activeMenu === "OTP Verification" && <OTPVerification />}

        {activeMenu === "Rejected History" && <RejectedHistory />}

        {activeMenu === "Approval History" && <ApprovalHistory />}

        {activeMenu === "Student Details" && <StudentDetails />}

        {activeMenu === "QR Code Status" && <QRCodeStatus />}

        {activeMenu === "Gate Transactions" && <GateTransactions />}

        {activeMenu === "Late Return Monitoring" && <LateReturn />}

        {activeMenu === "My Profile" && <MyProfile />}

        {activeMenu === "Account Settings" && <AccountSettings />}

      </main>

    </div>
  );
}

export default CaretakerSidebar;
