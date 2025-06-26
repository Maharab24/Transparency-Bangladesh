import { NavLink } from 'react-router-dom';

const AdminSidebar = () => {
  const menuItems = [
    { path: '/admin/dashboard', label: 'Dashboard', icon: 'dashboard' },
    { path: '/admin/users', label: 'Manage Users', icon: 'people' },
    { path: '/admin/admins', label: 'Manage Admins', icon: 'admin_panel_settings' },
    { path: '/admin/reports', label: 'Manage Reports', icon: 'report' },
    { path: '/admin/cases', label: 'Manage Cases', icon: 'list_alt' },
    { path: '/admin/heatmap', label: 'Manage Heatmap', icon: 'map' },
    { path: '/admin/education', label: 'Manage Education', icon: 'school' },
    { path: '/admin/rewards', label: 'Manage Rewards', icon: 'card_giftcard' },
    { path: '/admin/govt-spending', label: 'Govt Spending', icon: 'attach_money' },
  ];

  return (
    <div className="admin-sidebar">
      <div className="logo">Transparency Bangladesh</div>
      <ul>
        {menuItems.map(item => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              <span className="material-icons">{item.icon}</span>
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminSidebar;