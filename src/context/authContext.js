import { createContext, useState } from "react";
import axios from "axios";
import { LOGIN_URL, SIGNUP_URL } from "../urls";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [authLoader, setAuthLoader] = useState(false);
  const [loginFail, setLoginFail] = useState(false);

  const handleSignup = async (name, phone, email, password) => {
    try {
      setAuthLoader(true);
      const response = await axios.post(SIGNUP_URL, {
        name,
        phone,
        email,
        password,
      });
      if (response.data.success) {
        setName(response.data.savedUser.name);
        setToken(response.data.savedUser.token);
        localStorage.setItem(
          "gtfc__name",
          JSON.stringify(response.data.savedUser.name)
        );
        localStorage.setItem(
          "gtfc__token",
          JSON.stringify(response.data.token)
        );
        setAuthLoader(false);
      }
    } catch (error) {
      setAuthLoader(false);
      console.log({ error });
    }
  };

  const handleLogin = async (name, password) => {
    try {
      setLoginFail(false);
      setAuthLoader(true);
      const response = await axios.post(LOGIN_URL, { name, password });
      if (response.data.success) {
        setName(response.data.savedUser.name);
        setToken(response.data.savedUser.token);
        localStorage.setItem(
          "gtfc__name",
          JSON.stringify(response.data.savedUser.name)
        );
        localStorage.setItem(
          "gtfc__token",
          JSON.stringify(response.data.token)
        );
        setAuthLoader(false);
      }
    } catch (error) {
      setAuthLoader(false);
      setLoginFail(true);
      console.log({ error });
    }
  };

  const handleLogout = () => {
    setName("");
    setToken("");
    localStorage.removeItem("gtfc__name");
    localStorage.removeItem("gtfc__token");
  };

  return (
    <AuthContext.Provider
      value={{
        name,
        setName,
        handleSignup,
        handleLogin,
        handleLogout,
        token,
        setToken,
        authLoader,
        setAuthLoader,
        loginFail,
        setLoginFail,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
