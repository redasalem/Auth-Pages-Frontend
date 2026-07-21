import { useState } from "react";
import { Link } from "react-router-dom";
import illustration from "../assets/images/illustration.png";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-[#4C43D9] selection:text-white">
      {/* Header / Logo */}
      <header className="w-full px-8 py-6 lg:px-16 lg:py-8">
        <Link to="/" className="text-xl font-bold tracking-tight text-slate-900">
          <img src="./logo.jpg" alt="logo-auth" className="w-15" />
        </Link>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-12">
        
        {/* Left Welcome Info */}
        <section className="lg:col-span-6 space-y-6 flex flex-col justify-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.25] tracking-tight">
            Sign Up to <br />
            <span className="text-3xl lg:text-4xl font-extrabold text-slate-900 mt-2 block">
              Lorem Ipsum is simply
            </span>
          </h1>

          <p className="text-slate-700 text-sm lg:text-base leading-relaxed">
            If you already have an account <br />
            You can {" "}
            <Link to="/login" className="text-[#4C43D9] font-bold hover:underline">
              Login here !
            </Link>
          </p>

          <div className="pt-2 max-w-md">
            <img
              src={illustration}
              alt="Sign up illustration"
              className="w-full h-auto object-contain max-h-[380px]"
            />
          </div>
        </section>

        {/* Right Registration Form */}
        <section className="lg:col-span-5 lg:col-start-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Sign Up</h2>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Enter Email"
                required
                className="w-full bg-[#F0EDFF] text-slate-800 placeholder-[#B4AEF6] px-5 py-4 rounded-xl text-sm font-medium border-none focus:outline-none focus:ring-2 focus:ring-[#4C43D9]/50 transition-all"
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Create User name"
                required
                className="w-full bg-[#F0EDFF] text-slate-800 placeholder-[#B4AEF6] px-5 py-4 rounded-xl text-sm font-medium border-none focus:outline-none focus:ring-2 focus:ring-[#4C43D9]/50 transition-all"
              />
            </div>

            <div>
              <input
                type="tel"
                placeholder="Contact number"
                className="w-full bg-[#F0EDFF] text-slate-800 placeholder-[#B4AEF6] px-5 py-4 rounded-xl text-sm font-medium border-none focus:outline-none focus:ring-2 focus:ring-[#4C43D9]/50 transition-all"
              />
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
                className="w-full bg-[#F0EDFF] text-slate-800 placeholder-[#B4AEF6] px-5 py-4 pr-12 rounded-xl text-sm font-medium border-none focus:outline-none focus:ring-2 focus:ring-[#4C43D9]/50 transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label="Toggle password visibility"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#B4AEF6] hover:text-[#4C43D9] transition-colors cursor-pointer"
              >
                {showPassword ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858-5.908a10.027 10.027 0 013.682-.763c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m-6.23-1.63a3 3 0 11-4.243-4.243" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            </div>

            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                required
                className="w-full bg-[#F0EDFF] text-slate-800 placeholder-[#B4AEF6] px-5 py-4 pr-12 rounded-xl text-sm font-medium border-none focus:outline-none focus:ring-2 focus:ring-[#4C43D9]/50 transition-all"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                aria-label="Toggle confirm password visibility"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#B4AEF6] hover:text-[#4C43D9] transition-colors cursor-pointer"
              >
                {showConfirmPassword ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858-5.908a10.027 10.027 0 013.682-.763c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m-6.23-1.63a3 3 0 11-4.243-4.243" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-[#4C43D9] hover:bg-[#3F36C8] text-white font-medium py-4 rounded-xl shadow-[0_10px_25px_rgba(76,67,217,0.35)] transition-all cursor-pointer text-base pt-3.5 mt-2 active:scale-[0.99]"
            >
              Register
            </button>
          </form>

          {/* Social Auth Section */}
          <div className="text-center text-xs text-[#B4AEF6] font-medium my-6">
            or continue with
          </div>

          <div className="flex items-center justify-center gap-5">
            {/* Google */}
            <button
              type="button"
              aria-label="Continue with Google"
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <svg className="w-7 h-7" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
            </button>
          </div>
        </section>

      </main>
    </div>
  );
}

export default SignUp;
