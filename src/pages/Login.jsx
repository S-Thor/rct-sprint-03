import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [loginCreds, setLoginCreds] = useState({
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  });
  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginCreds({
      ...loginCreds,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loginCreds.email && loginCreds.password) {
      login(loginCreds.email, loginCreds.password);
    }
  };
  return (
    <div>
      Login
      <form onSubmit={handleSubmit} className="flex flex-col m-auto max-w-xs gap-3">
        <input data-cy="login-email"
              name="email"
              type="email"
              placeholder="Enter Email"
              value={loginCreds.email}
              onChange={handleChange} />
        <input data-cy="login-password"
              name="password"
              type="password"
              placeholder="Enter Password..."
              value={loginCreds.password}
              onChange={handleChange} />
        <button data-cy="login-submit" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
