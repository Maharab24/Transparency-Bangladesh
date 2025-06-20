// src/components/LoginPage.jsx
import React, { useState } from 'react';

const LoginPage = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [activeTab, setActiveTab] = useState('user');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Here you would typically handle login logic
    alert(`Login attempt as ${activeTab}: ${phone}`);
  };

  const toggleForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Custom SVG icons with the new primary color
  const ShieldIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#f6824d">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );

  const LockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#f6824d">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  );

  const FingerprintIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#f6824d">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
    </svg>
  );

  const LoginIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#f6824d">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
    </svg>
  );

  const UserPlusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#f6824d">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
    </svg>
  );

  const AdminIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#f6824d">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 7H6a2 2 0 00-2 2v9a2 2 0 002 2h12a2 2 0 002-2v-9a2 2 0 00-2-2h-4M10 7V5a2 2 0 114 0v2m-4 0h4m-8 4h.01M14 11h.01" />
    </svg>
  );

  const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#f6824d">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );

  const BackIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#f6824d">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff5f0] to-[#ffece0] flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="flex flex-col md:flex-row rounded-2xl shadow-2xl overflow-hidden bg-white">
          {/* Left Side - Branding & Info */}
          <div className="w-full md:w-2/5 bg-gradient-to-br from-[#f6824d] to-[#e05a2a] text-white p-8 flex flex-col">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-white p-3 rounded-xl">
                  <ShieldIcon />
                </div>
                <h1 className="text-3xl font-bold">SecurePortal</h1>
              </div>
              <p className="text-[#ffd8c5]">Enterprise-grade security for your digital assets</p>
            </div>

            <div className="mt-auto">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#ff9d6d]/20 p-3 rounded-xl">
                  <LockIcon />
                </div>
                <div>
                  <h3 className="font-bold">End-to-end encryption</h3>
                  <p className="text-[#ffd8c5] text-sm">All data is encrypted in transit and at rest</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-[#ff9d6d]/20 p-3 rounded-xl">
                  <FingerprintIcon />
                </div>
                <div>
                  <h3 className="font-bold">Biometric authentication</h3>
                  <p className="text-[#ffd8c5] text-sm">Support for fingerprint and facial recognition</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="w-full md:w-3/5 p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h2>
            <p className="text-gray-600 mb-8">Sign in to access your account</p>

            {/* Initial View - Login/Signup Buttons */}
            {!showLoginForm ? (
              <div className="space-y-6">
                <button
                  onClick={toggleForm}
                  className="btn w-full text-lg bg-[#f6824d] border-[#f6824d] hover:bg-[#e05a2a] text-white"
                >
                  <LoginIcon className="mr-2 inline-block" />
                  Login to your account
                </button>

                <div className="divider text-gray-400">OR</div>

                <div>
                  <p className="text-gray-600 text-center mb-4">Don't have an account yet?</p>
                  <button className="btn btn-outline w-full text-lg border-[#f6824d] text-[#f6824d] hover:bg-[#f6824d] hover:text-white">
                    <UserPlusIcon className="mr-2 inline-block" />
                    Create new account
                  </button>
                </div>

                <div className="text-center mt-8">
                  <button
                    onClick={() => {
                      setActiveTab('admin');
                      setShowLoginForm(true);
                    }}
                    className="btn btn-ghost text-[#f6824d] hover:bg-[#fff5f0]"
                  >
                    <AdminIcon className="mr-2 inline-block" />
                    Admin Login
                  </button>
                </div>
              </div>
            ) : (
              /* Login Form - Now with Phone Number */
              <div>
                <div className="tabs mb-6">
                  <button
                    className={`tab tab-bordered text-lg font-medium ${activeTab === 'user' ? 'tab-active border-[#f6824d] text-[#f6824d]' : ''}`}
                    onClick={() => handleTabChange('user')}
                  >
                    User
                  </button>
                  <button
                    className={`tab tab-bordered text-lg font-medium ${activeTab === 'admin' ? 'tab-active border-[#f6824d] text-[#f6824d]' : ''}`}
                    onClick={() => handleTabChange('admin')}
                  >
                    Admin
                  </button>
                </div>

                <form onSubmit={handleLogin}>
                  <div className="form-control mb-4">
                    <label className="label">
                      <span className="label-text text-lg">Phone Number</span>
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                        <PhoneIcon />
                      </span>
                      <input
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        className="input input-bordered w-full pl-10 text-lg py-4"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      />
                    </div>
                    <label className="label">
                      <span className="label-text-alt text-gray-500">Format: 123-456-7890</span>
                    </label>
                  </div>

                  <div className="form-control mb-6">
                    <label className="label">
                      <span className="label-text text-lg">Password</span>
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                        <LockIcon />
                      </span>
                      <input
                        type="password"
                        placeholder="••••••••"
                        className="input input-bordered w-full pl-10 text-lg py-4"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="flex justify-between items-center mb-6">
                    <label className="cursor-pointer label">
                      <input
                        type="checkbox"
                        className="checkbox"
                        style={{ accentColor: "#f6824d" }}
                        checked={rememberMe}
                        onChange={() => setRememberMe(!rememberMe)}
                      />
                      <span className="label-text ml-2 text-gray-700">Remember me</span>
                    </label>
                    <a href="#" className="text-[#f6824d] hover:underline">Forgot password?</a>
                  </div>

                  <button type="submit" className="btn w-full text-lg py-4 bg-[#f6824d] border-[#f6824d] hover:bg-[#e05a2a] text-white">
                    Sign In
                  </button>
                </form>

                <div className="text-center mt-6">
                  <button
                    onClick={toggleForm}
                    className="btn btn-ghost text-[#f6824d] hover:bg-[#fff5f0]"
                  >
                    <BackIcon className="mr-2 inline-block" />
                    Back
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="text-center mt-8 text-gray-600">
          <p>© 2023 SecurePortal. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-[#f6824d]">Privacy Policy</a>
            <a href="#" className="hover:text-[#f6824d]">Terms of Service</a>
            <a href="#" className="hover:text-[#f6824d]">Contact Support</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;