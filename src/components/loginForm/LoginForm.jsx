import React, { useState } from "react";
import style from "./LoginForm.module.css";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length<6){
        alert("Password Should contain Atleast 6 Character")
        return;
    }
    console.log(email, password);
  };
  return (
    <>
      <form className={style.form} onSubmit={handleSubmit}>
        <h1>🔏Login🔏</h1>
        <div className={style.inputContainer}>
          <EmailIcon className={style.icon} />
          <input
            type="email"
            placeholder="Enter Email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={style.inputContainer}>
          <LockIcon className={style.icon} />
          <input
            type={showPassword ? "password":"text"}
            placeholder="Enter Password..."
            className={style.password}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {!showPassword ? (
            <VisibilityIcon
              className={style.icon}
              onClick={() => setShowPassword(!showPassword)}
            />
          ) : (
            <VisibilityOffIcon
              className={style.icon}
              onClick={() => setShowPassword(!showPassword)}
            />
          )}
        </div>
        <button className={style.login} type="submit">
          Login
        </button>
      </form>
    </>
  );
};

export default LoginForm;