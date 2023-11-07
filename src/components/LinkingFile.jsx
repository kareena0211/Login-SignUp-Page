import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import SignUp from "./signUpPage/SignUpPage";
import LoginForm from "./loginForm/LoginForm";

const LinkingFile = () => {
  return (
    <>
      <BrowserRouter>
        <Link to="/" SignUp/>
        <Link to="/login" Login />
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default LinkingFile;
