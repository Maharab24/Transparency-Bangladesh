import React, { useState,useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiDownload, FiPrinter, FiSearch } from 'react-icons/fi';

const DetailedReport = () => {

    //show from top
  useEffect(() => {
    // Initialize scroll position
    window.scrollTo(0, 0);
  }, []);

  const [yearFilter, setYearFilter] = useState('2023');
  const [departmentFilter, setDepartmentFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Budget allocation data
  const budgetData = [
    { name: 'Education', budget: 400, actual: 380, variance: -20, color: '#003f5c' },
    { name: 'Health', budget: 300, actual: 320, variance: 20, color: '#7a5195' },
    { name: 'Infrastructure', budget: 300, actual: 290, variance: -10, color: '#ef5675' },
    { name: 'Defense', budget: 250, actual: 260, variance: 10, color: '#ff764a' },
    { name: 'Social Welfare', budget: 200, actual: 210, variance: 10, color: '#ffa600' },
    { name: 'Agriculture', budget: 180, actual: 170, variance: -10, color: '#00cc96' },
    { name: 'Environment', budget: 150, actual: 140, variance: -10, color: '#2ca02c' },
    { name: 'Technology', budget: 120, actual: 130, variance: 10, color: '#17becf' },
  ];

  // Yearly comparison data
  const yearlyData = [
    { year: '2020', budget: 1200, actual: 1180 },
    { year: '2021', budget: 1400, actual: 1380 },
    { year: '2022', budget: 1700, actual: 1650 },
    { year: '2023', budget: 2000, actual: 1950 },
  ];

  // Department spending data
  const departmentSpending = [
    { department: 'Ministry of Education', budget: 400, spent: 380, projects: 12 },
    { department: 'Health Department', budget: 300, spent: 320, projects: 8 },
    { department: 'Public Works', budget: 300, spent: 290, projects: 15 },
    { department: 'Defense Ministry', budget: 250, spent: 260, projects: 6 },
    { department: 'Social Services', budget: 200, spent: 210, projects: 10 },
    { department: 'Agriculture Board', budget: 180, spent: 170, projects: 7 },
    { department: 'Environment Agency', budget: 150, spent: 140, projects: 5 },
    { department: 'Tech Innovation', budget: 120, spent: 130, projects: 9 },
  ];

  // Filter data based on user selections
  const filteredData = budgetData.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  // Calculate totals
  const totalBudget = budgetData.reduce((sum, item) => sum + item.budget, 0);
  const totalActual = budgetData.reduce((sum, item) => sum + item.actual, 0);
  const totalVariance = totalActual - totalBudget;



  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header */}
      <header className="text-Black shadow-lg  bg-gradient-to-b from-orange-500 to-gray-100">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">

              <div>
                <h1 className="text-2xl md:text-3xl font-bold">Government Budget Allocation Report</h1>
                <p className="text-black-200">Detailed analysis of public spending and budget utilization</p>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* Filters */}
      <div className="container mx-auto px-4 py-6">
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Fiscal Year</label>
              <select
                value={yearFilter}
                onChange={(e) => setYearFilter(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
              <select
                value={departmentFilter}
                onChange={(e) => setDepartmentFilter(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="All">All Departments</option>
                {budgetData.map(item => (
                  <option key={item.name} value={item.name}>{item.name}</option>
                ))}
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Search Budget Items</label>
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search departments or projects..."
                  className="w-full p-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <FiSearch className="absolute left-3 top-3 text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Budget</h3>
            <p className="text-3xl font-bold text-gray-900">${totalBudget.toLocaleString()}</p>
            <div className="mt-2 flex items-center">
              <span className="text-green-500 mr-1">●</span>
              <span className="text-gray-600">Approved for {yearFilter}</span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Actual Spending</h3>
            <p className="text-3xl font-bold text-gray-900">${totalActual.toLocaleString()}</p>
            <div className="mt-2">
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                totalVariance >= 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {totalVariance >= 0 ? '+' : ''}{totalVariance.toLocaleString()} ({((totalVariance/totalBudget)*100).toFixed(1)}%)
              </span>
              <span className="text-gray-600 ml-2">vs Budget</span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-500">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Budget Utilization</h3>
            <p className="text-3xl font-bold text-gray-900">{((totalActual/totalBudget)*100).toFixed(1)}%</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-3">
              <div
                className="bg-purple-600 h-2.5 rounded-full"
                style={{ width: `${(totalActual/totalBudget)*100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Budget vs Actual Bar Chart */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Budget vs Actual Spending ({yearFilter})</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={filteredData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 50 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" angle={-45} textAnchor="end" height={70} />
                  <YAxis />
                  <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, '']} />
                  <Legend />
                  <Bar dataKey="budget" name="Budget" fill="#4f46e5" />
                  <Bar dataKey="actual" name="Actual" fill="#10b981" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Budget Allocation Pie Chart */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Budget Allocation by Sector</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={filteredData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="budget"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {filteredData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, '']} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Yearly Comparison */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Yearly Budget Comparison</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={yearlyData}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, '']} />
                <Legend />
                <Bar dataKey="budget" name="Budget" fill="#4f46e5" />
                <Bar dataKey="actual" name="Actual" fill="#10b981" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Detailed Spending Table */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-xl font-bold text-gray-800">Detailed Department Spending</h3>
            <p className="text-gray-600">Breakdown of budget allocation and utilization by department</p>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Department
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Budget
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Spent
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Variance
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Utilization
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Projects
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {departmentSpending.map((dept, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{dept.department}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">${dept.budget.toLocaleString()}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">${dept.spent.toLocaleString()}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className={`text-sm ${
                        (dept.spent - dept.budget) >= 0 ? 'text-green-600' : 'text-red-600'
                      }`}>
                        ${(dept.spent - dept.budget).toLocaleString()}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-24 bg-gray-200 rounded-full h-2.5 mr-2">
                          <div
                            className="h-2.5 rounded-full"
                            style={{
                              width: `${(dept.spent / dept.budget * 100)}%`,
                              backgroundColor: budgetData[index % budgetData.length].color
                            }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-500">{(dept.spent / dept.budget * 100).toFixed(1)}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {dept.projects}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Insights Section */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Key Insights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-blue-700 mb-2">Top Performing Departments</h4>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Health Department</span>
                  <span className="font-medium">107% utilization</span>
                </li>
                <li className="flex justify-between">
                  <span>Social Services</span>
                  <span className="font-medium">105% utilization</span>
                </li>
                <li className="flex justify-between">
                  <span>Tech Innovation</span>
                  <span className="font-medium">108% utilization</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-blue-700 mb-2">Areas for Improvement</h4>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Environment Agency</span>
                  <span className="font-medium">93% utilization</span>
                </li>
                <li className="flex justify-between">
                  <span>Agriculture Board</span>
                  <span className="font-medium">94% utilization</span>
                </li>
                <li className="flex justify-between">
                  <span>Public Works</span>
                  <span className="font-medium">97% utilization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default DetailedReport;