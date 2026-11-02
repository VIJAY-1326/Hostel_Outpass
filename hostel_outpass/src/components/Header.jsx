
import { Link } from "react-router";

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white shadow-sm">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-5 p-2 sm:px-10 lg:px-14">
        <Link to="/" className="flex items-center">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZPhklABSoD8MAkIojwEqq76ZYNQfKrjHKsv_-TAGyPw&s=10" alt="AITAM - Aditya Institute of Technology and Management"className="w-30" />
        </Link>

        <Link to="/login" className="flex shrink-0 items-center gap-2 rounded-xl bg-[#173b78] px-5 py-3 text-sm font-bold text-white shadow-md transition duration-300 hover:bg-[#102d5e] hover:shadow-lg sm:px-7">
          Sign In
          <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
          </svg>
        </Link>
      </div>
    </header>
  );
}

export default Header;
