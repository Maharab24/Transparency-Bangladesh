import React, { useState, useEffect } from 'react';
import { FiSave, FiEdit, FiTrash2, FiPlus, FiX } from 'react-icons/fi';

const ManageGovtSpending = () => {
  // Initialize with sample data or empty
  const [budgetItems, setBudgetItems] = useState(() => {
    const savedItems = localStorage.getItem('budgetItems');
    return savedItems ? JSON.parse(savedItems) : [
      { id: 1, name: 'Education', budget: 400, actual: 380, color: '#003f5c' },
      { id: 2, name: 'Health', budget: 300, actual: 320, color: '#7a5195' },
      { id: 3, name: 'Infrastructure', budget: 300, actual: 290, color: '#ef5675' }
    ];
  });

  const [formData, setFormData] = useState({
    id: '',
    name: '',
    budget: '',
    actual: '',
    color: '#003f5c'
  });

  const [isEditing, setIsEditing] = useState(false);

  // Save to localStorage whenever budgetItems change
  useEffect(() => {
    localStorage.setItem('budgetItems', JSON.stringify(budgetItems));
  }, [budgetItems]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'budget' || name === 'actual' ? Number(value) : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.budget || !formData.actual) {
      alert('Please fill all required fields');
      return;
    }

    if (isEditing) {
      // Update existing item
      setBudgetItems(
        budgetItems.map(item =>
          item.id === formData.id ? { ...formData } : item
        )
      );
    } else {
      // Add new item
      const newItem = {
        ...formData,
        id: Date.now() // Generate unique ID
      };
      setBudgetItems([...budgetItems, newItem]);
    }

    resetForm();
  };

  const handleEdit = (item) => {
    setFormData(item);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      setBudgetItems(budgetItems.filter(item => item.id !== id));
    }
  };

  const resetForm = () => {
    setFormData({
      id: '',
      name: '',
      budget: '',
      actual: '',
      color: '#003f5c'
    });
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-4">
            <h1 className="text-2xl font-bold text-white">Government Spending Management</h1>
            <p className="text-blue-100">
              {isEditing ? 'Edit Budget Item' : 'Add New Budget Item'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Sector Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="e.g., Healthcare"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Color Code
                </label>
                <div className="flex items-center">
                  <input
                    type="color"
                    name="color"
                    value={formData.color}
                    onChange={handleInputChange}
                    className="w-10 h-10 border-0 rounded cursor-pointer"
                  />
                  <span className="ml-3 text-sm text-gray-500">{formData.color}</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Budget Allocation ($) *
                </label>
                <input
                  type="number"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="e.g., 5000000"
                  min="0"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Actual Spending ($) *
                </label>
                <input
                  type="number"
                  name="actual"
                  value={formData.actual}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="e.g., 4800000"
                  min="0"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-end space-x-3 pt-4 border-t border-gray-200">
              {isEditing && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="flex items-center px-4 py-2 text-sm text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
                >
                  <FiX className="mr-2" />
                  Cancel Edit
                </button>
              )}
              <button
                type="submit"
                className="flex items-center px-4 py-2 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
              >
                <FiSave className="mr-2" />
                {isEditing ? 'Update Item' : 'Add New Item'}
              </button>
            </div>
          </form>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold text-gray-800">Budget Items</h2>
              <p className="text-gray-600">
                {budgetItems.length} sector{budgetItems.length !== 1 ? 's' : ''} configured
              </p>
            </div>
            <div className="text-sm text-gray-500">
              Total Budget: ${budgetItems.reduce((sum, item) => sum + item.budget, 0).toLocaleString()}
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Sector
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Color
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Budget
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actual
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Variance
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {budgetItems.map((item) => {
                  const variance = item.actual - item.budget;
                  const variancePercent = ((variance / item.budget) * 100).toFixed(1);

                  return (
                    <tr key={item.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div
                            className="w-3 h-3 rounded-full mr-3"
                            style={{ backgroundColor: item.color }}
                          ></div>
                          <div className="text-sm font-medium text-gray-900">{item.name}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {item.color}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        ${item.budget.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        ${item.actual.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className={`text-sm font-medium ${
                          variance >= 0 ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {variance >= 0 ? '+' : ''}{variance.toLocaleString()} ({variancePercent}%)
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button
                          onClick={() => handleEdit(item)}
                          className="text-indigo-600 hover:text-indigo-900 mr-3"
                        >
                          <FiEdit className="inline mr-1" /> Edit
                        </button>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <FiTrash2 className="inline mr-1" /> Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}

                {budgetItems.length === 0 && (
                  <tr>
                    <td colSpan="6" className="px-6 py-4 text-center text-sm text-gray-500">
                      No budget items found. Add your first item using the form above.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-between items-center">
            <div className="text-sm text-gray-500">
              Data is saved automatically to your browser's local storage
            </div>
            <div>
              {budgetItems.length > 0 && (
                <button
                  onClick={() => {
                    if (window.confirm('Reset all data to default?')) {
                      localStorage.removeItem('budgetItems');
                      window.location.reload();
                    }
                  }}
                  className="text-sm text-red-600 hover:text-red-800"
                >
                  Reset to Default
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageGovtSpending;