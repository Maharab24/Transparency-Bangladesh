import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Updated mock users with phone numbers
  const mockUsers = [
    { id: 1, phone: '01234567890', password: 'user123', role: 'user', name: 'Regular User' },
    { id: 2, phone: '01841213662', password: 'admin123', role: 'admin', name: 'Admin User' }
  ];

  const login = (phone, password, loginType) => {
    const foundUser = mockUsers.find(user =>
      user.phone === phone && user.password === password
    );

    if (foundUser) {
      // Verify role access
      if (loginType === 'admin' && foundUser.role !== 'admin') {
        return null; // Block non-admin from admin login
      }
      setUser(foundUser);
      return foundUser;
    }
    return null;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);