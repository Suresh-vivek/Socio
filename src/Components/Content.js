import "./Content.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faBuildingNgo,
  faChalkboardUser,
} from "@fortawesome/free-solid-svg-icons";
import ngo from "../Assets/ngo.png";
import teacher from "../Assets/teacher.png";
import Button from "./Button";

import { BrowserRouter, Route, Link } from "react-router-dom";

import ios from "../Assets/ios.png";
import android from "../Assets/and.png";

import Buttonapp from "./Buttonapp";
import LoginB from "./LoginB";

const Content = () => {
  return (
    <div>
      <div class="gradient">
        <h1>Our Misson</h1>
        <p class="moto">
          "Empowering tomorrow's leaders with the gift of education
          today.Nurturing the minds of young children through community-driven
          teachings.A brighter future starts with the education of our youth,
          and we're here to help.Join us on a journey to make knowledge
          accessible and free for all."
        </p>

        <h1 class="Login-text">Enter As</h1>
        <div className="buttons">
          <div className="button-left">
            <Link to="/loginB">
              <Button text="NGO" icon={ngo} />
            </Link>
          </div>

          <div className="button-right">
            <Button text="Educator" icon={teacher} />
          </div>
        </div>

        <div className="icons">
          <div className="one">
            <img
              src={require("../Assets/student.png")}
              className="content-image"
            />

            <div className="contents">
              <span className="big">5K+</span>
              <span className="small">Students Benifited</span>
            </div>
          </div>

          <div className="two">
            <img
              src={require("../Assets/building.png")}
              className="content-image"
            />

            <div className="contents">
              <span className="big">100+</span>
              <span className="small">NGO Onboard</span>
            </div>
          </div>

          <div className="three">
            <img
              src={require("../Assets/teach.png")}
              className="content-image"
            />
            <div className="contents">
              <span className="big">150+</span>
              <span className="small">Educators Registered</span>
            </div>
          </div>
        </div>
      </div>

      <div className="download">
        <div className="app-icon">
          <img src={require("../Assets/app.png")} />
        </div>

        <div className="app-content">
          <div className="app-content-data">
            <span className="app-big">DOWNLOAD </span>
            <span className="app-small">OUR APP</span>
          </div>

          <div className="app-button">
            <Buttonapp text="IOS" icon={ios} />
            <Buttonapp text="Android" icon={android} />
          </div>
        </div>
      </div>

      <div className="footer-outer">
        <a
          href="https://www.linkedin.com/in/vivek-kumar-791302158/"
          target="_blank"
        >
          <img src={require("../Assets/linked.png")} alt="linkedin" />
        </a>

        <a href="#">
          <img src={require("../Assets/twitter.png")} alt="twitter" />
        </a>

        <a href="#">
          <img src={require("../Assets/insta.png")} alt="insta" />
        </a>

        <a href="#">
          <img src={require("../Assets/fb.png")} alt="facebook" />
        </a>

        <a href="#">
          <img src={require("../Assets/mail.png")} alt="Email" />
        </a>
      </div>
    </div>
  );
};
export default Content;
