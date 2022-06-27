import React, { useState ,useContext} from "react";
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from "../context/notes/ThemeContext";


const SignUp = () => {
  const { setMsg } = useContext(ThemeContext)
    const [credentials, setCredentials] = useState({ name:"", email: "", password: "" ,cpassword:""});
    let navigate= useNavigate()
  const host = "https://cloudsnotess.herokuapp.com/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {name, email, password } = credentials
    //API call
    const response = await fetch(`${host}/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password })
    });
    const json = await response.json();
      console.log(json);
      if (json.success)
      {
        localStorage.setItem('token', json.authtoken)
        navigate("/")
        setMsg("You have signed-up", "success")
      }
      else {
          alert("use proper credentials")
      }
  };

  const {theme} = useContext(ThemeContext)
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className={`bg-${theme} text-${theme === 'dark'?'light':'dark'}`}>

    <div className="container">
       <h2>SignUp to i-Notebook</h2>
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="name"
            onChange={onChange}
            value={credentials.name}
            className="form-control"
                      id="name"
                      name="name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
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
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            onChange={onChange}
            value={credentials.password}
            className="form-control"
                      id="password"
            name="password"
            minLength={3}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">
           confirm Password
          </label>
          <input
            type="password"
            onChange={onChange}
            className="form-control"
                      id="cpassword"
            name="cpassword"
            minLength={3}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      </div>
      </div>
  );
};


export default SignUp
