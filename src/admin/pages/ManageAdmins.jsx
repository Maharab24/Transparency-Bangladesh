import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

const ManageAdmins = () => {
  const { user: currentAdmin } = useAuth();
  const [admins, setAdmins] = useState([
    {
      id: 1,
      name: 'Owner Admin',
      email: 'owner@example.com',
      phone: '01234567890',
      role: 'owner',
      joinDate: '2023-01-01'
    },
    {
      id: 2,
      name: 'Admin Two',
      email: 'admin2@example.com',
      phone: '01987654321',
      role: 'admin',
      joinDate: '2023-02-01'
    },
    {
      id: 3,
      name: 'Admin Three',
      email: 'admin3@example.com',
      phone: '01555555555',
      role: 'admin',
      joinDate: '2023-03-01'
    },
  ]);

  const deleteAdmin = (adminId) => {
    if (currentAdmin?.email !== 'owner@example.com') {
      alert('Only owner can delete admins!');
      return;
    }
    setAdmins(admins.filter(admin => admin.id !== adminId));
  };

  return (
    <div className="manage-admins p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Manage Admins</h2>
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg shadow-md transition duration-300">
            Add New Admin
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Join Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {admins.map(admin => (
                <tr key={admin.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{admin.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{admin.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{admin.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{admin.phone}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                      ${admin.role === 'owner' ? 'bg-purple-100 text-purple-800' : 'bg-green-100 text-green-800'}`}>
                      {admin.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{admin.joinDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                    <button className="text-blue-600 hover:text-blue-900 transition-colors">
                      Edit
                    </button>
                    {admin.role !== 'owner' && (
                      <button
                        onClick={() => deleteAdmin(admin.id)}
                        className="text-red-600 hover:text-red-900 transition-colors"
                      >
                        Delete
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {admins.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No administrators found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageAdmins;