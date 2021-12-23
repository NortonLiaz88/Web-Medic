
  
import React, { createContext, useCallback, useState, useContext } from 'react'
import api from '../services/apiClient';

interface AuthState {
  token: string;
  user: object;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: object;
  signIn(credentials: SignInCredentials): Promise<void>;
  singOut(): void;
}
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem("@WebMedic:token");
    const user = localStorage.getItem("@WebMedic:user");

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }
    return {} as AuthState
  })

  const signIn = useCallback(async ({email, password}: SignInCredentials) => {
    const response = await api.post('sessions', {
      email,
      password
    });

    const { token, user } = response.data;

    localStorage.setItem('@WebMedic:token', token);
    localStorage.setItem('@WebMedic:user', JSON.stringify(user));

    setData({ token, user });
  }, [])

  const singOut = useCallback(() => {
    const token = localStorage.removeItem("@WebMedic:token");
    const user = localStorage.removeItem("@WebMedic:user");

    setData({} as AuthState);
  }, [])

  return (
    <AuthContext.Provider value={{user: data.user, signIn, singOut}}>
      { children }
    </AuthContext.Provider>
  );
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context;
} 

export { useAuth, AuthProvider };