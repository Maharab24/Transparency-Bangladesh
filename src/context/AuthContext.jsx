import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  // Updated mock users with clear role separation
  const mockUsers = [
    { id: 1, phone: '01234567890', password: 'user123', role: 'user', name: 'Regular User' },
    { id: 2, phone: '01841213662', password: 'admin123', role: 'admin', name: 'Admin User' }
  ];

  const login = (phone, password, loginType) => {
    const foundUser = mockUsers.find(user =>
      user.phone === phone && user.password === password
    );

    if (foundUser) {
      // Strict role verification
      if (loginType === 'admin' && foundUser.role !== 'admin') {
        return null; // Block user from admin login
      }
      if (loginType === 'user' && foundUser.role !== 'user') {
        return null; // Block admin from user login
      }

      localStorage.setItem('user', JSON.stringify(foundUser));
      setUser(foundUser);
      return foundUser;
    }
    return null;
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);