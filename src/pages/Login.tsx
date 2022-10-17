import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router";
import "./styles.css";

interface User {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [user, setUser] = useState<User[]>([]);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newUser = { email: email, password: password };
    if (!email || !password) {
      // setUser([...user, newUser]);
      console.log("please enter the credentials");
    } else {
      setUser([...user, newUser]);
      // console.log(user);
    }
  };

  useEffect(() => {
    // if (!user) {
    //   // <Navigate to="/todolist" />;
    //   navigate("/");
    // } else {
    //   navigate("/todolist");
    // }
    if (user) {
      navigate("/todolist");
    }
  }, [user]);

  return (
    <main className="main-login-container">
      <div className="login-wrapper">
        <form className="login-form-container" onSubmit={handleSubmit}>
          <h2 className="login-heading">LOGIN</h2>
          <label htmlFor="email-id" className="login-label">
            Email
          </label>
          <input
            className="input-text"
            type="email"
            name="email-id"
            id="email-id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@example.com"
          />
          <label htmlFor="password" className="login-label">
            Password
          </label>
          <input
            className="input-text"
            type="password"
            name="password"
            id="password"
            placeholder="*************"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="login-button-container">
            <button className="btn btn-primary mb-1" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
