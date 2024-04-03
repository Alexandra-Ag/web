import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import roles from '../helpers/roles';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [redirectLocation, setRedirectLocation] = useState(null);

  const login = (userCredentials, fromLocation) => {
    setUser({ id: 1, name: 'Diego', email: 'Diogo@gmail.com', role: roles.admin });
    setIsAuthenticated(true);

    if (fromLocation) {
      setRedirectLocation(fromLocation);
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  const updateUser = (data) => {
    setUser({
      ...user,
      ...data,
    });
  };

  const isLogged = () => !!user;
  const hasRole = (role) => user?.role === role;

  const contextValue = {
    user,
    updateUser,
    isLogged,
    hasRole,
    login,
    logout,
    isAuthenticated,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}
