import { createContext, useContext, useEffect, useState } from "react";
import API from "../api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [teacher, setTeacher] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = (teacherData, jwtToken) => {
    setTeacher(teacherData);
    setToken(jwtToken);

    API.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${jwtToken}`;
  };

  const logout = () => {
    setTeacher(null);
    setToken(null);

    delete API.defaults.headers.common["Authorization"];
  };

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        // For now we'll read the token from localStorage.
        // Later we'll replace this with HttpOnly cookies.
        const savedToken = localStorage.getItem("teacherToken");

        if (!savedToken) {
          setLoading(false);
          return;
        }

        API.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${savedToken}`;

        const { data } = await API.get("/auth/me");

        setTeacher(data.teacher);
        setToken(savedToken);
      } catch (err) {
        localStorage.removeItem("teacherToken");

        delete API.defaults.headers.common["Authorization"];
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        teacher,
        token,
        login,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);