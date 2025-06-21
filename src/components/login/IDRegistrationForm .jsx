import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const IDRegistrationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    nid: '',
    dob: '',
    phone: '',
    address: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        navigate('/LoginPage');
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isSubmitted, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }

    if (!formData.nid.trim()) {
      newErrors.nid = 'NID number is required';
    } else if (!/^\d{10,20}$/.test(formData.nid)) {
      newErrors.nid = 'NID must be 10-20 digits';
    }

    if (!formData.dob) {
      newErrors.dob = 'Date of birth is required';
    } else {
      const dobDate = new Date(formData.dob);
      const today = new Date();
      const minAgeDate = new Date();
      minAgeDate.setFullYear(today.getFullYear() - 18);

      if (dobDate > minAgeDate) {
        newErrors.dob = 'You must be at least 18 years old';
      }
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9]{10,15}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    } else if (formData.address.trim().length < 10) {
      newErrors.address = 'Address is too short';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      nid: '',
      dob: '',
      phone: '',
      address: ''
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4"
         style={{
           
           backgroundSize: '400% 400%',
           animation: 'gradientBG 15s ease infinite'
         }}>
      <style jsx>{`
        @keyframes gradientBG {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .form-container {
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
        }

        .input-field:focus {
          box-shadow: 0 0 0 3px rgba(246, 130, 77, 0.3);
        }

        .notification {
          animation: slideIn 0.5s forwards;
        }

        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>

      <div className="w-full max-w-2xl">
        {isSubmitted && (
          <div className="notification fixed top-5 right-5 bg-[#099e20] text-white px-6 py-4 rounded-lg shadow-lg z-50">
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className='font-bold'>ID Created Successfully! Redirecting to login...</span>
            </div>
          </div>
        )}

        <div className="form-container bg-white rounded-xl overflow-hidden">
          <div className="bg-gradient-to-r from-[#f6824d] to-[#c6542c] text-white p-6 md:p-8">
            <h1 className="text-2xl md:text-3xl font-bold flex items-center">
              <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"></path>
              </svg>
              User ID Registration
            </h1>
            <p className="mt-2 opacity-90">Create your new identification account</p>
          </div>

          <form onSubmit={handleSubmit} className="p-6 md:p-8">
            {/* Full Name Field */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2 flex items-center">
                <span>Full Name</span>
                <span className="text-red-500 ml-1">*</span>
                {errors.name && <span className="ml-2 text-red-500 text-sm font-normal">{errors.name}</span>}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg input-field ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-[#f6824d]`}
                  placeholder="Enter your full name"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* NID Card Number */}
              <div>
                <label className="block text-gray-700 font-medium mb-2 flex items-center">
                  <span>NID Card Number</span>
                  <span className="text-red-500 ml-1">*</span>
                  {errors.nid && <span className="ml-2 text-red-500 text-sm font-normal">{errors.nid}</span>}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="nid"
                    value={formData.nid}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg input-field ${
                      errors.nid ? 'border-red-500' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-[#f6824d]`}
                    placeholder="Enter NID number"
                  />
                </div>
              </div>

              {/* Date of Birth */}
              <div>
                <label className="block text-gray-700 font-medium mb-2 flex items-center">
                  <span>Date of Birth</span>
                  <span className="text-red-500 ml-1">*</span>
                  {errors.dob && <span className="ml-2 text-red-500 text-sm font-normal">{errors.dob}</span>}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg input-field ${
                      errors.dob ? 'border-red-500' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-[#f6824d]`}
                    max={(() => {
                      const today = new Date();
                      const minAgeDate = new Date();
                      minAgeDate.setFullYear(today.getFullYear() - 18);
                      return minAgeDate.toISOString().split('T')[0];
                    })()}
                  />
                </div>
              </div>
            </div>

            {/* Phone Number */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2 flex items-center">
                <span>Phone Number</span>
                <span className="text-red-500 ml-1">*</span>
                {errors.phone && <span className="ml-2 text-red-500 text-sm font-normal">{errors.phone}</span>}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg input-field ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-[#f6824d]`}
                  placeholder="Enter phone number"
                />
              </div>
            </div>

            {/* Present Address */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2 flex items-center">
                <span>Present Address</span>
                <span className="text-red-500 ml-1">*</span>
                {errors.address && <span className="ml-2 text-red-500 text-sm font-normal">{errors.address}</span>}
              </label>
              <div className="relative">
                <div className="absolute top-3 left-3">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg input-field ${
                    errors.address ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-[#f6824d]`}
                  placeholder="Enter your current address"
                  rows="4"
                ></textarea>
              </div>
            </div>

            {/* Form Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button
                type="submit"
                className="flex-1 bg-green-500 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#f6824d] focus:ring-opacity-50 flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
                Create ID
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="flex-1 bg-red-500 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                </svg>
                Reset Form
              </button>
            </div>
          </form>

          <div className="bg-gray-100 px-6 py-4 text-center text-gray-600 text-sm">
            <p>&copy; 2025 Transparency Bangladesh Registration System | All Rights Reserved</p>
          </div>
        </div>

        <div className="mt-6 text-center text-white text-sm">
          <p>Secure your identity with our encrypted registration process</p>
        </div>
      </div>
    </div>
  );
};

export default IDRegistrationForm;