import "./Buttonapp.css";

const Buttonapp = (props) => {
  return (
    <a href="#" className="anchors">
      <div className="outer-small">
        <img src={props.icon} />
        <p className="para">{props.text}</p>
      </div>
    </a>
  );
};

export default Buttonapp;
