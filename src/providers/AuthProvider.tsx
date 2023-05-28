import { ReactNode, createContext, useEffect, useState } from "react";
import { LoginData } from "../components/Forms/LoginForm/validator";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { RegisterData } from "../components/Forms/RegisterForm/validator";
import { toast } from "react-toastify";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextValues {
  signIn: (data: LoginData) => void;
  signUp: (data: RegisterData) => void;
  loading: boolean;
}


export const AuthContext = createContext<AuthContextValues>(
  {} as AuthContextValues
);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("contact-manager:token");

    if (!token) {
      setLoading(false);
      // navigate("/")
      return;
    }

    api.defaults.headers.common.authorization = `Bearer ${token}`;
    setLoading(false);
  }, []);

  const signIn = async (data: LoginData) => {
    try {
      const response = await api.post("/login", data);

      const { token } = response.data;

      api.defaults.headers.common.authorization = `Bearer ${token}`;
      localStorage.setItem("contact-manager:token", token);

      navigate("/dashboard");
    } catch (error) {
      toast.error("Email ou senha inválidos");
    }
  };

  const signUp = async (data: RegisterData) => {
    try {
      const response = await api.post("/client", data);

      const { token } = response.data;

      api.defaults.headers.common.authorization = `Bearer ${token}`;
      localStorage.setItem("contact-manager:token", token);

      navigate("/login");
    } catch (error) {
      toast.error("Email já cadastrado no banco de dados");
    }
  };

  return (
    <AuthContext.Provider value={{ signIn, signUp, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
