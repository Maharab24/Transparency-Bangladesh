import { useEffect, useState } from "react";
import { FiSearch, FiFilter, FiChevronDown, FiChevronUp, FiExternalLink } from "react-icons/fi";

const SearchCase = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [searchType, setSearchType] = useState("caseId");
  const [searchTerm, setSearchTerm] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    status: "",
    caseType: "",
    minSentence: "",
    maxSentence: ""
  });

  const cases = [
    { id: "C-2023-001", name: "State vs. Rahman", type: "Bribery", status: "Ongoing", sentence: "Pending", lastUpdate: "2023-06-15" },
    { id: "C-2023-045", name: "State vs. Chowdhury", type: "Embezzlement", status: "Convicted", sentence: "10 years", lastUpdate: "2023-05-22" },
    { id: "C-2023-112", name: "State vs. Ahmed", type: "Fraud", status: "Appealed", sentence: "7 years", lastUpdate: "2023-07-01" },
    { id: "C-2023-087", name: "State vs. Khan", type: "Nepotism", status: "Investigation", sentence: "Pending", lastUpdate: "2023-06-30" },
    { id: "C-2023-033", name: "State vs. Hossain", type: "Abuse of Power", status: "Dismissed", sentence: "None", lastUpdate: "2023-04-18" },
    { id: "C-2023-156", name: "State vs. Ali", type: "Fraud", status: "Convicted", sentence: "15 years", lastUpdate: "2023-07-10" },
  ];

  const filteredCases = cases.filter(caseItem => {
    // Search filter
    const matchesSearch = searchTerm === "" ||
      caseItem.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      caseItem.name.toLowerCase().includes(searchTerm.toLowerCase());

    // Status filter
    const matchesStatus = filters.status === "" ||
      caseItem.status.toLowerCase().includes(filters.status.toLowerCase());

    // Type filter
    const matchesType = filters.caseType === "" ||
      caseItem.type.toLowerCase().includes(filters.caseType.toLowerCase());

    return matchesSearch && matchesStatus && matchesType;
  });

  const getStatusColor = (status) => {
    switch(status.toLowerCase()) {
      case "ongoing": return "bg-blue-100 text-blue-800";
      case "convicted": return "bg-green-100 text-green-800";
      case "appealed": return "bg-purple-100 text-purple-800";
      case "investigation": return "bg-yellow-100 text-yellow-800";
      case "dismissed": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeColor = (type) => {
    switch(type.toLowerCase()) {
      case "bribery": return "text-orange-600";
      case "embezzlement": return "text-red-600";
      case "fraud": return "text-purple-600";
      case "nepotism": return "text-indigo-600";
      case "abuse of power": return "text-cyan-600";
      default: return "text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Anti-Corruption Case Search
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Search and filter through corruption cases with our comprehensive database
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 transition-all duration-300 hover:shadow-2xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-6">
            <div className="w-full md:w-1/2">
              <h2 className="text-orange-700 font-bold mb-3 flex items-center">
                <FiSearch className="mr-2" />
                Search Cases
              </h2>
              <div className="flex border border-gray-300 rounded-xl overflow-hidden shadow-sm">
                <select
                  value={searchType}
                  onChange={(e) => setSearchType(e.target.value)}
                  className="bg-gray-100 text-gray-700 px-4 focus:outline-none"
                >
                  <option value="caseId">Case ID</option>
                  <option value="name">Defendant Name</option>
                  <option value="type">Case Type</option>
                </select>
                <input
                  type="text"
                  placeholder={
                    searchType === "caseId" ? "Enter case ID (e.g. C-2023-001)" :
                    searchType === "name" ? "Enter defendant name" : "Enter case type"
                  }
                  className="flex-1 p-4 focus:outline-none"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="bg-orange-500 text-white px-6 hover:bg-orange-600 transition-colors">
                  <FiSearch className="text-xl" />
                </button>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <div className="flex justify-between items-center">
                <h2 className="text-orange-700 font-bold mb-3 flex items-center">
                  <FiFilter className="mr-2" />
                  Filtering Options
                </h2>
                <button
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="text-orange-600 hover:text-orange-800 flex items-center"
                >
                  {isFilterOpen ? <FiChevronUp /> : <FiChevronDown />}
                </button>
              </div>

              {isFilterOpen && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gray-50 rounded-xl mt-3 animate-fade-in">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Status</label>
                    <select
                      value={filters.status}
                      onChange={(e) => setFilters({...filters, status: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-300 focus:border-orange-500"
                    >
                      <option value="">All Statuses</option>
                      <option value="Ongoing">Ongoing</option>
                      <option value="Convicted">Convicted</option>
                      <option value="Appealed">Appealed</option>
                      <option value="Investigation">Investigation</option>
                      <option value="Dismissed">Dismissed</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Case Type</label>
                    <select
                      value={filters.caseType}
                      onChange={(e) => setFilters({...filters, caseType: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-300 focus:border-orange-500"
                    >
                      <option value="">All Types</option>
                      <option value="Bribery">Bribery</option>
                      <option value="Embezzlement">Embezzlement</option>
                      <option value="Fraud">Fraud</option>
                      <option value="Nepotism">Nepotism</option>
                      <option value="Abuse of Power">Abuse of Power</option>
                    </select>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="text-right">
            <button
              onClick={() => {
                setSearchTerm("");
                setFilters({ status: "", caseType: "", minSentence: "", maxSentence: "" });
              }}
              className="text-orange-600 hover:text-orange-800 text-sm"
            >
              Clear all filters
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                <tr className="text-left">
                  <th className="py-4 px-6 font-bold text-lg">Case ID</th>
                  <th className="py-4 px-6 font-bold text-lg">Case Name</th>
                  <th className="py-4 px-6 font-bold text-lg">Type</th>
                  <th className="py-4 px-6 font-bold text-lg">Status</th>
                  <th className="py-4 px-6 font-bold text-lg">Sentence</th>
                  <th className="py-4 px-6 font-bold text-lg">Last Update</th>
                  <th className="py-4 px-6 font-bold text-lg">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredCases.map((caseItem, index) => (
                  <tr
                    key={caseItem.id}
                    className={`border-b border-gray-200 hover:bg-orange-50 transition-colors duration-200 ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    }`}
                  >
                    <td className="py-4 px-6 font-medium text-gray-900">
                      <span className="inline-block bg-blue-50 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {caseItem.id}
                      </span>
                    </td>
                    <td className="py-4 px-6 font-medium text-gray-900">
                      {caseItem.name}
                    </td>
                    <td className={`py-4 px-6 font-medium ${getTypeColor(caseItem.type)}`}>
                      {caseItem.type}
                    </td>
                    <td className="py-4 px-6">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(caseItem.status)}`}>
                        {caseItem.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 font-medium">
                      {caseItem.sentence === "None" ? (
                        <span className="text-gray-500">No sentence</span>
                      ) : caseItem.sentence === "Pending" ? (
                        <span className="text-orange-600">Pending</span>
                      ) : (
                        <span className="text-red-600 font-semibold">{caseItem.sentence}</span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-gray-600">
                      {caseItem.lastUpdate}
                    </td>
                    <td className="py-4 px-6">
                      <button className="flex items-center text-orange-600 hover:text-orange-800">
                        <span>View Details</span>
                        <FiExternalLink className="ml-1" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredCases.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-500 text-xl mb-4">No cases found matching your criteria</div>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setFilters({ status: "", caseType: "", minSentence: "", maxSentence: "" });
                }}
                className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
              >
                Clear filters and try again
              </button>
            </div>
          )}
        </div>

        <div className="mt-8 text-center text-gray-600">
          <p>Showing {filteredCases.length} of {cases.length} cases</p>
          <p className="mt-2">For more information about a specific case, contact our legal department</p>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }

        tr {
          transition: all 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default SearchCase;