import "./ButtonBase.css";

const ButtonBase = (props) => {
  return (
    <a href="#" className="anchors">
      <div className="outer-smallb">
        <p className="para">{props.text}</p>
      </div>
    </a>
  );
};

export default ButtonBase;
