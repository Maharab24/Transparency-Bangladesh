import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const UserDashboard = () => {
  const { user, updateUser } = useAuth();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [profileData, setProfileData] = useState({ ...user });

  // Sample case data
  const caseUpdates = [
    { id: 'C-1024', status: 'Under Review', lastUpdate: '2023-11-15', officer: 'Det. Smith' },
    { id: 'C-9812', status: 'Evidence Collected', lastUpdate: '2023-11-10', officer: 'Sgt. Johnson' },
    { id: 'C-7539', status: 'Closed', lastUpdate: '2023-10-28', officer: 'Capt. Davis' },
    { id: 'C-6218', status: 'Investigation Ongoing', lastUpdate: '2023-11-18', officer: 'Lt. Wilson' },
  ];

  // Status badge styling
  const getStatusClass = (status) => {
    switch(status.toLowerCase()) {
      case 'under review':
        return 'bg-blue-100 text-blue-800';
      case 'evidence collected':
        return 'bg-yellow-100 text-yellow-800';
      case 'investigation ongoing':
        return 'bg-purple-100 text-purple-800';
      case 'closed':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Handle profile edit
  const handleProfileEdit = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({ ...prev, [name]: value }));
  };

  // Submit profile changes
  const handleProfileSubmit = (e) => {
    e.preventDefault();
    updateUser(profileData);
    setIsEditModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      {/* Profile Edit Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-800">Edit Profile</h3>
                <button
                  onClick={() => setIsEditModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleProfileSubmit}>
                <div className="space-y-4">
                  {/* Non-editable fields */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      National ID (NID)
                    </label>
                    <div className="bg-gray-100 px-3 py-2 rounded-md text-gray-600">
                      {user.nid || 'N/A'}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Date of Birth
                    </label>
                    <div className="bg-gray-100 px-3 py-2 rounded-md text-gray-600">
                      {user.birthDate || 'N/A'}
                    </div>
                  </div>

                  {/* Editable fields */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={profileData.name || ''}
                      onChange={handleProfileEdit}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={profileData.email || ''}
                      onChange={handleProfileEdit}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={profileData.phone || ''}
                      onChange={handleProfileEdit}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                      Address
                    </label>
                    <textarea
                      name="address"
                      id="address"
                      value={profileData.address || ''}
                      onChange={handleProfileEdit}
                      rows="3"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    ></textarea>
                  </div>
                </div>

                <div className="mt-6 flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setIsEditModalOpen(false)}
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">User Dashboard</h1>

        {/* Welcome Card */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-xl font-semibold mb-2">Welcome, {user?.name}!</h2>
              <p className="text-gray-600">
                This is your dashboard where you can track your activities, reports, and case updates.
              </p>
            </div>
            <button
              onClick={() => setIsEditModalOpen(true)}
              className="text-indigo-600 hover:text-indigo-800 flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
              Edit Profile
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Feature Cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition cursor-pointer">
                  <h3 className="font-medium text-lg text-blue-800">Submit Report</h3>
                  <p className="mt-2 text-blue-600">File a new incident report</p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg hover:bg-green-100 transition cursor-pointer">
                  <h3 className="font-medium text-lg text-green-800">Case Tracking</h3>
                  <p className="mt-2 text-green-600">Track your reported cases</p>
                </div>

                <div
                  onClick={() => setIsEditModalOpen(true)}
                  className="bg-orange-50 p-4 rounded-lg hover:bg-orange-100 transition cursor-pointer"
                >
                  <h3 className="font-medium text-lg text-orange-800">Edit Profile</h3>
                  <p className="mt-2 text-orange-600">Update your personal information</p>
                </div>

               
              </div>
            </div>
          </div>

          {/* Right Column - Case Updates */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Your Case Updates</h3>
                <button className="text-sm bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700 transition">
                  View All Cases
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Case ID
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Last Update
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Assigned Officer
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {caseUpdates.map((caseItem) => (
                      <tr key={caseItem.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {caseItem.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(caseItem.status)}`}>
                            {caseItem.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {caseItem.lastUpdate}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {caseItem.officer}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button className="text-indigo-600 hover:text-indigo-900 mr-3">
                            Details
                          </button>
                          <button className="text-gray-600 hover:text-gray-900">
                            Message
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {caseUpdates.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-gray-500">You don't have any active cases.</p>
                  <button className="mt-2 text-indigo-600 hover:text-indigo-800 font-medium">
                    Submit your first report
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;