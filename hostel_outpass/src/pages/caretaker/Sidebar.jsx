
import {
  LayoutDashboard,
  ClipboardList,
  ShieldCheck,
  History,
  CheckCircle,
  FileClock,
  GraduationCap,
  QrCode,
  ArrowLeftRight,
  ClockAlert,
  Bell,
  UserRound,
  Settings,
  LogOut
} from "lucide-react";

function Sidebar({ activeMenu, setActiveMenu }) {

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Out-pass Requests", icon: ClipboardList },
    { name: "OTP Verification", icon: ShieldCheck },
    { name: "Rejected History", icon: History },
    { name: "Approval History", icon: CheckCircle },
    { name: "Out-pass History", icon: FileClock },
    { name: "Student Details", icon: GraduationCap },
    { name: "QR Code Status", icon: QrCode },
    { name: "Gate Transactions", icon: ArrowLeftRight },
    { name: "Late Return Monitoring", icon: ClockAlert },
    { name: "Notifications", icon: Bell },
    { name: "My Profile", icon: UserRound },
    { name: "Settings", icon: Settings }
  ];

  return (
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
              className={`w-full flex items-center gap-3 rounded-xl p-3 text-left text-sm font-medium transition-colors ${buttonStyle}`}
            >
              <Icon size={19} />
              <span>{item.name}</span>
            </button>
          );
        })}

        {/* Logout */}
        <button
          onClick={() => console.log("Logout clicked")}
          className="w-full flex items-center gap-3 rounded-xl p-3 text-left text-sm font-medium text-red-500 hover:bg-red-50 transition-colors"
        >
          <LogOut size={19} />
          <span>Logout</span>
        </button>

      </div>
    </div>
  );
}

export default Sidebar;
