import "./SignUp.css";
import ButtonBase from "./ButtonBase";
import SubmitButton from "./SubmitButton";
import axios from "axios";
import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [ngoid, setNgoid] = useState();
  const [ngoname, setNgoname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [address, setAddress] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please enter email and password.");
    } else {
      axios
        .post("http://localhost:3004/register", {
          ngoid,
          ngoname,
          email,
          password,
          address,
        })
        .then((result) => {
          console.log(result);
          // Clear the input fields
          setNgoid("");
          setNgoname("");
          setAddress("");
          setEmail("");
          setPassword("");
          alert("Registered Successfully");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="outer-signup">
      <Link to="/loginB">
        <div className="register-button">
          <ButtonBase text="Login" />
        </div>
      </Link>

      <div className=".inner-right-signup ">
        <div className="heading-signup">Sign Up</div>

        <div className="signup-form">
          <form className="sform" onSubmit={handleSubmit}>
            {/* NGO ID*/}
            <div className="Label-signup">
              <label htmlFor="ngoid">NGO ID</label>
            </div>

            <div>
              <input
                type="text"
                placeholder="Enter NGO ID"
                autoComplete="off"
                name="ngoid"
                className="form-field-signup"
                onChange={(e) => setNgoid(e.target.value)}
                value={ngoid}
              />
            </div>

            {/* NGO Name*/}

            <div className="Label-signup">
              <label htmlFor="ngoname">NGO Name</label>
            </div>

            <div>
              <input
                type="text"
                placeholder="Enter NGO Name"
                autoComplete="off"
                name="ngoname"
                className="form-field-signup"
                onChange={(e) => setNgoname(e.target.value)}
                value={ngoname}
              />
            </div>

            {/* NGO Email*/}

            <div className="Label-signup">
              <label htmlFor="email">Email</label>
            </div>

            <div>
              <input
                type="email"
                placeholder="Enter Email"
                autoComplete="off"
                name="email"
                className="form-field-signup"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>

            {/* NGO Password*/}

            <div className="Label-signup">
              <label htmlFor="password">Password</label>
            </div>

            <div>
              <input
                type="password"
                placeholder="Enter Password"
                autoComplete="off"
                name="password"
                className="form-field-signup"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>

            {/* NGO Address*/}

            <div className="Label-signup">
              <label htmlFor="address">Address</label>
            </div>

            <div>
              <input
                type="text"
                placeholder="Enter Address"
                autoComplete="off"
                name="address"
                className="form-field-signup"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
              />
            </div>

            <div>
              <SubmitButton text="Register" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
