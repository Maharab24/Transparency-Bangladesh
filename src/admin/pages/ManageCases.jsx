import React, { useState, useEffect } from 'react';
import {
  FiEye,
  FiUser,
  FiFileText,
  FiMapPin,
  FiClock,
  FiX,
  FiCheck,
  FiUserCheck,
  FiUserX,
  FiDollarSign,
  FiUsers
} from 'react-icons/fi';

function ManageCases() {
  const [cases, setCases] = useState([]);
  const [selectedCase, setSelectedCase] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState('all');
  const [updatingStatus, setUpdatingStatus] = useState(false);

  // Sample data with all cases
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setCases([
        {
          referenceNumber: 'ACC-20250101-1234',
          complainant: {
            fullName: 'Abdul Rahman',
            nid: '1990123456789',
            mobile: '+8801712345678',
            email: 'abdul.rahman@example.com',
            profession: 'Engineer',
            address: '123 Main Street, Dhaka',
            division: 'Dhaka'
          },
          accused: {
            name: 'XYZ Corporation',
            position: 'Project Manager',
            office: 'Ministry of Infrastructure',
            address: '456 Government Road, Dhaka'
          },
          incident: {
            date: '2025-01-15',
            time: '14:30',
            location: 'Government Office Building',
            division: 'Dhaka',
            type: 'Bribery',
            amount: '500000',
            description: 'Demanded bribe for project approval'
          },
          witnesses: [
            { name: 'Fatima Begum', contact: '+8801812345678' },
            { name: 'Rahim Khan', contact: 'rahim@example.com' }
          ],
          evidence: ['document1.pdf', 'photo1.jpg', 'audio1.mp3'],
          status: 'investigation',
          createdAt: '2025-01-16T10:30:00Z',
          updatedAt: '2025-01-20T14:45:00Z',
          punishment: null
        },
        {
          referenceNumber: 'ACC-20250102-5678',
          complainant: {
            fullName: 'Sakib Hasan',
            nid: '1985123456789',
            mobile: '+8801912345678',
            email: 'sakib.hasan@example.com',
            profession: 'Teacher',
            address: '789 School Road, Chittagong',
            division: 'Chittagong'
          },
          accused: {
            name: 'John Smith',
            position: 'Director',
            office: 'Education Department',
            address: '321 Education Building, Chittagong'
          },
          incident: {
            date: '2025-01-10',
            time: '11:00',
            location: 'Education Office',
            division: 'Chittagong',
            type: 'Embezzlement',
            amount: '2500000',
            description: 'Misappropriation of school funds'
          },
          witnesses: [],
          evidence: ['document2.pdf', 'photo2.jpg'],
          status: 'convicted',
          createdAt: '2025-01-12T09:15:00Z',
          updatedAt: '2025-02-01T16:20:00Z',
          punishment: '5 years imprisonment and fine of ৳500,000'
        },
        {
          referenceNumber: 'ACC-20250103-9012',
          complainant: {
            fullName: 'Nusrat Jahan',
            nid: '1995123456789',
            mobile: '+8801612345678',
            email: 'nusrat@example.com',
            profession: 'Business Owner',
            address: '456 Market Street, Sylhet',
            division: 'Sylhet'
          },
          accused: {
            name: 'City Corporation',
            position: 'Tax Officer',
            office: 'City Tax Department',
            address: '789 City Hall, Sylhet'
          },
          incident: {
            date: '2025-01-05',
            time: '15:45',
            location: 'Tax Office',
            division: 'Sylhet',
            type: 'Fraud',
            amount: null,
            description: 'Falsified tax documents for personal gain'
          },
          witnesses: [
            { name: 'Ali Ahmed', contact: '+8801711111111' }
          ],
          evidence: ['document3.pdf', 'video1.mp4'],
          status: 'dismissed',
          createdAt: '2025-01-06T14:20:00Z',
          updatedAt: '2025-01-25T11:30:00Z',
          punishment: null
        }
      ]);
      setLoading(false);
    }, 1500);
  }, []);

  const filteredCases = statusFilter === 'all'
    ? cases
    : cases.filter(c => c.status === statusFilter);

  const openCaseDetails = (caseItem) => {
    setSelectedCase(caseItem);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCase(null);
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'investigation': return 'bg-blue-100 text-blue-800';
      case 'ongoing': return 'bg-yellow-100 text-yellow-800';
      case 'convicted': return 'bg-green-100 text-green-800';
      case 'appealed': return 'bg-purple-100 text-purple-800';
      case 'dismissed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status) => {
    switch(status) {
      case 'investigation': return 'Under Investigation';
      case 'ongoing': return 'Ongoing Trial';
      case 'convicted': return 'Convicted';
      case 'appealed': return 'Appealed';
      case 'dismissed': return 'Dismissed';
      default: return 'Unknown';
    }
  };

  // Function to update case status
  const updateCaseStatus = (newStatus) => {
    if (!selectedCase) return;

    setUpdatingStatus(true);

    // Simulate API call to update status
    setTimeout(() => {
      // Update the cases array with new status
      const updatedCases = cases.map(c =>
        c.referenceNumber === selectedCase.referenceNumber ? { ...c, status: newStatus } : c
      );

      setCases(updatedCases);

      // Update the selectedCase in modal
      setSelectedCase({ ...selectedCase, status: newStatus });

      setUpdatingStatus(false);
    }, 800);
  };

  // Function to update punishment
  const updatePunishment = (punishment) => {
    if (!selectedCase) return;

    setUpdatingStatus(true);

    // Simulate API call to update punishment
    setTimeout(() => {
      // Update the cases array with new punishment
      const updatedCases = cases.map(c =>
        c.referenceNumber === selectedCase.referenceNumber ? { ...c, punishment } : c
      );

      setCases(updatedCases);

      // Update the selectedCase in modal
      setSelectedCase({ ...selectedCase, punishment });

      setUpdatingStatus(false);
    }, 800);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  // Statistics
  const totalCases = cases.length;
  const solvedCases = cases.filter(c => ['convicted', 'dismissed'].includes(c.status)).length;
  const pendingCases = totalCases - solvedCases;

  return (
    <div className="container mx-auto p-4 md:p-6">
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-blue-500">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-gray-500 font-medium">Total Cases</h3>
              <p className="text-3xl font-bold mt-2">{totalCases}</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <FiFileText className="text-blue-600 text-xl" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-green-500">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-gray-500 font-medium">Solved Cases</h3>
              <p className="text-3xl font-bold mt-2">{solvedCases}</p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <FiCheck className="text-green-600 text-xl" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-yellow-500">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-gray-500 font-medium">Pending Cases</h3>
              <p className="text-3xl font-bold mt-2">{pendingCases}</p>
            </div>
            <div className="bg-yellow-100 p-3 rounded-full">
              <FiClock className="text-yellow-600 text-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Cases Table */}
      <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center mb-4 md:mb-0">
            <FiFileText className="mr-3 text-orange-500" />
            Manage Corruption Cases
          </h1>

          <div className="flex space-x-4">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500"
            >
              <option value="all">All Cases</option>
              <option value="investigation">Under Investigation</option>
              <option value="ongoing">Ongoing Trial</option>
              <option value="convicted">Convicted</option>
              <option value="appealed">Appealed</option>
              <option value="dismissed">Dismissed</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ref #</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Complainant</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Accused</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Division</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredCases.length === 0 ? (
                <tr>
                  <td colSpan="7" className="px-6 py-4 text-center text-gray-500">
                    No cases found
                  </td>
                </tr>
              ) : (
                filteredCases.map((caseItem) => (
                  <tr key={caseItem.referenceNumber} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                      {caseItem.referenceNumber}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                      <div className="font-medium">{caseItem.complainant.fullName}</div>
                      <div className="text-sm text-gray-500">{caseItem.complainant.mobile}</div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      <div className="font-medium">{caseItem.accused.name}</div>
                      <div className="text-sm text-gray-500">{caseItem.accused.position}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                      {caseItem.incident.division}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                      {caseItem.incident.type}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(caseItem.status)}`}>
                        {getStatusText(caseItem.status)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => openCaseDetails(caseItem)}
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

      {/* Case Details Modal */}
      {isModalOpen && selectedCase && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-5xl max-h-[90vh] overflow-y-auto">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-white flex justify-between items-center">
              <h2 className="text-xl md:text-2xl font-bold">
                Case Details: {selectedCase.referenceNumber}
                <span className={`ml-4 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedCase.status)}`}>
                  {getStatusText(selectedCase.status)}
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
                {/* Complainant Information */}
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                  <h3 className="font-bold text-gray-800 mb-3 flex items-center">
                    <FiUser className="mr-2 text-orange-500" />
                    Complainant Information
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-500">Full Name</p>
                      <p className="font-medium">{selectedCase.complainant.fullName}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">NID</p>
                      <p className="font-medium">{selectedCase.complainant.nid}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Mobile</p>
                      <p className="font-medium">{selectedCase.complainant.mobile}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-medium">{selectedCase.complainant.email}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Profession</p>
                      <p className="font-medium">{selectedCase.complainant.profession}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Address</p>
                      <p className="font-medium">{selectedCase.complainant.address}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Division</p>
                      <p className="font-medium">{selectedCase.complainant.division}</p>
                    </div>
                  </div>
                </div>

                {/* Accused Information */}
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                  <h3 className="font-bold text-gray-800 mb-3 flex items-center">
                    <FiUserX className="mr-2 text-orange-500" />
                    Accused Information
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-500">Name/Organization</p>
                      <p className="font-medium">{selectedCase.accused.name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Position/Designation</p>
                      <p className="font-medium">{selectedCase.accused.position}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Office/Department</p>
                      <p className="font-medium">{selectedCase.accused.office}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Address</p>
                      <p className="font-medium">{selectedCase.accused.address}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Incident Details */}
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 mb-8">
                <h3 className="font-bold text-gray-800 mb-3 flex items-center">
                  <FiClock className="mr-2 text-orange-500" />
                  Incident Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Date</p>
                    <p className="font-medium">{selectedCase.incident.date}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Time</p>
                    <p className="font-medium">{selectedCase.incident.time}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium">{selectedCase.incident.location}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Division</p>
                    <p className="font-medium">{selectedCase.incident.division}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Corruption Type</p>
                    <p className="font-medium">{selectedCase.incident.type}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Amount Involved</p>
                    <p className="font-medium">
                      {selectedCase.incident.amount
                        ? `৳${parseInt(selectedCase.incident.amount).toLocaleString()}`
                        : 'N/A'}
                    </p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-sm text-gray-500">Description</p>
                    <p className="font-medium whitespace-pre-line">{selectedCase.incident.description}</p>
                  </div>
                </div>
              </div>

              {/* Witnesses */}
              {selectedCase.witnesses && selectedCase.witnesses.length > 0 && (
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 mb-8">
                  <h3 className="font-bold text-gray-800 mb-3 flex items-center">
                    <FiUsers className="mr-2 text-orange-500" />
                    Witness Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedCase.witnesses.map((witness, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4">
                        <div className="font-medium">Witness {index + 1}</div>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">Name</p>
                          <p className="font-medium">{witness.name}</p>
                        </div>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">Contact</p>
                          <p className="font-medium">{witness.contact}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Evidence */}
              {selectedCase.evidence && selectedCase.evidence.length > 0 && (
                <div className="mb-8">
                  <h3 className="font-bold text-gray-800 mb-3 flex items-center">
                    <FiFileText className="mr-2 text-orange-500" />
                    Evidence
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {selectedCase.evidence.map((file, index) => (
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

              {/* Case Status & Punishment */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                  <h3 className="font-bold text-gray-800 mb-3 flex items-center">
                    <FiClock className="mr-2 text-orange-500" />
                    Case Status
                  </h3>

                  <div className="mt-4">
                    <h4 className="font-bold text-gray-800 mb-4">Update Case Status</h4>
                    <div className="flex flex-wrap gap-4">
                      <button
                        onClick={() => updateCaseStatus('investigation')}
                        disabled={selectedCase.status === 'investigation' || updatingStatus}
                        className={`px-4 py-2 rounded-xl font-medium flex items-center transition-all ${
                          selectedCase.status === 'investigation'
                            ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                            : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                        }`}
                      >
                        {updatingStatus && selectedCase.status === 'investigation' ? (
                          <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-blue-600 mr-2"></div>
                        ) : (
                          <FiClock className="mr-2" />
                        )}
                        Investigation
                      </button>

                      <button
                        onClick={() => updateCaseStatus('ongoing')}
                        disabled={selectedCase.status === 'ongoing' || updatingStatus}
                        className={`px-4 py-2 rounded-xl font-medium flex items-center transition-all ${
                          selectedCase.status === 'ongoing'
                            ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                            : 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'
                        }`}
                      >
                        {updatingStatus && selectedCase.status === 'ongoing' ? (
                          <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-yellow-600 mr-2"></div>
                        ) : (
                          <FiClock className="mr-2" />
                        )}
                        Ongoing
                      </button>

                      <button
                        onClick={() => updateCaseStatus('convicted')}
                        disabled={selectedCase.status === 'convicted' || updatingStatus}
                        className={`px-4 py-2 rounded-xl font-medium flex items-center transition-all ${
                          selectedCase.status === 'convicted'
                            ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                            : 'bg-green-100 text-green-800 hover:bg-green-200'
                        }`}
                      >
                        {updatingStatus && selectedCase.status === 'convicted' ? (
                          <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-green-600 mr-2"></div>
                        ) : (
                          <FiCheck className="mr-2" />
                        )}
                        Convicted
                      </button>

                      <button
                        onClick={() => updateCaseStatus('appealed')}
                        disabled={selectedCase.status === 'appealed' || updatingStatus}
                        className={`px-4 py-2 rounded-xl font-medium flex items-center transition-all ${
                          selectedCase.status === 'appealed'
                            ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                            : 'bg-purple-100 text-purple-800 hover:bg-purple-200'
                        }`}
                      >
                        {updatingStatus && selectedCase.status === 'appealed' ? (
                          <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-purple-600 mr-2"></div>
                        ) : (
                          <FiUserCheck className="mr-2" />
                        )}
                        Appealed
                      </button>

                      <button
                        onClick={() => updateCaseStatus('dismissed')}
                        disabled={selectedCase.status === 'dismissed' || updatingStatus}
                        className={`px-4 py-2 rounded-xl font-medium flex items-center transition-all ${
                          selectedCase.status === 'dismissed'
                            ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                            : 'bg-red-100 text-red-800 hover:bg-red-200'
                        }`}
                      >
                        {updatingStatus && selectedCase.status === 'dismissed' ? (
                          <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-red-600 mr-2"></div>
                        ) : (
                          <FiUserX className="mr-2" />
                        )}
                        Dismissed
                      </button>
                    </div>
                  </div>
                </div>

                {/* Punishment Section */}
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                  <h3 className="font-bold text-gray-800 mb-3 flex items-center">
                    <FiDollarSign className="mr-2 text-orange-500" />
                    Punishment / Sentence
                  </h3>

                  {['convicted', 'appealed'].includes(selectedCase.status) ? (
                    <div>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">Current Sentence</p>
                        <p className="font-medium">
                          {selectedCase.punishment || 'Not specified'}
                        </p>
                      </div>

                      <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Update Sentence
                        </label>
                        <textarea
                          value={selectedCase.punishment || ''}
                          onChange={(e) => updatePunishment(e.target.value)}
                          className="textarea textarea-bordered w-full focus:ring-2 focus:ring-orange-300 transition"
                          rows="3"
                          placeholder="Enter punishment details..."
                        ></textarea>
                        <button
                          onClick={() => updatePunishment(selectedCase.punishment || '')}
                          className="mt-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-xl font-medium hover:bg-blue-200 transition-colors"
                        >
                          Update Sentence
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="text-gray-500 italic">
                      Punishment details will be available after conviction
                    </div>
                  )}
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

export default ManageCases;