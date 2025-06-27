// src/pages/NotificationsPage.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiBell, FiArrowLeft } from "react-icons/fi";
import { useAuth } from "../context/AuthContext";

const NotificationsPage = () => {
  const { user, notifications, markNotificationAsRead } = useAuth();
  const navigate = useNavigate();

  // Format time difference (e.g., "2 hours ago")
  const formatTimeDifference = (date) => {
    const now = new Date();
    const diffMs = now - new Date(date);
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffMins < 1) return "Just now";
    if (diffMins < 60) return `${diffMins} min ago`;
    if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
    return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-sm text-[#33a954] font-medium hover:underline"
        >
          <FiArrowLeft className="mr-2" />
          Back
        </button>

        <h1 className="text-3xl font-bold flex items-center">
          <FiBell className="mr-3 text-[#f6824d]" size={28} />
          Notifications
        </h1>

        <div></div> {/* Spacer for alignment */}
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {notifications.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            You have no notifications
          </div>
        ) : (
          <ul>
            {[...notifications]
              .sort((a, b) => new Date(b.date) - new Date(a.date))
              .map(notification => (
                <li
                  key={notification.id}
                  className={`border-b p-6 hover:bg-gray-50 cursor-pointer transition-colors ${
                    !notification.read ? 'bg-blue-50' : ''
                  }`}
                  onClick={() => {
                    if (!notification.read) {
                      markNotificationAsRead(notification.id);
                    }
                    // Navigate to relevant page
                    navigate('/dashboard');
                  }}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium text-gray-800">
                        {notification.text}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {formatTimeDifference(notification.date)}
                      </p>
                    </div>
                    {!notification.read && (
                      <span className="bg-[#f6824d] text-white text-xs px-2 py-1 rounded-full">
                        New
                      </span>
                    )}
                  </div>
                </li>
              ))
            }
          </ul>
        )}
      </div>
    </div>
  );
};

export default NotificationsPage;