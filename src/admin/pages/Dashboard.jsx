const Dashboard = () => {
  const stats = [
    {
      title: 'Total Reports',
      value: 124,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      color: 'bg-blue-100 text-blue-600'
    },
    {
      title: 'Pending Cases',
      value: 24,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'bg-amber-100 text-amber-600'
    },
    {
      title: 'Active Cases',
      value: 42,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: 'bg-purple-100 text-purple-600'
    },
    {
      title: 'Resolved Cases',
      value: 82,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'bg-green-100 text-green-600'
    },
    {
      title: 'Registered Users',
      value: 256,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: 'bg-indigo-100 text-indigo-600'
    }
  ];

  return (
    <div className="pt-16 p-4 md:p-6 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Dashboard Overview</h1>
          <p className="text-gray-500 mt-2">Key metrics at a glance</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300 group"
            >
              <div className="flex justify-between items-start">
                <div className={`${stat.color} p-3 rounded-lg group-hover:opacity-90 transition-opacity`}>
                  {stat.icon}
                </div>
              </div>

              <div className="mt-4">
                <h3 className="text-sm font-medium text-gray-500 mb-1">{stat.title}</h3>
                <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Minimal Visualization */}
        <div className="mt-10 bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Case Distribution</h3>

          <div className="flex flex-col sm:flex-row gap-6">
            {/* Progress Bars */}
            <div className="flex-1 space-y-4">
              {[
                { title: 'Pending Cases', value: 24, color: 'bg-amber-500', width: '18%' },
                { title: 'Active Cases', value: 42, color: 'bg-purple-500', width: '32%' },
                { title: 'Resolved Cases', value: 82, color: 'bg-green-500', width: '63%' }
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-600">{item.title}</span>
                    <span className="text-sm font-medium text-gray-800">{item.value}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className={`${item.color} h-2.5 rounded-full`}
                      style={{ width: item.width }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Donut Chart */}
            <div className="relative flex items-center justify-center">
              <div className="relative w-40 h-40">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  {/* Resolved - Green */}
                  <circle
                    cx="50" cy="50" r="45"
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="10"
                    strokeDasharray="283"
                    strokeDashoffset="0"
                  />

                  {/* Active - Purple */}
                  <circle
                    cx="50" cy="50" r="45"
                    fill="none"
                    stroke="#8B5CF6"
                    strokeWidth="10"
                    strokeDasharray="283"
                    strokeDashoffset="100"
                  />

                  {/* Pending - Amber */}
                  <circle
                    cx="50" cy="50" r="45"
                    fill="none"
                    stroke="#F59E0B"
                    strokeWidth="10"
                    strokeDasharray="283"
                    strokeDashoffset="180"
                  />
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold text-gray-800">{stats[0].value}</span>
                  <span className="text-sm text-gray-500">Total Cases</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;