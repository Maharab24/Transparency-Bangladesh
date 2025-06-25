import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  FiHome, FiUsers, FiFlag, FiBook, FiDollarSign,
  FiMap, FiBarChart2, FiCalendar, FiDatabase, FiX,
  FiMenu
} from 'react-icons/fi';

const AdminSidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const navItems = [
    { path: 'dashboard', icon: FiHome, label: 'Dashboard' },
    { path: 'users', icon: FiUsers, label: 'User Management' },
    { path: 'reports', icon: FiFlag, label: 'Report Management' },
    { path: 'cases', icon: FiBook, label: 'Case Management' },
    { path: 'heatmap', icon: FiMap, label: 'Corruption Heatmap' },
    { path: 'rewards', icon: FiDollarSign, label: 'Reward System' },
    { path: 'spending', icon: FiBarChart2, label: 'Spending Tracker' },
    { path: 'events', icon: FiCalendar, label: 'Event Management' },
    { path: 'trainers', icon: FiUsers, label: 'Trainer Management' },
    { path: 'database', icon: FiDatabase, label: 'Database Admin' },
  ];

  return (
    <div className={`bg-blue-800 text-white ${sidebarOpen ? 'w-64' : 'w-20'} transition-all duration-300 ease-in-out flex flex-col`}>
      <div className="p-4 flex justify-between items-center border-b border-blue-700">
        {sidebarOpen && <h1 className="text-xl font-bold">Transparency Admin</h1>}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-white focus:outline-none"
        >
          {sidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      <nav className="flex-1 mt-4">
        <ul>
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({isActive}) =>
                  `flex items-center p-4 hover:bg-blue-700 ${isActive ? 'bg-blue-700' : ''}`
                }
              >
                <item.icon size={20} />
                {sidebarOpen && <span className="ml-4">{item.label}</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default AdminSidebar;