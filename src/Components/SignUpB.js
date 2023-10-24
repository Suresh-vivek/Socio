import "./SignUpB.css";
import SignUp from "./SignUp";

const SignUpB = () => {
  return (
    <div className="outer-loginb">
      <div className="inner-left"></div>

      <div className="login-base">
        <SignUp />
      </div>

      <div className="login-content">
        <img src={require("../Assets/logo.png")} />
      </div>

      <span className="login-para">Empowering the Next Generation</span>
      <span className="new-here">Already Registered?</span>
    </div>
  );
};

export default SignUpB;
