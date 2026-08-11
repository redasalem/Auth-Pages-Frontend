
import { useState } from "react";
import type { SyntheticEvent } from "react";
import { Link } from "react-router-dom";
import illustration from "../assets/images/illustration.png";

function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!email) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Ready for API integration (e.g. await sendPasswordResetEmail(email))
      console.log("Password reset requested for:", email);
      
      // Simulate network request for now
      await new Promise((resolve) => setTimeout(resolve, 800));

      setIsSubmitted(true);
    } catch (err) {
      console.error("Password reset error:", err);
      setErrorMessage("Failed to send reset email. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
        {/* Left Info Section */}
        <section className="lg:col-span-6 space-y-6 flex flex-col justify-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.25] tracking-tight">
            Forgot Your <br />
            <span className="text-3xl lg:text-4xl font-extrabold text-slate-900 mt-2 block">
              Password?
            </span>
          </h1>

          <p className="text-slate-700 text-sm lg:text-base leading-relaxed">
            Remembered your password? <br />
            You can{" "}
            <Link to="/login" className="text-[#4C43D9] font-bold hover:underline">
              Login here !
            </Link>
          </p>

          <div className="pt-2 max-w-md">
            <img
              src={illustration}
              alt="Forgot password illustration"
              className="w-full h-auto object-contain max-h-[380px]"
            />
          </div>
        </section>

        {/* Right Form Section */}
        <section className="lg:col-span-5 lg:col-start-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">Forgot Password</h2>
          <p className="text-slate-600 text-sm mb-6">
            Enter your email address below and we'll send you a link to reset your password.
          </p>

          {isSubmitted ? (
            <div className="bg-[#F0EDFF] border border-[#4C43D9]/30 p-6 rounded-2xl space-y-4">
              <div className="flex items-center gap-3 text-[#4C43D9]">
                <svg className="w-7 h-7 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="font-bold text-base">Reset link sent!</h3>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed">
                We have sent instructions to <span className="font-semibold text-slate-900">{email}</span>. Check your inbox to set a new password.
              </p>
              <button
                type="button"
                onClick={() => {
                  setIsSubmitted(false);
                  setEmail("");
                }}
                className="text-[#4C43D9] text-xs font-bold hover:underline block pt-2"
              >
                Send to a different email address
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMessage && (
                <div className="bg-red-50 text-red-600 text-xs px-4 py-3 rounded-xl border border-red-200">
                  {errorMessage}
                </div>
              )}

              <div>
                <input
                  type="email"
                  placeholder="Enter Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#F0EDFF] text-slate-800 placeholder-[#B4AEF6] px-5 py-4 rounded-xl text-sm font-medium border-none focus:outline-none focus:ring-2 focus:ring-[#4C43D9]/50 transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#4C43D9] hover:bg-[#3F36C8] text-white font-medium py-4 rounded-xl shadow-[0_10px_25px_rgba(76,67,217,0.35)] transition-all cursor-pointer text-base pt-3.5 mt-2 active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Send Reset Link"
                )}
              </button>
            </form>
          )}

          {/* Social Auth / Additional Navigation */}
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

export default ForgetPassword;