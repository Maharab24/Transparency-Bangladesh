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

  // State for Add Admin modal
  const [showAddModal, setShowAddModal] = useState(false);
  const [newAdmin, setNewAdmin] = useState({
    name: '',
    nid_card_number: '',
    date_of_birth: '',
    phone_number: '',
    address: '',
    division: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!newAdmin.name.trim()) newErrors.name = 'Name is required';
    if (!newAdmin.nid_card_number.trim()) newErrors.nid_card_number = 'NID is required';
    if (!newAdmin.date_of_birth) newErrors.date_of_birth = 'Date of birth is required';
    if (!newAdmin.phone_number.trim()) newErrors.phone_number = 'Phone number is required';
    if (!newAdmin.address.trim()) newErrors.address = 'Address is required';
    if (!newAdmin.division.trim()) newErrors.division = 'Division is required';
    if (!newAdmin.password) newErrors.password = 'Password is required';
    if (newAdmin.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (newAdmin.password !== newAdmin.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAdmin({
      ...newAdmin,
      [name]: value
    });

    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    // Create new admin object
    const adminToAdd = {
      id: admins.length + 1,
      name: newAdmin.name,
      email: `${newAdmin.name.replace(/\s+/g, '').toLowerCase()}@example.com`,
      phone: newAdmin.phone_number,
      role: 'admin',
      joinDate: new Date().toISOString().split('T')[0],
      // Additional fields for database
      nid_card_number: newAdmin.nid_card_number,
      date_of_birth: newAdmin.date_of_birth,
      address: newAdmin.address,
      division: newAdmin.division,
      password: newAdmin.password
    };

    // Add to admins list (in a real app, you would send to backend here)
    setAdmins([...admins, adminToAdd]);

    // Reset form and close modal
    setNewAdmin({
      name: '',
      nid_card_number: '',
      date_of_birth: '',
      phone_number: '',
      address: '',
      division: '',
      password: '',
      confirmPassword: ''
    });
    setShowAddModal(false);
    setErrors({});
  };

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
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg shadow-md transition duration-300"
          >
            Add New Admin
          </button>
        </div>

        {/* Add Admin Modal */}
        {showAddModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl">
              <div className="border-b p-4 flex justify-between items-center">
                <h3 className="text-xl font-semibold text-gray-800">Add New Administrator</h3>
                <button
                  onClick={() => setShowAddModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={newAdmin.name}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="Enter full name"
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      NID Card Number *
                    </label>
                    <input
                      type="text"
                      name="nid_card_number"
                      value={newAdmin.nid_card_number}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-md ${errors.nid_card_number ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="Enter NID number"
                    />
                    {errors.nid_card_number && <p className="mt-1 text-sm text-red-600">{errors.nid_card_number}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      name="date_of_birth"
                      value={newAdmin.date_of_birth}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-md ${errors.date_of_birth ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.date_of_birth && <p className="mt-1 text-sm text-red-600">{errors.date_of_birth}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone_number"
                      value={newAdmin.phone_number}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-md ${errors.phone_number ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="Enter phone number"
                    />
                    {errors.phone_number && <p className="mt-1 text-sm text-red-600">{errors.phone_number}</p>}
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Address *
                    </label>
                    <textarea
                      name="address"
                      value={newAdmin.address}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-md ${errors.address ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="Enter full address"
                      rows="3"
                    />
                    {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Division *
                    </label>
                    <select
                      name="division"
                      value={newAdmin.division}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-md ${errors.division ? 'border-red-500' : 'border-gray-300'}`}
                    >
                      <option value="">Select Division</option>
                      <option value="Dhaka">Dhaka</option>
                      <option value="Chattogram">Chattogram</option>
                      <option value="Khulna">Khulna</option>
                      <option value="Barishal">Barishal</option>
                      <option value="Mymensingh">Mymensingh</option>
                      <option value="Rajshahi">Rajshahi</option>
                      <option value="Rangpur">Rangpur</option>
                      <option value="Sylhet">Sylhet</option>
                    </select>
                    {errors.division && <p className="mt-1 text-sm text-red-600">{errors.division}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Password *
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={newAdmin.password}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-md ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="Create password"
                    />
                    {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Confirm Password *
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={newAdmin.confirmPassword}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-md ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="Confirm password"
                    />
                    {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>}
                  </div>
                </div>

                <div className="flex justify-end space-x-3 mt-6">
                  <button
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    Add Administrator
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Admins Table */}
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