import { useState } from 'react';

const ManageUsers = () => {
  // Mock user data
  const [users, setUsers] = useState([
    { id: 1, name: 'User One', email: 'user1@example.com', division: 'Dhaka', joinDate: '2023-01-15' },
    { id: 2, name: 'User Two', email: 'user2@example.com', division: 'Chittagong', joinDate: '2023-02-20' },
    { id: 3, name: 'User Three', email: 'user3@example.com', division: 'Rajshahi', joinDate: '2023-03-10' },
  ]);

  const deleteUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
    // In real app: API call to delete user and record who deleted
  };

  return (
    <div className="manage-users">
      <h2>Manage Users</h2>

      <div className="controls">
        <input type="text" placeholder="Search users..." />
        <button>Add User</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Division</th>
            <th>Join Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.division}</td>
              <td>{user.joinDate}</td>
              <td>
                <button>Edit</button>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;