import React from "react";
import "./SubCard.css";
import img1 from "../Assets/Images/img1.png";
import img2 from "../Assets/Images/img2.png";
import img3 from "../Assets/Images/Group2.png";
const SubCard = () => {
  return (
    <div>
      <div className="subCard-container">
        <div className="tr">
          <p className="property">Property Developer</p>
          <small className="information">information</small>

          <div>
            <button className="visit">Visit Developer Page</button>
          </div>
          <img className="img1" src={img1} />
          <img className="img2" src={img2} />
        </div>
        <div className="tr1">
          <p className="property">Enter Deal Room</p>
          <small className="information">See All Supporting Documents</small>

          <div>
            <button className="visit">Visit Developer Page</button>
          </div>

          <img className="img1" src={img1} />
          <img className="img2" src={img2} />
        </div>
      </div>
      <img className="immmg3" src={img3} />
    </div>
  );
};

export default SubCard;
