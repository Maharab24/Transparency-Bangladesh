import React, { useState, useEffect } from 'react';
import { FiSend, FiUser, FiFileText, FiCreditCard, FiPhone, FiChevronDown, FiEyeOff, FiAward } from 'react-icons/fi';

const ReportingTool = () => {
  const [problemType, setProblemType] = useState('');
  const [description, setDescription] = useState('');
  const [name, setName] = useState('');
  const [nid, setNid] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [showRewardInfo, setShowRewardInfo] = useState(false);

  const problemTypes = [
    'Bribery',
    'Embezzlement',
    'Fraud',
    'Nepotism',
    'Abuse of Power',
    'Procurement Corruption',
    'Other'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form after success
      setTimeout(() => {
        setProblemType('');
        setDescription('');
        setName('');
        setNid('');
        setPhone('');
        setIsSubmitted(false);
        setIsAnonymous(false);
      }, 4000);
    }, 1500);
  };

    useEffect(() => {
    // Initialize scroll position
    window.scrollTo(0, 0)},[])

  const handleAnonymousToggle = () => {
    setIsAnonymous(!isAnonymous);


    // Clear personal info when switching to anonymous
    if (!isAnonymous) {
      setName('');
      setNid('');
      setPhone('');
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] p-6">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center transform transition-all duration-700 scale-100 animate-fade-in">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-3">Report Submitted Successfully!</h2>
          <p className="text-gray-600 mb-6">
            {isAnonymous
              ? "Your anonymous report has been received. Thank you for helping fight corruption."
              : "Thank you for your detailed report. Our team will review it and contact you if needed."}
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-medium hover:opacity-90 transition-all duration-300 transform hover:scale-105"
          >
            Submit Another Report
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl">
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-white">
          <h1 className="text-2xl md:text-3xl font-bold flex items-center">
            <FiFileText className="mr-3" />
            Corruption Reporting Tool
          </h1>
          <p className="mt-2 opacity-90">
            Help us fight corruption by providing detailed information about incidents
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 md:p-8">
          {/* Problem Type */}
          <div className="mb-8">
            <label className="block text-gray-700 font-medium mb-3 flex items-center">
              <FiChevronDown className="mr-2" />
              Problem Type
            </label>
            <div className="relative">
              <select
                value={problemType}
                onChange={(e) => setProblemType(e.target.value)}
                className="w-full p-4 pl-12 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 appearance-none"
                required
              >
                <option value="" disabled>Select a problem type</option>
                {problemTypes.map((type, index) => (
                  <option key={index} value={type}>{type}</option>
                ))}
              </select>
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <FiFileText />
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <label className="block text-gray-700 font-medium mb-3">
              Description of the Incident
            </label>
            <div className="">
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={6}
                placeholder="Please provide as much detail as possible about the corruption incident, including location, people involved, dates, and any evidence you might have..."
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 resize-none"
                required
              ></textarea>
              <div className="absolute top-4 left-4 text-gray-400">
                <FiFileText />
              </div>
            </div>
          </div>

          {/* Anonymous Option */}
          <div className="mb-8 p-4 bg-blue-50 rounded-xl border border-blue-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <FiEyeOff className="text-blue-600 mr-3 text-xl" />
                <div>
                  <h3 className="font-bold text-gray-800">Submit Anonymously</h3>
                  <p className="text-sm text-gray-600">Your identity will not be recorded</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={isAnonymous}
                  onChange={handleAnonymousToggle}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
              </label>
            </div>

            {isAnonymous && (
              <div className="mt-4 p-3 bg-white rounded-lg border border-blue-200">
                <p className="text-gray-700">
                  <span className="font-bold text-orange-600">Note:</span> By submitting anonymously,
                  you will <span className="font-bold">not be eligible</span> for our reward program.
                  If you wish to receive potential rewards, please provide your information below.
                </p>
              </div>
            )}
          </div>

          {/* Reporter Information - Conditionally Rendered */}
          {!isAnonymous && (
            <div className="border-t border-gray-100 pt-8 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-800 flex items-center">
                  <FiUser className="mr-3 text-orange-500" />
                  Reporter Information
                </h2>

                <button
                  type="button"
                  onClick={() => setShowRewardInfo(!showRewardInfo)}
                  className="flex items-center text-sm text-orange-600 font-medium"
                >
                  <FiAward className="mr-1" />
                  {showRewardInfo ? 'Hide Reward Info' : 'About Rewards'}
                </button>
              </div>

              {showRewardInfo && (
                <div className="mb-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <h3 className="font-bold text-gray-800 mb-2 flex items-center">
                    <FiAward className="mr-2 text-orange-500" />
                    Reward Program Information
                  </h3>
                  <p className="text-gray-700 mb-2">
                    Our reward program offers compensation for verified reports that lead to successful anti-corruption actions.
                  </p>
                  <ul className="text-gray-700 list-disc pl-5 space-y-1">
                    <li>You will get 25% tk from criminal's fine</li>
                    <li>Payments are made securely and confidentially</li>
                    <li>You must provide valid contact information to be eligible</li>
                  </ul>
                </div>
              )}

              <p className="text-gray-600 mb-6">
                Providing your information is required to be eligible for our reward program.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block text-gray-700 font-medium mb-3">Full Name</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your full name"
                      className="w-full p-4 pl-12 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
                      required={!isAnonymous}
                    />
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <FiUser />
                    </div>
                  </div>
                </div>

                {/* NID */}
                <div>
                  <label className="block text-gray-700 font-medium mb-3">National ID (NID)</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={nid}
                      onChange={(e) => setNid(e.target.value)}
                      placeholder="Your national ID number"
                      className="w-full p-4 pl-12 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
                      required={!isAnonymous}
                    />
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <FiCreditCard />
                    </div>
                  </div>
                </div>

                {/* Phone Number */}
                <div className="md:col-span-2">
                  <label className="block text-gray-700 font-medium mb-3">Phone Number</label>
                  <div className="relative">
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Your contact number"
                      className="w-full p-4 pl-12 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
                      required={!isAnonymous}
                    />
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <FiPhone />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <div className="flex justify-center mt-10">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-8 py-4 rounded-xl font-bold text-white flex items-center transition-all duration-300 transform hover:scale-105 ${
                isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-lg'
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                <>
                  <FiSend className="mr-3" />
                  {isAnonymous ? "Submit Anonymously" : "Submit Report"}
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Additional Information */}
      <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Your Safety is Our Priority</h3>
        <ul className="space-y-3 text-gray-600">
          <li className="flex items-start">
            <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <span>All reports are treated with strict confidentiality</span>
          </li>
          <li className="flex items-start">
            <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <span>Anonymous reports contain no personally identifiable information</span>
          </li>
          <li className="flex items-start">
            <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <span>Reports are encrypted and securely stored</span>
          </li>
          <li className="flex items-start">
            <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <span>Our team reviews every report within 48 hours</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ReportingTool;