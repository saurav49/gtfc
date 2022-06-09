import { useState } from "react";
import styles from "./style.module.css";
import { AiFillEye, AiTwotoneEyeInvisible } from "../Icons/Icon";
import { useNavigate, Navigate } from "react-router";
import { TailSpin } from "react-loader-spinner";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [err, setError] = useState("");
  const navigate = useNavigate();
  let { handleLogin, authLoader, token, loginFail } = useAuth();

  if (!token) {
    if (localStorage.getItem("gtfc__token")) {
      token = localStorage.getItem("gtfc__token");
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0) return setError("Name cannot be empty");
    if (password.length === 0) return setError("Password cannot be empty");
    setError("");
    handleLogin(name, password);
    setName("");
    setPassword("");
  };

  return (
    <>
      {token ? (
        <Navigate to={"/"} replace />
      ) : (
        <div className={styles.signupPage}>
          {loginFail && (
            <p className="text-slate-800 text-5xl my-5 text-center font-bold">
              Invalid Input
            </p>
          )}
          <div className={styles.signupContainer}>
            <h2 className="text-xl text-gray-900 font-bold py-2"> Log In </h2>
            <form onSubmit={handleSubmit} className={styles.formWrapper}>
              <div className={styles.inptWrapper}>
                <input
                  type="text"
                  value={name}
                  placeholder="name"
                  onChange={(e) => setName(e.target.value)}
                  className={styles.input}
                />
              </div>
              <div className={styles.inptWrapperPass}>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  className={styles.input}
                />
                {showPassword ? (
                  <AiTwotoneEyeInvisible
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                    className={styles.passwordIcon}
                  />
                ) : (
                  <AiFillEye
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                    className={styles.passwordIcon}
                  />
                )}
              </div>
              {err && (
                <p className="text-red-500 italic text-sm font-bold text-center">
                  {err}
                </p>
              )}
              <button
                type="submit"
                className="bg-slate-500 hover:bg-slate-400 text-white font-bold py-3 px-10 border-b-4 mb-5 border-slate-700 hover:border-slate-500 rounded uppercase"
              >
                {authLoader ? (
                  <TailSpin color="#fff" height={20} width={70} />
                ) : (
                  <span>log in</span>
                )}
              </button>
            </form>
            <p>
              Don't have an account?
              <span
                onClick={() => navigate("/signup")}
                className={styles.spanStyle}
              >
                Sign Up
              </span>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export { Login };
