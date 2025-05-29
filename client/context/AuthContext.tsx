"use client";

import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

interface User {
  name: string;
  email: string;
  role: string;
  isVerified: boolean;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  verifyOTP: (email: string, otp: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [activationToken, setActivationToken] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        // Check if we have a session cookie
        const response = await axios.get("http://localhost:8000/api/v1/me", {
          withCredentials: true,
        });

        if (response.data.user) {
          setUser(response.data.user);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Authentication check failed:", error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/login",
        { email, password },
        { withCredentials: true }
      );
      setUser(response.data.user);
      if (response.data.user?.role === "admin") {
        router.push("/dashboard");
      } else {
        router.push("/user/dashboard");
      }
    } catch (error: any) {
      throw new Error(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      await axios.post(
        "http://localhost:8000/api/v1/logout",
        {},
        { withCredentials: true }
      );
      setUser(null);
      router.push("/");
    } catch (error: any) {
      throw new Error(error.response?.data?.message || "Logout failed");
    } finally {
      setLoading(false);
    }
  };

  const register = async (name: string, email: string, password: string) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/register",
        {
          name,
          email,
          password,
        }
      );
      setActivationToken(response.data.activationToken);
      router.push(`/verify-otp?email=${encodeURIComponent(email)}`);
    } catch (error: any) {
      throw new Error(error.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  const verifyOTP = async (email: string, otp: string) => {
    setLoading(true);
    try {
      if (!activationToken) {
        throw new Error("Activation token is missing.");
      }
      const response = await axios.post(
        "http://localhost:8000/api/v1/activate-user",
        { email, activation_code: otp, activation_token: activationToken }
      );
      setUser(response.data.user);
      if (response.data.user?.role === "admin") {
        router.push("/dashboard");
      } else {
        router.push("/user/dashboard");
      }
      setActivationToken(null);
    } catch (error: any) {
      throw new Error(
        error.response?.data?.message || "OTP verification failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
        register,
        verifyOTP,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
