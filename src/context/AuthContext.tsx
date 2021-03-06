import React, { createContext, useCallback, useState, useContext } from "react";
import api from "../services/apiClient";

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
  signInDoctor(credentials: SignInCredentials): Promise<void>;
  singOut(): void;
}
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem("@WebMedic:token");
    const user = localStorage.getItem("@WebMedic:user");

    if (
      token !== null &&
      token !== undefined &&
      token !== 'undefined'&& user
    ) {
      console.log(token);
      return { token, user: JSON.parse(user) };
    }
    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    // const response = await api.post('pacient', {
    //   email,
    //   password
    // });
    const response = await api.post(
      "WebMedic/Paciente-login",
      { email, password },
      {
        baseURL: "http://25.51.114.54:8000", // Base URL
      }
    );

    const { access_token, user} = response.data;
    const token = access_token;
    
    localStorage.setItem("@WebMedic:token", token);
    localStorage.setItem('@WebMedic:user', JSON.stringify(user));
    setData({ token, user });
  }, []);

  const signInDoctor = useCallback(async ({ email, password }: SignInCredentials) => {
    // const response = await api.post('pacient', {
    //   email,
    //   password
    // });
    const response = await api.post(
      "WebMedic/Medico-login",
      { email, password },
      {
        baseURL: "http://25.51.114.54:8000", // Base URL
      }
    );

    const { access_token, user} = response.data;
    const token = access_token;
    
    localStorage.setItem("@WebMedic:token", token);
    localStorage.setItem('@WebMedic:user', JSON.stringify(user));
    setData({ token, user });
  }, []);

  const singOut = useCallback(() => {

    const token = localStorage.removeItem("@WebMedic:token");
    const user = localStorage.removeItem("@WebMedic:user");

    setData({} as AuthState);
    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{user: data.user, signIn, singOut, signInDoctor }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}

export { useAuth, AuthProvider };
