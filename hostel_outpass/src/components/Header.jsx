
import { Link } from "react-router";

function Header() {
  return (
    <>
    <header className="w-full bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-[1520px] mx-auto px-6 md:px-10 py-4 flex items-center justify-between"> 
        <div className="flex items-center gap-4"> 
          <div className="w-14 h-14 rounded-xl shadow-md flex items-center justify-center overflow-hidden">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTow6P_oAIjsbN1Gx_znzWpYbUdRb2hzgLGCYd7T1g04A&s=10"
              alt="AITAM Logo"
              className="w-full h-full object-contain"
            />
          </div>

         
          <div>
            <p className="text-red-600 text-xs font-bold tracking-[2px] uppercase">
              AITAM (AUTONOMOUS)
            </p>

            <div className="flex items-center flex-wrap gap-2">
              <h1 className="text-2xl font-extrabold text-slate-900">
                CampusPass
              </h1>

              <span className="hidden sm:block text-gray-300">|</span>

              <span className="text-xs font-bold tracking-wider text-slate-400">
                HOSTEL OUTPASS ERP
              </span>
            </div>

            <p className="text-xs text-slate-500 mt-1">
              Aditya Institute of Technology and Management
            </p>
          </div>
        </div>

       
        <div className="flex items-center gap-5">

          <Link
            to="/login"
            className="hidden sm:block text-sm font-semibold text-slate-700 hover:text-blue-600 transition"
          >
            Sign In
          </Link>

        </div>
      </div>
    </header>
    </>
  );
}

export default Header;
