import React from "react";
import { AuthProvider } from "./AuthContext";




const AppProvider: React.FC = ({ children }) => {
  return (
    <AuthProvider>
    </AuthProvider>
  );
};

export default AppProvider;