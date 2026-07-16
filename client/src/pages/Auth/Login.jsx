import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { auth } from "../../lib/firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { toast } from "sonner";

export default function LoginPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const role = searchParams.get("role") || "patient";

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    try {
      setError('');
      setLoading(true);
      
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      
      let roleTitle = "Patient";
      if (role === "admin") roleTitle = "Admin";
      if (role === "doctor") roleTitle = "Doctor";

      toast.success(`Login successful! Welcome ${roleTitle}`);

      // Route based on role
      if (role === "admin") {
        navigate("/admin/dashboard");
      } else if (role === "doctor") {
        navigate("/doctor/dashboard");
      } else {
        navigate("/frontdesk"); 
      }
    } catch (err) {
      setError('Failed to sign in with Google');
      console.error("Firebase Login Error:", err);
      toast.error(err.message || "An error occurred during login");
    } finally {
      setLoading(false);
    }
  };

  const logo = "/hero.png";
  const brandName = "SehathCare";
  
  let headingText = "Patient Portal.";
  if (role === "admin") headingText = "Admin Portal.";
  if (role === "doctor") headingText = "Doctor Portal.";

  return (
    <div className="min-h-screen flex w-full bg-white font-sans text-black">
      {/* Left Panel: Graphic & Branding */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-blue-50 flex-col justify-center items-center overflow-hidden rounded-r-[40px] shadow-2xl z-10 p-0">
        <img src={logo} alt={`${brandName} Graphic`} className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
        {/* Subtle gradient overlay to blend image nicely */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-transparent mix-blend-overlay pointer-events-none"></div>
      </div>

      {/* Right Panel: Login Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 lg:p-24 relative bg-white">
        
        {/* Mobile Logo */}
        <div className="lg:hidden flex items-center gap-3 absolute top-8 left-8">
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">S</div>
          <span className="text-blue-600 font-bold tracking-widest text-xs uppercase">{brandName}</span>
        </div>

        <div className="w-full max-w-md flex flex-col items-center text-center">
          {/* Top Branding (Desktop) */}
          <div className="hidden lg:flex items-center gap-3 mb-12">
            <span className="text-blue-600 font-bold tracking-widest text-sm uppercase tracking-[0.2em]">{brandName}</span>
          </div>

          <div className="mb-12">
            <h1 className="text-blue-900 font-serif text-[48px] lg:text-[56px] leading-[1.1] mb-6 font-bold">
              {headingText}
            </h1>
            <p className="text-gray-500 text-base leading-relaxed max-w-sm mx-auto">
              Secure access to {brandName} systems. Please authenticate using your Google account to continue.
            </p>
          </div>

          {error && <div className="bg-red-50 text-red-500 p-3 rounded-lg text-sm mb-6 w-full">{error}</div>}

          {/* Google Sign In Button */}
          <div className="w-full mt-4">
            <button 
              onClick={handleGoogleSignIn}
              disabled={loading}
              className="w-full bg-blue-50 text-blue-900 border border-blue-200 font-bold py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-blue-100 transition-colors shadow-sm text-lg"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              {loading ? 'Authenticating...' : 'Sign In with Google'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
