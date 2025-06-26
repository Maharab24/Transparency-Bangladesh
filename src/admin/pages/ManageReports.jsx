import React, { useState, useEffect } from 'react';
import { FiEye, FiUser, FiFileText, FiMapPin, FiClock, FiX, FiCheck, FiUserCheck, FiUserX } from 'react-icons/fi';

function ManageReports() {
  const [reports, setReports] = useState([]);
  const [selectedReport, setSelectedReport] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState('all');
  const [updatingStatus, setUpdatingStatus] = useState(false);

  // Sample data with all reports set to 'pending' status by default
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setReports([
        {
          id: 'CR-001',
          type: 'Bribery',
          description: 'Government official demanded bribe for land registration approval',
          isAnonymous: false,
          user: {
            name: 'Abdul Rahman',
            nid: '1990123456789',
            phone: '+8801712345678',
            email: 'abdul.rahman@example.com'
          },
          division: 'Dhaka',
          status: 'pending', // Default status
          createdAt: '2025-06-25T10:30:00Z',
          files: ['evidence1.jpg', 'document.pdf']
        },
        {
          id: 'CR-002',
          type: 'Embezzlement',
          description: 'Misuse of disaster relief funds in local municipality',
          isAnonymous: true,
          division: 'Chittagong',
          status: 'pending', // Default status
          createdAt: '2025-06-26T14:45:00Z',
          files: ['evidence2.png']
        },
        {
          id: 'CR-003',
          type: 'Fraud',
          description: 'Fake recruitment process in government department',
          isAnonymous: false,
          user: {
            name: 'Fatima Begum',
            nid: '1985234567890',
            phone: '+8801812345678',
            email: 'fatima.begum@example.com'
          },
          division: 'Rajshahi',
          status: 'pending', // Default status
          createdAt: '2025-06-27T09:15:00Z',
          files: ['document1.pdf', 'document2.pdf']
        }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredReports = statusFilter === 'all'
    ? reports
    : reports.filter(report => report.status === statusFilter);

  const openReportDetails = (report) => {
    setSelectedReport(report);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedReport(null);
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'under_review': return 'bg-blue-100 text-blue-800';
      case 'resolved': return 'bg-green-100 text-green-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status) => {
    switch(status) {
      case 'pending': return 'Pending';
      case 'under_review': return 'Under Review';
      case 'resolved': return 'Resolved';
      case 'rejected': return 'Rejected';
      default: return 'Unknown';
    }
  };

  // Function to update report status
  const updateReportStatus = (newStatus) => {
    if (!selectedReport) return;

    setUpdatingStatus(true);

    // Simulate API call to update status
    setTimeout(() => {
      // Update the reports array with new status
      const updatedReports = reports.map(report =>
        report.id === selectedReport.id ? { ...report, status: newStatus } : report
      );

      setReports(updatedReports);

      // Update the selectedReport in modal
      setSelectedReport({ ...selectedReport, status: newStatus });

      setUpdatingStatus(false);

      // Close modal if resolved or rejected
      if (newStatus === 'resolved' || newStatus === 'rejected') {
        closeModal();
      }
    }, 800);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center mb-4 md:mb-0">
            <FiFileText className="mr-3 text-orange-500" />
            Manage Corruption Reports
          </h1>

          <div className="flex space-x-4">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500"
            >
              <option value="all">All Reports</option>
              <option value="pending">Pending</option>
              <option value="under_review">Under Review</option>
              <option value="resolved">Resolved</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reporter</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Division</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredReports.length === 0 ? (
                <tr>
                  <td colSpan="7" className="px-6 py-4 text-center text-gray-500">
                    No reports found
                  </td>
                </tr>
              ) : (
                filteredReports.map((report) => (
                  <tr key={report.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                      {report.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                      {report.type}
                    </td>
                    <td className="px-6 py-4 text-gray-700 max-w-xs truncate">
                      {report.description}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {report.isAnonymous ? (
                        <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                          Anonymous
                        </span>
                      ) : (
                        <span className="text-blue-600 font-medium">
                          {report.user.name}
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                      {report.division}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(report.status)}`}>
                        {getStatusText(report.status)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => openReportDetails(report)}
                        className="bg-red-100 text-red-700 hover:bg-red-200 transition-colors px-4 py-2 rounded-xl flex items-center"
                      >
                        <FiEye className="mr-2" />
                        View Details
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Report Details Modal */}
      {isModalOpen && selectedReport && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-white flex justify-between items-center">
              <h2 className="text-xl md:text-2xl font-bold">
                Report Details: {selectedReport.id}
                <span className={`ml-4 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedReport.status)}`}>
                  {getStatusText(selectedReport.status)}
                </span>
              </h2>
              <button
                onClick={closeModal}
                className="text-white hover:text-gray-200"
              >
                <FiX size={24} />
              </button>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                  <h3 className="font-bold text-gray-800 mb-3 flex items-center">
                    <FiFileText className="mr-2 text-orange-500" />
                    Report Information
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-500">Type</p>
                      <p className="font-medium">{selectedReport.type}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Division</p>
                      <p className="font-medium">{selectedReport.division}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Submitted</p>
                      <p className="font-medium flex items-center">
                        <FiClock className="mr-2" />
                        {new Date(selectedReport.createdAt).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                  <h3 className="font-bold text-gray-800 mb-3 flex items-center">
                    <FiUser className="mr-2 text-orange-500" />
                    Reporter Information
                  </h3>
                  {selectedReport.isAnonymous ? (
                    <div className="text-center py-4">
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-3" />
                      <p className="font-medium">Anonymous Report</p>
                      <p className="text-sm text-gray-500">No personal information available</p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-gray-500">Name</p>
                        <p className="font-medium">{selectedReport.user.name}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">NID</p>
                        <p className="font-medium">{selectedReport.user.nid}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Phone</p>
                        <p className="font-medium">{selectedReport.user.phone}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="font-medium">{selectedReport.user.email}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="font-bold text-gray-800 mb-3">Description</h3>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                  <p className="text-gray-700 whitespace-pre-line">{selectedReport.description}</p>
                </div>
              </div>

              {selectedReport.files && selectedReport.files.length > 0 && (
                <div className="mb-8">
                  <h3 className="font-bold text-gray-800 mb-3">Evidence</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {selectedReport.files.map((file, index) => (
                      <div
                        key={index}
                        className="border border-gray-200 rounded-xl p-4 flex items-center hover:bg-gray-50 cursor-pointer transition-colors"
                      >
                        <div className="bg-gray-100 p-3 rounded-lg mr-4">
                          <FiFileText className="text-gray-500 text-xl" />
                        </div>
                        <div className="truncate">
                          <p className="font-medium truncate">{file}</p>
                          <p className="text-sm text-gray-500">Click to download</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Status Update Section */}
              <div className="mt-8 mb-6">
                <h3 className="font-bold text-gray-800 mb-4">Update Report Status</h3>
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => updateReportStatus('pending')}
                    disabled={selectedReport.status === 'pending' || updatingStatus}
                    className={`px-6 py-3 rounded-xl font-medium flex items-center transition-all ${
                      selectedReport.status === 'pending'
                        ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                        : 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'
                    }`}
                  >
                    {updatingStatus && selectedReport.status === 'pending' ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-yellow-600 mr-2"></div>
                    ) : (
                      <FiClock className="mr-2" />
                    )}
                    Mark as Pending
                  </button>

                  <button
                    onClick={() => updateReportStatus('under_review')}
                    disabled={selectedReport.status === 'under_review' || updatingStatus}
                    className={`px-6 py-3 rounded-xl font-medium flex items-center transition-all ${
                      selectedReport.status === 'under_review'
                        ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                        : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                    }`}
                  >
                    {updatingStatus && selectedReport.status === 'under_review' ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-blue-600 mr-2"></div>
                    ) : (
                      <FiUserCheck className="mr-2" />
                    )}
                    Assign to Investigator
                  </button>

                  <button
                    onClick={() => updateReportStatus('resolved')}
                    disabled={selectedReport.status === 'resolved' || updatingStatus}
                    className={`px-6 py-3 rounded-xl font-medium flex items-center transition-all ${
                      selectedReport.status === 'resolved'
                        ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                        : 'bg-green-100 text-green-800 hover:bg-green-200'
                    }`}
                  >
                    {updatingStatus && selectedReport.status === 'resolved' ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-green-600 mr-2"></div>
                    ) : (
                      <FiCheck className="mr-2" />
                    )}
                    Mark as Resolved
                  </button>

                  <button
                    onClick={() => updateReportStatus('rejected')}
                    disabled={selectedReport.status === 'rejected' || updatingStatus}
                    className={`px-6 py-3 rounded-xl font-medium flex items-center transition-all ${
                      selectedReport.status === 'rejected'
                        ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                        : 'bg-red-100 text-red-800 hover:bg-red-200'
                    }`}
                  >
                    {updatingStatus && selectedReport.status === 'rejected' ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-red-600 mr-2"></div>
                    ) : (
                      <FiUserX className="mr-2" />
                    )}
                    Reject Report
                  </button>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 flex justify-end">
                <button
                  onClick={closeModal}
                  className="px-6 py-2 bg-gray-200 text-gray-800 rounded-xl font-medium hover:bg-gray-300 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ManageReports;


