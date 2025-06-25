import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import { useAuth } from '../../context/AuthContext';

const AdminHeader = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-white shadow">
      <div className="flex justify-between items-center p-4">
        <h2 className="text-xl font-semibold text-gray-800">
          {user ? `Welcome, ${user.name}` : 'Admin Dashboard'}
        </h2>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10" />
            <div className="hidden md:block">
              <p className="text-sm font-medium text-gray-700">{user?.name || 'Admin'}</p>
              <p className="text-xs text-gray-500">{user?.role || 'Administrator'}</p>
            </div>
          </div>
          <button
            onClick={logout}
            className="text-gray-600 hover:text-red-600"
            title="Logout"
          >
            <FiLogOut size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;