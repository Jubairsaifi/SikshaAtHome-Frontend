import { createContext, useContext, useEffect, useState } from "react";
import API from "../api";

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchAdmin = async () => {
    try {
      const { data } = await API.get("/admin/me", {
        withCredentials: true,
      });

      setAdmin(data.admin);
    } catch (err) {
      setAdmin(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAdmin();
  }, []);

  return (
    <AdminContext.Provider
      value={{
        admin,
        setAdmin,
        loading,
        fetchAdmin,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => useContext(AdminContext);