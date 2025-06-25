import React, { useState } from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import UserManagement from '../../components/admin/pages/UserManagement';
import { useAuth } from '../../context/AuthContext';

const AdminUsers = () => {
  const { user } = useAuth();
  const [users] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'user', nid: '1234567890', phone: '0123456789', address: 'Dhaka' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'admin', nid: '0987654321', phone: '9876543210', address: 'Chittagong' },
    { id: 3, name: 'Ahmed Khan', email: 'ahmed@example.com', role: 'user', nid: '1122334455', phone: '0112233445', address: 'Rajshahi' },
    { id: 4, name: 'Fatima Begum', email: 'fatima@example.com', role: 'user', nid: '5566778899', phone: '0556677889', address: 'Khulna' },
    { id: 5, name: 'System Owner', email: 'owner@example.com', role: 'owner', nid: '0011223344', phone: '0001112223', address: 'Dhaka' },
  ]);

  const handleDeleteUser = (userId, userRole) => {
    if (userRole === 'admin' && user.role !== 'owner') {
      alert('Only the system owner can delete administrators');
      return;
    }

    // In a real app, this would be an API call
    alert(`User ${userId} deleted by ${user.name}`);
  };

  return (
    <AdminLayout>
      <UserManagement
        users={users}
        onDeleteUser={handleDeleteUser}
      />
    </AdminLayout>
  );
};

export default AdminUsers;