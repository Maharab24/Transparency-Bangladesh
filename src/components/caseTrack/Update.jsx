import React from 'react';
import { FiClock, FiCheckCircle, FiAlertTriangle, FiBarChart2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';
const Update = () => {
    const cases = [
        { id: "C-2023-045", name: "State vs. Rahman", type: "Bribery", status: "Ongoing", sentence: "Pending", lastUpdate: "2 days ago" },
        { id: "C-2023-112", name: "State vs. Ahmed", type: "Embezzlement", status: "Appealed", sentence: "7 years", lastUpdate: "1 week ago" },
        { id: "C-2023-087", name: "State vs. Khan", type: "Fraud", status: "Delayed", sentence: "Pending", lastUpdate: "3 days ago" },
    ];

    const stats = [
        { title: "Total Cases", value: 300, icon: <FiBarChart2 className="text-2xl" />, color: "bg-orange-100", textColor: "text-orange-600" },
        { title: "Solved Cases", value: 200, icon: <FiCheckCircle className="text-2xl" />, color: "bg-green-100", textColor: "text-green-600" },
        { title: "Pending Cases", value: 100, icon: <FiClock className="text-2xl" />, color: "bg-blue-100", textColor: "text-blue-600" },
        { title: "Delayed Cases", value: 25, icon: <FiAlertTriangle className="text-2xl" />, color: "bg-red-100", textColor: "text-red-600" },
    ];

    const getStatusColor = (status) => {
        switch(status.toLowerCase()) {
            case "ongoing": return "bg-blue-100 text-blue-800";
            case "appealed": return "bg-purple-100 text-purple-800";
            case "delayed": return "bg-red-100 text-red-800";
            default: return "bg-gray-100 text-gray-800";
        }
    };

    const getTypeColor = (type) => {
        switch(type.toLowerCase()) {
            case "bribery": return "text-orange-600";
            case "embezzlement": return "text-red-600";
            case "fraud": return "text-purple-600";
            default: return "text-gray-700";
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 px-4">
            <div className="max-w-6xl mx-auto">
                {/* <div className="text-center mb-10 animate-fade-in">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
                        Your Case Updates
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Track the latest developments in your reported corruption cases
                    </p>
                </div> */}

                {/* Stats Cards */}


                {/* Case Updates Table */}
                {/* <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl mb-10">
                    <div className="p-6 border-b border-gray-200">
                        <h2 className="text-xl font-bold text-gray-800 flex items-center">
                            <FiClock className="mr-2 text-orange-500" />
                            Recent Case Updates
                        </h2>
                        <p className="text-gray-600">Latest developments in your reported cases</p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="min-w-full">
                            <thead className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                                <tr className="text-left">
                                    <th className="py-4 px-6 font-bold">Case ID</th>
                                    <th className="py-4 px-6 font-bold">Case Name</th>
                                    <th className="py-4 px-6 font-bold">Type</th>
                                    <th className="py-4 px-6 font-bold">Status</th>
                                    <th className="py-4 px-6 font-bold">Sentence</th>
                                    <th className="py-4 px-6 font-bold">Last Update</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cases.map((caseItem, index) => (
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
                                            {caseItem.sentence === "Pending" ? (
                                                <span className="text-orange-600">Pending</span>
                                            ) : (
                                                <span className="text-red-600 font-semibold">{caseItem.sentence}</span>
                                            )}
                                        </td>
                                        <td className="py-4 px-6 text-gray-600">
                                            {caseItem.lastUpdate}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div> */}



                {/* Action Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-6 text-white">
                        <h3 className="text-xl font-bold mb-3">Need to Report a New Case?</h3>
                        <p className="mb-4 opacity-90">Submit information about a new corruption incident</p>

                         <Link to='/form'>
                    <button className="px-5 py-3 bg-white text-orange-600 rounded-full font-medium hover:bg-gray-100 transition-colors">Report Your case</button>
                </Link>
                    </div>

                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
                        <h3 className="text-xl font-bold mb-3">Need Case Assistance?</h3>
                        <p className="mb-4 opacity-90">Contact our legal team for support with your case</p>
                        <button className="px-5 py-3 bg-white text-blue-600 rounded-full font-medium hover:bg-gray-100 transition-colors">
                            Contact Support
                        </button>
                    </div>
                </div>

                 {/* Timeline Section */}


{/*

                <div className="bg-white rounded-2xl shadow-xl p-6 mb-10 transition-all duration-500 hover:shadow-2xl">
                    <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                        <FiClock className="mr-2 text-orange-500" />
                        Case Progress Timeline
                    </h2>

                    <div className="relative pl-8">

                        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-orange-200"></div>


                        {[
                            { date: "June 15, 2023", title: "Case Filed", description: "Formal charges filed against the defendant", status: "Completed" },
                            { date: "July 3, 2023", title: "Evidence Collection", description: "Gathering documentary evidence", status: "Completed" },
                            { date: "July 20, 2023", title: "Witness Testimonies", description: "Scheduled for next week", status: "In Progress" },
                            { date: "August 10, 2023", title: "Closing Arguments", description: "Expected date for closing arguments", status: "Upcoming" },
                        ].map((item, index) => (
                            <div key={index} className="relative mb-8 animate-fade-in">
                                <div className="absolute left-0 top-2 -ml-4 w-6 h-6 rounded-full bg-orange-500 border-4 border-white"></div>
                                <div className="ml-6">
                                    <div className="flex justify-between items-start">
                                        <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                                        <span className="text-sm text-gray-500">{item.date}</span>
                                    </div>
                                    <p className="mt-1 text-gray-600">{item.description}</p>
                                    <span className={`mt-2 inline-block px-2 py-1 text-xs rounded-full ${
                                        item.status === "Completed" ? "bg-green-100 text-green-800" :
                                        item.status === "In Progress" ? "bg-blue-100 text-blue-800" :
                                        "bg-gray-100 text-gray-800"
                                    }`}>
                                        {item.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div> */}




            </div>
             <div className="mt-20  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`${stat.color} rounded-2xl shadow-lg p-6 transform transition-all duration-500 hover:scale-105 hover:shadow-xl`}
                        >
                            <div className="flex justify-between items-center">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-700 mb-2">{stat.title}</h3>
                                    <p className={`text-3xl font-bold ${stat.textColor}`}>{stat.value}</p>
                                </div>
                                <div className={`p-3 rounded-full ${stat.textColor}`}>
                                    {stat.icon}
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="w-full bg-white rounded-full h-2.5">
                                    <div
                                        className={`h-2.5 rounded-full ${stat.textColor.replace('text', 'bg')}`}
                                        style={{ width: `${(stat.value / 300) * 100}%` }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            <style jsx global>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .animate-fade-in {
                    animation: fade-in 0.5s ease-out forwards;
                }

                tr {
                    transition: all 0.3s ease;
                }
            `}</style>
        </div>
    );
};

export default Update;