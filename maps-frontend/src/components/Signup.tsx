import React, { useState } from "react";
import { signup } from "../services/sigUpFormHandler";

import "./Login.css";

const Login: React.FC = (props) => {
  const [userName, setUserName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmedPassword, setConfirmedPassword] = useState<string>("");

  const _handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const res = await signup(userName, userEmail, password, confirmedPassword);
    console.log("res login", res);
    window.location.href = "/login";
  };

  const _handleUserNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const enteredUsername = event.target.value;
    setUserName(enteredUsername);
  };

  const _handleUserEmailChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const enteredEmail = event.target.value;
    setUserEmail(enteredEmail);
  };

  const _handlePasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const enteredPassword = event.target.value;
    setPassword(enteredPassword);
  };

  const _handleConfirmedPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const confirmedPassword = event.target.value;
    setConfirmedPassword(confirmedPassword);
  };

  return (
    <div className="formContainer">
      <form onSubmit={_handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          data-test="username"
          value={userName}
          onChange={_handleUserNameChange}
        />
        <label>Email</label>
        <input
          type="text"
          data-test="username"
          value={userEmail}
          onChange={_handleUserEmailChange}
        />
        <label>Password</label>
        <input
          type="password"
          data-test="password"
          value={password}
          onChange={_handlePasswordChange}
        />
        <label>Confirm Password</label>
        <input
          type="password"
          data-test="password"
          value={confirmedPassword}
          onChange={_handleConfirmedPasswordChange}
        />
        <button type="submit" value="Log In" data-test="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
