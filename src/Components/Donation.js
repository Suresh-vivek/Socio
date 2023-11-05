import "./Donation.css";
import BackButton from "./BackButton";

const Donation = () => {
  return (
    <div>
      <div className="back-button">
            <BackButton />
          </div>
          
      <div className="donate-bg"></div>
      <div className="donate-inner">
        <div className="donate-left-image">
          <div className="donate-image-blur">
            <img src={require("../Assets/logo.png")} alt="Logo" />
            <span className="donate-text">We Can Save The Future</span>
          </div>
        </div>

        <div className="donate-right">
          <span className="donate-quote">
            "Your generosity fuels our mission and lights the path to a brighter
            future for underprivileged students. Together, we can make education
            accessible to all, one donation at a time."
          </span>
          <img
            src={require("../Assets/qr.png")}
            alt="qr"
            className="donate-quote-img"
          />
          <span className="donate-right-text"> Scan the QR Code</span>
          <span className="donate-right-text1"> To Help Us!</span>
        </div>
      </div>
    </div>
  );
};

export default Donation;
