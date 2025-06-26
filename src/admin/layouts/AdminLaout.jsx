import { Outlet } from 'react-router-dom';
import AdminSidebar from '../components/AdminSidebar';
import AdminHeader from '../components/AdminHeader';

const AdminLayout = () => {
  return (
    <div className="admin-container">
      <AdminSidebar />
      <div className="admin-content">
        <AdminHeader />
        <div className="admin-main">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;