import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // Mock login function
  const login = async (email, password) => {
    try {
      // In a real app, you would call your API here
      setUser({ email, name: "Demo User" });
      navigate('/dashboard');
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  // Mock signup function
  const signup = async (name, email, password) => {
    try {
      // In a real app, you would call your API here
      setUser({ email, name });
      navigate('/dashboard');
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const logout = () => {
    setUser(null);
    navigate('/');
  };

  useEffect(() => {
    // Check for existing session (mock)
    const checkAuth = async () => {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        // setUser({ email: "demo@studybot.com", name: "Demo User" }); // Uncomment for auto-login
        setIsLoading(false);
      }, 1000);
    };
    
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);