import React, { useState } from "react";
import style from "./SignUpPage.module.css";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [showPassword, setShowPassword] = useState(false);


//   ......................................................

const navigate = useNavigate()
const handleButton = () =>{
     navigate("/login")
}

  // ........................................................................

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      alert("Password Should contain Atleast 6 Character");
      return;
    }
    alert("Your Data has been Submitted");
    console.log(
      `User's FirstName is ${name} , lastname is ${lastName} Email is ${email} , and Password id ${password}`
    );
  };

  //   ......................................................................

  return (
    <>
      <form className={style.form} onSubmit={handleSubmit}>
        <h1>🔏SignUp🔏</h1>

        <div className={style.inputContainer}>
          <PersonIcon className={style.icon} />
          <input
            type="text"
            placeholder="Enter First Name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        {/* ......................................................................... */}
        <div className={style.inputContainer}>
          <PersonIcon className={style.icon} />
          <input
            type="text"
            placeholder="Enter Last Name..."
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        {/* .......................................................................... */}
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

        {/* ................................................................... */}
        <div className={style.inputContainer}>
          <LockIcon className={style.icon} />
          <input
            type={showPassword ? "password" : "text"}
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
        {/* ....................................................................... */}
        <button className={style.login} type="submit">
          SignUp
        </button>
        <button className={style.login} onClick={handleButton} type="submit">
          Are you Login ?
        </button>
      </form>
    </>
  );
};

export default SignUp;
