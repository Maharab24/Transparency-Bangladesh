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
        <div className=" bg-gradient-to-b from-gray-50 to-gray-100 px-4">
            <div className="max-w-6xl mx-auto">








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