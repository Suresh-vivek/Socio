import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faBuildingNgo,
  faChalkboardUser,
} from "@fortawesome/free-solid-svg-icons";
import "./Button.css";

const Button = (props) => {
  return (
    <a href="#" className="anchor">
      <div className="outer">
        <img src={props.icon} />
        <p>{props.text}</p>
      </div>
    </a>
  );
};

export default Button;
