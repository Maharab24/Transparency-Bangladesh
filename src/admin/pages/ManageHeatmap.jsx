import React, { useState, useEffect } from 'react';
import {
  FiMap,
  FiBarChart2,
  FiAward,
  FiAlertTriangle,
  FiTrendingUp,
  FiCheckCircle,
  FiActivity
} from 'react-icons/fi';

function ManageHeatmap() {
  const [heatmapData, setHeatmapData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalReported: 0,
    totalSolved: 0,
    totalActive: 0,
    highestReported: { division: '', count: 0 },
    highestSolved: { division: '', count: 0 },
    divisionData: []
  });

  // Mock data - replace with actual API calls
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const mockData = [
        { division: 'Dhaka', reportedCases: 142, solvedCases: 78, activeCases: 64 },
        { division: 'Chittagong', reportedCases: 98, solvedCases: 42, activeCases: 56 },
        { division: 'Rajshahi', reportedCases: 65, solvedCases: 35, activeCases: 30 },
        { division: 'Khulna', reportedCases: 52, solvedCases: 28, activeCases: 24 },
        { division: 'Barishal', reportedCases: 37, solvedCases: 15, activeCases: 22 },
        { division: 'Sylhet', reportedCases: 45, solvedCases: 20, activeCases: 25 },
        { division: 'Rangpur', reportedCases: 38, solvedCases: 18, activeCases: 20 },
        { division: 'Mymensingh', reportedCases: 29, solvedCases: 12, activeCases: 17 },
      ];

      // Calculate statistics
      const totalReported = mockData.reduce((sum, item) => sum + item.reportedCases, 0);
      const totalSolved = mockData.reduce((sum, item) => sum + item.solvedCases, 0);
      const totalActive = mockData.reduce((sum, item) => sum + item.activeCases, 0);

      // Find divisions with highest counts
      const highestReported = mockData.reduce((max, item) =>
        item.reportedCases > max.count ? { division: item.division, count: item.reportedCases } : max,
        { division: '', count: 0 }
      );

      const highestSolved = mockData.reduce((max, item) =>
        item.solvedCases > max.count ? { division: item.division, count: item.solvedCases } : max,
        { division: '', count: 0 }
      );

      setHeatmapData(mockData);
      setStats({
        totalReported,
        totalSolved,
        totalActive,
        highestReported,
        highestSolved,
        divisionData: mockData
      });
      setLoading(false);
    }, 1500);
  }, []);

  const getPercentage = (value, total) => {
    return total > 0 ? Math.round((value / total) * 100) : 0;
  };

  const getBarWidth = (value, max) => {
    return max > 0 ? Math.round((value / max) * 100) : 0;
  };

  const getMaxReported = () => {
    return Math.max(...heatmapData.map(item => item.reportedCases), 1);
  };

  const getMaxSolved = () => {
    return Math.max(...heatmapData.map(item => item.solvedCases), 1);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center mb-4 md:mb-0">
          <FiMap className="mr-3 text-orange-500" />
          Corruption Heatmap Dashboard
        </h1>
        <div className="text-sm text-gray-600 bg-orange-50 p-3 rounded-lg">
          <FiActivity className="inline mr-2 text-orange-500" />
          Data updates automatically from reports and cases
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-blue-500">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-gray-500 font-medium">Total Reported Cases</h3>
              <p className="text-3xl font-bold mt-2">{stats.totalReported}</p>
              <p className="text-sm text-gray-500 mt-1">Across all divisions</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <FiAlertTriangle className="text-blue-600 text-xl" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-green-500">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-gray-500 font-medium">Total Solved Cases</h3>
              <p className="text-3xl font-bold mt-2">{stats.totalSolved}</p>
              <div className="mt-1">
                <span className="text-sm text-gray-500">
                  {getPercentage(stats.totalSolved, stats.totalReported)}% of total
                </span>
              </div>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <FiCheckCircle className="text-green-600 text-xl" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-orange-500">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-gray-500 font-medium">Total Active Cases</h3>
              <p className="text-3xl font-bold mt-2">{stats.totalActive}</p>
              <div className="mt-1">
                <span className="text-sm text-gray-500">
                  {getPercentage(stats.totalActive, stats.totalReported)}% of total
                </span>
              </div>
            </div>
            <div className="bg-orange-100 p-3 rounded-full">
              <FiTrendingUp className="text-orange-600 text-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Highlight Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
          <div className="flex items-center mb-4">
            <FiAlertTriangle className="text-blue-600 mr-3 text-xl" />
            <h3 className="text-lg font-bold text-gray-800">Highest Reported Cases</h3>
          </div>
          <div className="flex items-end">
            <div className="text-4xl font-bold text-blue-600">{stats.highestReported.count}</div>
            <div className="ml-4">
              <div className="text-xl font-semibold">{stats.highestReported.division}</div>
              <p className="text-sm text-gray-600">
                {getPercentage(stats.highestReported.count, stats.totalReported)}% of national total
              </p>
            </div>
          </div>
          <div className="mt-4">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${getPercentage(stats.highestReported.count, stats.totalReported)}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-6 border border-green-200">
          <div className="flex items-center mb-4">
            <FiAward className="text-green-600 mr-3 text-xl" />
            <h3 className="text-lg font-bold text-gray-800">Highest Solved Cases</h3>
          </div>
          <div className="flex items-end">
            <div className="text-4xl font-bold text-green-600">{stats.highestSolved.count}</div>
            <div className="ml-4">
              <div className="text-xl font-semibold">{stats.highestSolved.division}</div>
              <p className="text-sm text-gray-600">
                {getPercentage(stats.highestSolved.count, stats.totalSolved)}% of national solved
              </p>
            </div>
          </div>
          <div className="mt-4">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-green-600 h-2.5 rounded-full"
                style={{ width: `${getPercentage(stats.highestSolved.count, stats.totalSolved)}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Heatmap Table */}
      <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h2 className="text-xl font-bold text-gray-800 flex items-center mb-4 md:mb-0">
            <FiBarChart2 className="mr-3 text-orange-500" />
            Division-wise Corruption Statistics
          </h2>
          <div className="text-sm text-gray-500">
            Data updated: {new Date().toLocaleDateString()}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Division</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reported Cases</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Solved Cases</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Active Cases</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Resolution Rate</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {heatmapData.map((division) => {
                const resolutionRate = getPercentage(division.solvedCases, division.reportedCases);
                const maxReported = getMaxReported();
                const maxSolved = getMaxSolved();

                return (
                  <tr key={division.division} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                      {division.division}
                    </td>

                    {/* Reported Cases */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-gray-700 font-medium">{division.reportedCases}</div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${getBarWidth(division.reportedCases, maxReported)}%` }}
                        ></div>
                      </div>
                    </td>

                    {/* Solved Cases */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-gray-700 font-medium">{division.solvedCases}</div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                        <div
                          className="bg-green-600 h-2 rounded-full"
                          style={{ width: `${getBarWidth(division.solvedCases, maxSolved)}%` }}
                        ></div>
                      </div>
                    </td>

                    {/* Active Cases */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-gray-700 font-medium">{division.activeCases}</div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                        <div
                          className="bg-orange-600 h-2 rounded-full"
                          style={{ width: `${getBarWidth(division.activeCases, maxReported)}%` }}
                        ></div>
                      </div>
                    </td>

                    {/* Resolution Rate */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className={`font-medium ${resolutionRate >= 60 ? 'text-green-600' : resolutionRate >= 40 ? 'text-yellow-600' : 'text-red-600'}`}>
                        {resolutionRate}%
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                        <div
                          className={`h-2 rounded-full ${resolutionRate >= 60 ? 'bg-green-600' : resolutionRate >= 40 ? 'bg-yellow-600' : 'bg-red-600'}`}
                          style={{ width: `${resolutionRate}%` }}
                        ></div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

    


    </div>
  );
}

export default ManageHeatmap;