const Dashboard = () => {
  // Mock data for dashboard
  const stats = [
    { title: 'Total Reports', value: 124, change: '+12%' },
    { title: 'Active Cases', value: 42, change: '-3%' },
    { title: 'Resolved Cases', value: 82, change: '+8%' },
    { title: 'Registered Users', value: 256, change: '+15%' }
  ];

  return (
    <div className="dashboard">
      <h2>Dashboard Overview</h2>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div className="stat-card" key={index}>
            <h3>{stat.title}</h3>
            <div className="stat-value">{stat.value}</div>
            <div className="stat-change">{stat.change}</div>
          </div>
        ))}
      </div>

      <div className="recent-activity">
        <h3>Recent Activity</h3>
        <ul>
          <li>Admin created new case #C-2023-00124</li>
          <li>User reported new corruption case in Dhaka</li>
          <li>Evidence added to case #C-2023-00120</li>
          <li>New admin added to the system</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;