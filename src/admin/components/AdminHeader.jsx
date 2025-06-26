import { useAuth} from "../../context/AuthContext";

const AdminHeader = () => {
  const { user, logout } = useAuth();

  return (
    <div className="admin-header">
      <div className="header-left">
        <h1>Admin Panel</h1>
      </div>
      <div className="header-right">
        <div className="user-info">
          <span>{user?.name}</span>
          <small>{user?.role}</small>
        </div>
        <button onClick={logout} className="logout-btn">Logout</button>
      </div>
    </div>
  );
};

export default AdminHeader;