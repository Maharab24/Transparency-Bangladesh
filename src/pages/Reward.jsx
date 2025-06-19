import { useEffect, useState } from 'react';
import { FiGift, FiAward, FiInfo, FiUser, FiCreditCard, FiPhone, FiCheckCircle } from 'react-icons/fi';

const Reward = () => {
   useEffect(() => {
    // Initialize scroll position
    window.scrollTo(0, 0);
  }, []);
  const [name, setName] = useState('');
  const [nid, setNid] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-3xl p-6 md:p-10 shadow-lg mb-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2">
            <div className="flex items-center mb-4">
              <FiGift className="text-orange-500 text-3xl mr-3" />
              <h1 className="text-3xl font-bold text-orange-700">Rewards for Integrity</h1>
            </div>
            <p className="text-lg text-orange-800 leading-relaxed">
              Stand against corruption and choose the path of integrity. Every honest action helps build a stronger, fairer society.
              Integrity earns trust, respect, and lasting rewards. Be the change that inspires others and leads to meaningful progress.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center shadow-xl">
                <FiGift className="text-white text-8xl opacity-80" />
              </div>
              <div className="absolute -top-3 -right-3 bg-white rounded-full p-3 shadow-lg">
                <div className="bg-gradient-to-r from-amber-400 to-orange-500 rounded-full w-16 h-16 flex items-center justify-center">
                  <FiAward className="text-white text-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rules Section */}
      <div className="mb-16">
        <div className="flex items-center mb-8">
          <FiInfo className="text-orange-500 text-2xl mr-3" />
          <h2 className="text-2xl font-bold text-orange-700">Reward System Rules</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl p-6 shadow-md transform transition-transform duration-500 hover:-translate-y-2">
            <div className="flex items-start mb-4">
              <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-full p-2 mr-4">
                <FiAward className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-bold text-orange-800">Reward Percentage</h3>
            </div>
            <p className="text-orange-700">
              Receive a <span className="font-bold text-amber-600">25% cash reward</span> based on the penalty amount recovered from the corrupt individual or organization.
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl p-6 shadow-md transform transition-transform duration-500 hover:-translate-y-2">
            <div className="flex items-start mb-4">
              <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-full p-2 mr-4">
                <FiCheckCircle className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-bold text-orange-800">Information Accuracy</h3>
            </div>
            <p className="text-orange-700">
              Be honest and provide accurate information. False reports will disqualify you from rewards and may lead to legal consequences.
            </p>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-r from-orange-200 to-amber-200 rounded-2xl p-6 border-l-4 border-orange-500">
          <h3 className="text-lg font-bold text-orange-800 mb-2">Important Note</h3>
          <p className="text-orange-700">
            Rewards are processed within 30 days after the penalty is collected. You'll be notified via SMS and email when your reward is ready.
          </p>
        </div>
      </div>

      {/* Reward Check Form */}
      <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-6 md:p-10 shadow-lg">
        <div className="flex items-center mb-8">
          <FiUser className="text-orange-500 text-2xl mr-3" />
          <h2 className="text-2xl font-bold text-orange-700">Check Your Rewards</h2>
        </div>

        {isSubmitted ? (
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 text-center border-2 border-green-200 shadow-md">
            <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <FiCheckCircle className="text-white text-4xl" />
            </div>
            <h3 className="text-2xl font-bold text-green-800 mb-3">Request Received!</h3>
            <p className="text-green-700 mb-6">
              We've received your information and are checking for eligible rewards. You'll receive an SMS within 24 hours with your reward status.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-medium hover:opacity-90 transition-all duration-300"
            >
              Check Another Reward
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-orange-700 font-medium mb-3">Full Name</label>
                <div className="relative">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your full name"
                    className="w-full p-4 pl-12 bg-white border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
                    required
                  />
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-400">
                    <FiUser className="text-xl" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-orange-700 font-medium mb-3">NID Number</label>
                <div className="relative">
                  <input
                    type="text"
                    value={nid}
                    onChange={(e) => setNid(e.target.value)}
                    placeholder="Your national ID number"
                    className="w-full p-4 pl-12 bg-white border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
                    required
                  />
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-400">
                    <FiCreditCard className="text-xl" />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-orange-700 font-medium mb-3">Phone Number</label>
              <div className="relative">
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Your contact number"
                  className="w-full p-4 pl-12 bg-white border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
                  required
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-400">
                  <FiPhone className="text-xl" />
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button
                type="submit"
                className="px-8 py-4 rounded-xl font-bold text-white flex items-center mx-auto bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <FiGift className="mr-3 text-xl" />
                Check My Rewards
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Additional Info */}
      <div className="mt-12 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-6 border border-amber-200">
        <h3 className="text-xl font-bold text-amber-700 mb-4">Reward Eligibility Criteria</h3>
        <ul className="space-y-3 text-amber-700">
          <li className="flex items-start">
            <div className="bg-amber-100 p-1 rounded-full mr-3 mt-1">
              <FiCheckCircle className="w-4 h-4 text-amber-600" />
            </div>
            <span>Rewards are only for verified reports that lead to penalties</span>
          </li>
          <li className="flex items-start">
            <div className="bg-amber-100 p-1 rounded-full mr-3 mt-1">
              <FiCheckCircle className="w-4 h-4 text-amber-600" />
            </div>
            <span>Minimum reward amount is ৳1,000</span>
          </li>
          <li className="flex items-start">
            <div className="bg-amber-100 p-1 rounded-full mr-3 mt-1">
              <FiCheckCircle className="w-4 h-4 text-amber-600" />
            </div>
            <span>Rewards are paid via bKash, Nagad, or bank transfer</span>
          </li>
          <li className="flex items-start">
            <div className="bg-amber-100 p-1 rounded-full mr-3 mt-1">
              <FiCheckCircle className="w-4 h-4 text-amber-600" />
            </div>
            <span>Taxes may apply to rewards over ৳50,000</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Reward;