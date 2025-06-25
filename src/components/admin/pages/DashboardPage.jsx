import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const DashboardPage = () => {
  const summaryData = {
    totalUsers: 2543,
    totalReports: 342,
    totalCases: 128,
    activeCases: 75,
    resolvedCases: 53,
    rewardsGiven: 42,
    upcomingEvents: 3
  };

  const reportData = [
    { division: 'Dhaka', reports: 142, cases: 45, resolved: 32 },
    { division: 'Chittagong', reports: 85, cases: 32, resolved: 28 },
    { division: 'Rajshahi', reports: 56, cases: 20, resolved: 15 },
    { division: 'Khulna', reports: 48, cases: 18, resolved: 12 },
    { division: 'Barishal', reports: 32, cases: 12, resolved: 8 },
    { division: 'Sylhet', reports: 27, cases: 10, resolved: 7 },
    { division: 'Rangpur', reports: 39, cases: 15, resolved: 10 },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Object.entries(summaryData).map(([key, value]) => (
          <div key={key} className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-gray-500 text-sm capitalize">{key.replace(/([A-Z])/g, ' $1')}</h3>
            <p className="text-2xl font-bold">{value}</p>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Reports and Cases by Division</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={reportData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="division" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="reports" fill="#4f46e5" />
            <Bar dataKey="cases" fill="#10b981" />
            <Bar dataKey="resolved" fill="#ef4444" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DashboardPage;