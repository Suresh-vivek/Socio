import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div className="outer-div">
      <div className="inner-left">
        <img src={require("../Assets/logo.png")} alt="Logo" />
        <b>{props.text}</b>
      </div>

      <div className="inner-right">
        <div class="links">
          <a href="#">
            <b>Contact Us </b>
          </a>

          <Link to="/donation">
            {" "}
            <a href="#">
              <b>Donate</b>{" "}
            </a>
          </Link>

          <a href="#">
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
