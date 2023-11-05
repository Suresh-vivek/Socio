import "./SignUpB.css";
import SignUp from "./SignUp";
import { Link } from "react-router-dom";

const SignUpB = () => {
  return (
    <div className="outer-loginb">
      <div className="inner-left"></div>

      <div className="login-base">
        <SignUp />
      </div>

      <div className="login-content">
        <Link to="/">
          {" "}
          <img src={require("../Assets/logo.png")} />
        </Link>
      </div>

      <span className="login-para">Empowering the Next Generation</span>
      <span className="new-here">Already Registered?</span>
    </div>
  );
};

export default SignUpB;
