import { useState } from "react";

function Login() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Login submitted");
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#eef1f5] p-3 sm:p-6 lg:p-10">
      <div className="grid w-full max-w-[1250px] overflow-hidden rounded-[28px] bg-white shadow-[0_30px_100px_-30px_rgba(15,35,65,0.25)] lg:min-h-[720px] lg:grid-cols-[1fr_1fr]">

        <section className="relative flex flex-col justify-between overflow-hidden bg-[#101f38] px-8 py-10 text-white sm:px-12 sm:py-12 lg:px-16 lg:py-14">
          <div className="absolute -right-32 top-20 h-[450px] w-[450px] rounded-full border border-[#c9a96e]/20"></div>
          <div className="absolute -right-20 top-32 h-[350px] w-[350px] rounded-full border border-[#c9a96e]/15"></div>
          <div className="absolute -bottom-44 -left-32 h-[500px] w-[500px] rounded-full bg-[#c9a96e]/10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-[#c9a96e] to-transparent"></div>

          <div className="relative z-10 flex items-center gap-4">
            <div className="flex h-[76px] w-[76px] items-center justify-center rounded-2xl bg-white p-2 shadow-xl">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTow6P_oAIjsbN1Gx_znzWpYbUdRb2hzgLGCYd7T1g04A&s=10"
                alt="AITAM Logo"
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-wide">AITAM</h1>
              <p className="mt-1 max-w-[240px] text-[10px] font-medium leading-4 tracking-[0.13em] text-slate-300">
                ADITYA INSTITUTE OF TECHNOLOGY AND MANAGEMENT
              </p>
            </div>
          </div>

          <div className="relative z-10">
            

            <h2 className="max-w-lg text-[42px] font-semibold leading-[1.2] tracking-tight sm:text-5xl">
              Hostel Outpass
              <span className="mt-2 block text-[#d9bd8d]">Management System</span>
            </h2>

            <p className="mt-7 max-w-sm text-sm leading-7 text-slate-300">
              Aditya Institute of Technology and Management
            </p>
          </div>

          <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-6">
            <p className="text-xs tracking-wide text-slate-400">AITAM HOSTEL MANAGEMENT</p>
          </div>
        </section>

        <section className="flex items-center justify-center bg-white px-6 py-12 sm:px-12 lg:px-16">
          <div className="w-full max-w-[410px]">
            <div className="mb-12">
              <h3 className="mt-4 text-3xl font-bold tracking-tight text-[#17243a] sm:text-[36px]">
                Welcome Back
              </h3>
              <p className="mt-3 text-sm text-slate-500">
                Sign in to continue to your account.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-7">
              <div>
                <label className="mb-3 block text-[13px] font-semibold text-[#25344b]">
                  Email ID / Roll Number
                </label>
                <input
                  type="text"
                  value={identifier}
                  onChange={(event) => setIdentifier(event.target.value)}
                  placeholder="Enter your email or roll number"
                  required
                  className="w-full rounded-xl border border-[#e1e5eb] bg-[#fafbfc] px-5 py-[17px] text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 hover:border-slate-300 focus:border-[#a4834e] focus:bg-white focus:ring-4 focus:ring-[#c9a96e]/10"
                />
              </div>

              <div>
                <div className="mb-3 flex items-center justify-between">
                  <label className="text-[13px] font-semibold text-[#25344b]">
                    Password
                  </label>
                  <button
                    type="button"
                    onClick={() => alert("Please contact your hostel administrator for password assistance.")}
                    className="text-xs font-semibold text-[#a4834e] transition hover:text-[#806337]"
                  >
                    Forgot Password?
                  </button>
                </div>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Enter your password"
                    required
                    className="w-full rounded-xl border border-[#e1e5eb] bg-[#fafbfc] px-5 py-[17px] pr-20 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 hover:border-slate-300 focus:border-[#a4834e] focus:bg-white focus:ring-4 focus:ring-[#c9a96e]/10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-5 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-500 hover:text-[#a4834e]"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              <label className="flex cursor-pointer items-center gap-3 text-sm text-slate-600">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(event) => setRemember(event.target.checked)}
                  className="h-4 w-4 rounded accent-[#a4834e]"
                />
                Remember me
              </label>

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#172b48] py-[17px] text-sm font-semibold tracking-wide text-white shadow-lg shadow-[#172b48]/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#243d60] hover:shadow-xl active:translate-y-0"
              >
                Sign In
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
            </form>

            
          </div>
        </section>
      </div>
    </main>
  );
}

export default Login;
