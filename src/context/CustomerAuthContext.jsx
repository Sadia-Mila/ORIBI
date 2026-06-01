import axios from "axios";
import { createContext, useCallback, useContext, useEffect, useState } from "react";

const CustomerAuthContext = createContext(null);

export const CustomerAuthProvider = ({ children }) => {
  const [customer, setCustomer] = useState(null);
  const [loading, setLoading] = useState(true);

  const refreshUser = useCallback(async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/v1/auth/currentuser", {
        withCredentials: true,
      });

      if (response.data?.success) {
        setCustomer(response.data.user);
      } else {
        setCustomer(null);
      }
    } catch (error) {
      setCustomer(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refreshUser();
  }, [refreshUser]);

  const logout = useCallback(async () => {
    try {
      await axios.post(
        "http://localhost:3000/api/v1/auth/logout",
        {},
        { withCredentials: true },
      );
    } finally {
      setCustomer(null);
    }
  }, []);

  return (
    <CustomerAuthContext.Provider value={{ customer, loading, refreshUser, logout }}>
      {children}
    </CustomerAuthContext.Provider>
  );
};

export const useCustomerAuth = () => {
  const context = useContext(CustomerAuthContext);

  if (!context) {
    throw new Error("useCustomerAuth must be used inside CustomerAuthProvider");
  }

  return context;
};
