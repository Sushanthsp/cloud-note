import React, { useState,useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from "../context/notes/ThemeContext";

const Login = () => {

  const { setMsg } = useContext(ThemeContext)
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    let navigate= useNavigate()
  const host = "http://localhost:5000";

  const handleSubmit = async (e) => {
    e.preventDefault();
    //API call
    const response = await fetch(`${host}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
      console.log(json);
      if (json.success)
      {
          localStorage.setItem('token', json.authtoken)
        navigate("/")
        setMsg("You have logged in", "success")
        
      }
      else {
          alert("use proper credentials")
      }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div>
       <h2>Login to i-Notebook</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            value={credentials.email}
            onChange={onChange}
            className="form-control"
                      id="email"
                      name="email"
            aria-describedby="email"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            onChange={onChange}
            value={credentials.password}
            className="form-control"
                      id="password"
                      name="password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
