import "./LoginB.css";
import Login from "./Login";
import { Link } from "react-router-dom";
const LoginB = () => {
  return (
    <div className="outer-loginb">
      <div className="inner-left"></div>
      <div className="inner-rightb"></div>

      <div className="login-base">
        <Login />
      </div>

      <div className="login-content">
        <Link to="/"> <img src={require("../Assets/logo.png")} /></Link>
        
      </div>

      <span className="login-para">Empowering the Next Generation</span>
      <span className="new-here">New Here?</span>
    </div>
  );
};

export default LoginB;
