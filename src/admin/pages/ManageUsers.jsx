import { useState } from 'react';
import { FiSearch, FiEdit, FiTrash2, FiPhone } from 'react-icons/fi';

const ManageUsers = () => {
  // Updated mock user data with additional entries
  const [users, setUsers] = useState([
    { id: 1, name: 'User One', email: 'user1@example.com', phone: '+8801712345678', division: 'Dhaka', joinDate: '2023-01-15' },
    { id: 2, name: 'User Two', email: 'user2@example.com', phone: '+8801812345678', division: 'Chittagong', joinDate: '2023-02-20' },
    { id: 3, name: 'User Three', email: 'user3@example.com', phone: '+8801912345678', division: 'Rajshahi', joinDate: '2023-03-10' },
    { id: 4, name: 'User Four', email: 'user4@example.com', phone: '+8801523456789', division: 'Khulna', joinDate: '2023-04-05' },
    { id: 5, name: 'User Five', email: 'user5@example.com', phone: '+8801634567890', division: 'Sylhet', joinDate: '2023-05-12' },
    { id: 6, name: 'User Six', email: 'user6@example.com', phone: '+8801745678901', division: 'Barishal', joinDate: '2023-06-18' },
    { id: 7, name: 'User Seven', email: 'user7@example.com', phone: '+8801856789012', division: 'Mymensingh', joinDate: '2023-07-25' },
    { id: 8, name: 'User Eight', email: 'user8@example.com', phone: '+8801967890123', division: 'Rangpur', joinDate: '2023-08-30' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all'); // 'all', 'phone', 'division', 'email'

  const deleteUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  // Enhanced filter function
  const filteredUsers = users.filter(user => {
    const term = searchTerm.toLowerCase();

    if (filterType === 'phone') {
      return user.phone.includes(term);
    }

    if (filterType === 'division') {
      return user.division.toLowerCase().includes(term);
    }

    if (filterType === 'email') {
      return user.email.toLowerCase().includes(term);
    }

    // Default: search all fields
    return (
      user.name.toLowerCase().includes(term) ||
      user.email.toLowerCase().includes(term) ||
      user.phone.includes(term) ||
      user.division.toLowerCase().includes(term)
    );
  });

  return (
    <div className="pt-16 p-4 md:p-6 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Manage Users</h1>
          <p className="text-gray-500 mt-1">View and manage all registered users</p>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col md:flex-row gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder={`Search by ${filterType === 'all' ? 'any field' : filterType}...`}
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Filter type selector */}
              <div className="w-full md:w-auto">
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="w-full md:w-auto px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  <option value="all">All Fields</option>
                  <option value="phone">Phone Number</option>
                  <option value="division">Division</option>
                  <option value="email">Email</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* User Table */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    User
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contact
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Division
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Join Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center">
                          <span className="text-indigo-800 font-medium">
                            {user.name.charAt(0)}
                          </span>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{user.name}</div>
                          <div className="text-sm text-gray-500">ID: {user.id}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">{user.email}</div>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <FiPhone className="mr-1.5" />
                        {user.phone}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2.5 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                        {user.division}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {user.joinDate}
                    </td>
                    <td className="px-6 py-4 text-right text-sm font-medium">
                      <div className="flex justify-end space-x-3">
                        <button className="text-indigo-600 hover:text-indigo-900 transition-colors p-1.5 rounded-md hover:bg-indigo-50">
                          <FiEdit className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => deleteUser(user.id)}
                          className="text-red-600 hover:text-red-900 transition-colors p-1.5 rounded-md hover:bg-red-50"
                        >
                          <FiTrash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Empty State */}
          {filteredUsers.length === 0 && (
            <div className="text-center py-12">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FiSearch className="text-gray-400 text-2xl" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">No users found</h3>
              <p className="text-gray-500 max-w-md mx-auto">
                {searchTerm
                  ? 'No users match your search criteria'
                  : 'No users available in the system'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;