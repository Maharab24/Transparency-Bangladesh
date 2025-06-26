import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

const ManageAdmins = () => {
  const { user: currentAdmin } = useAuth();
  const [admins, setAdmins] = useState([
    { id: 1, name: 'Owner Admin', email: 'owner@example.com', role: 'owner', joinDate: '2023-01-01' },
    { id: 2, name: 'Admin Two', email: 'admin2@example.com', role: 'admin', joinDate: '2023-02-01' },
    { id: 3, name: 'Admin Three', email: 'admin3@example.com', role: 'admin', joinDate: '2023-03-01' },
  ]);

  const deleteAdmin = (adminId) => {
    // Only owner can delete admins
    if (currentAdmin.email !== 'owner@example.com') {
      alert('Only owner can delete admins!');
      return;
    }
    setAdmins(admins.filter(admin => admin.id !== adminId));
  };

  return (
    <div className="manage-admins">
      <h2>Manage Admins</h2>

      <div className="controls">
        <button>Add Admin</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Join Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {admins.map(admin => (
            <tr key={admin.id}>
              <td>{admin.id}</td>
              <td>{admin.name}</td>
              <td>{admin.email}</td>
              <td>{admin.role}</td>
              <td>{admin.joinDate}</td>
              <td>
                <button>Edit</button>
                {admin.role !== 'owner' && (
                  <button onClick={() => deleteAdmin(admin.id)}>Delete</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageAdmins;