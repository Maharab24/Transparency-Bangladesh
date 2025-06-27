// src/context/AuthContext.js
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [notifications, setNotifications] = useState([]);

  const mockUsers = [
    { id: 1, phone: '01234567890', password: 'user123', role: 'user', name: 'Regular User' },
    { id: 2, phone: '01841213662', password: 'admin123', role: 'admin', name: 'Admin User' }
  ];

  const login = (phone, password, loginType) => {
    const foundUser = mockUsers.find(user =>
      user.phone === phone && user.password === password
    );

    if (foundUser) {
      if (loginType === 'admin' && foundUser.role !== 'admin') return null;
      if (loginType === 'user' && foundUser.role !== 'user') return null;

      localStorage.setItem('user', JSON.stringify(foundUser));
      setUser(foundUser);

      // Add dates to notifications
      const mockNotifications = [
        {
          id: 1,
          text: "Your case #TB2024-001 has been updated",
          read: false,
          date: new Date(Date.now() - 2 * 60 * 60 * 1000) // 2 hours ago
        },
        {
          id: 2,
          text: "New message from support team",
          read: true,
          date: new Date(Date.now() - 5 * 60 * 60 * 1000) // 5 hours ago
        },
        {
          id: 3,
          text: "Your report has been reviewed",
          read: false,
          date: new Date(Date.now() - 1 * 60 * 60 * 1000) // 1 hour ago
        },
        {
          id: 4,
          text: "New corruption report in your area",
          read: false,
          date: new Date(Date.now() - 30 * 60 * 1000) // 30 mins ago
        }
      ];
      setNotifications(mockNotifications);

      return foundUser;
    }
    return null;
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
    setNotifications([]);
  };

  const markNotificationAsRead = (id) => {
    setNotifications(prev =>
      prev.map(notification =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const value = {
    user,
    login,
    logout,
    notifications,
    markNotificationAsRead
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);