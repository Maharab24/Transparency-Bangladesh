import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import DashboardPage from '../../components/admin/pages/DashboardPage';

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <DashboardPage />
    </AdminLayout>
  );
};

export default AdminDashboard;