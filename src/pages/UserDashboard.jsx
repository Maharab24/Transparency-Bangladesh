import React from 'react';
import { useAuth } from '../context/AuthContext';

const UserDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">User Dashboard</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Welcome, {user?.name}!</h2>
          <p className="text-gray-600">
            This is your dashboard where you can track your activities, reports, and more.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-medium text-lg text-blue-800">Your Reports</h3>
              <p className="mt-2 text-blue-600">View and manage your submitted reports</p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-medium text-lg text-green-800">Case Tracking</h3>
              <p className="mt-2 text-green-600">Track the status of your reported cases</p>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="font-medium text-lg text-yellow-800">Rewards</h3>
              <p className="mt-2 text-yellow-600">View your earned rewards</p>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-medium text-lg text-purple-800">Settings</h3>
              <p className="mt-2 text-purple-600">Manage your account preferences</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;