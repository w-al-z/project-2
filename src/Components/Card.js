import React from "react";
import "./Card.css";
import box1 from "../Assets/Images/box1.png";
import box2 from "../Assets/Images/box1.png";
import box3 from "../Assets/Images/box1.png";
import box4 from "../Assets/Images/box1.png";

const Card = () => {
  return (
    <div>
      <div className="cont">
        <div className="abc">
          <p className="get">Get all the support you need, </p>
          <p className="online">Contact our online agent </p>
          <p className="in">
            Get in touch or create account. We are 24/7 available
          </p>
        </div>

        <div>
          <button className="us">Contact Us</button>
        </div>
      </div>

      <div>
        <img className="box-1" src={box1} />
        <img className="box-2" src={box2} />
        <img className="box-3" src={box3} />
        <img className="box-4" src={box4} />
      </div>
    </div>
  );
};

export default Card;
