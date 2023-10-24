import "./Login.css";
import ButtonBase from "./ButtonBase";
import SubmitButton from "./SubmitButton";
import axios from "axios";
import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3004/login", { email, password })
      .then((result) => {
        console.log(result);
        // Clear the input fields
        if (result.data === "Success") {
          navigate("/ngohome");
        } else {
          alert("Invalid Credentials");
        }
        setEmail("");
        setPassword("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="outer-login">
      <Link to="/signup">
        <div className="register-button">
          <ButtonBase text="Create Account" />
        </div>
      </Link>
      <div className="inner-rights">
        <div className="heading">Login</div>
        <div className="Login-form">
          <form className="lform" onSubmit={handleSubmit}>
            <div className="Labels">
              <label htmlFor="email">Email</label>
            </div>

            <div>
              <input
                type="email"
                placeholder="Enter Email"
                autoComplete="off"
                name="email"
                className="form-fields"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>

            <div className="Labels">
              <label htmlFor="password">Password</label>
            </div>

            <div>
              <input
                type="password"
                placeholder="Enter Password"
                autoComplete="off"
                name="password"
                className="form-fields"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>

            <div>
              <SubmitButton text="Login" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
