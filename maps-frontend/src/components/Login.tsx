import React, { useState } from "react";
import { login } from "../services/loginFormHandler";

import "./Login.css";

export interface LoginProps {
  submitHandler: (token: string) => void;
}

const Login: React.FC<LoginProps> = (props) => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const _handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const res = await login(userName, password);
    console.log("res login", res);
    props.submitHandler(res.accessToken);
  };

  const _handleUserNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const enteredUsername = event.target.value;
    setUserName(enteredUsername);
  };

  const _handlePasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const enteredPassword = event.target.value;
    setPassword(enteredPassword);
  };

  return (
    <div className="formContainer">
      <form onSubmit={_handleSubmit}>
        <label>User Name</label>
        <input
          type="text"
          data-test="username"
          value={userName}
          onChange={_handleUserNameChange}
        />
        <label>Password</label>
        <input
          type="password"
          data-test="password"
          value={password}
          onChange={_handlePasswordChange}
        />
        <button type="submit" value="Log In" data-test="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
