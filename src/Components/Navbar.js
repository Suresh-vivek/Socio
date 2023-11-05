import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div className="outer-div">
      <div className="inner-left">
        <Link to="/">
          {" "}
          <img src={require("../Assets/logo.png")} alt="Logo" />
        </Link>

        <b>{props.text}</b>
      </div>

      <div className="inner-right">
        <div class="links">
          <Link to="/contactus">
            <a className="alinks">
              <b>Contact Us </b>
            </a>
          </Link>

          <Link to="/donation">
            {" "}
            <a href="#" className="alinks">
              <b>Donate</b>{" "}
            </a>
          </Link>

          <a href="#download" className="alinks">
            <b>Download</b>
          </a>
        </div>

        <div>
          <img src={props.images} class="right-img" alt="children" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
