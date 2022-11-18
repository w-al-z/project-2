import React from "react";
import "./Main.css";
import image from "../Assets/Images/pics.png";
import images from "../Assets/Images/Group.png";
import imagess from "../Assets/Images/Group.png";
import img1 from "../Assets/Images/Rectangle.png";
import img2 from "../Assets/Images/Rectangle1.png";
import img3 from "../Assets/Images/Rectangle2.png";
import img4 from "../Assets/Images/Rectangle.png";
import img5 from "../Assets/Images/Rectangle1.png";
import img6 from "../Assets/Images/Rectangle2.png";
import img7 from "../Assets/Images/square.png";
import immg from "../Assets/Images/Progressbar.png";
import pics from "../Assets/Images/img.png";
import pic from "../Assets/Images/Groups.png";
import picc from "../Assets/Images/WhatsApp.png";

const Main = () => {
  return (
    <div>
      <div className="container">
        <div>
          <p className="hazrat">Hazrat Concept</p>
          <h1 className="bedroom">2 Bedroom Serviced Apartments</h1>

          <div className="imgs">
            <img id="img" src={image} />
          </div>
          <img id="img1" src={images} />
          <img id="img2" src={imagess} />

          <div className="picLog">
            <img id="img3" src={img1} />
            <img id="img3" src={img2} />
            <img id="img3" src={img3} />
            <img id="img3" src={img4} />
            <img id="img3" src={img5} />
            <img id="img3" src={img6} />
          </div>

          {/* <div className="box">
            <p className="property">Property Developer</p>
            <small>information</small>
            <div>
              <button className="btn">Visit Developer Page</button>
            </div>
          </div>
          <img id="vb" src={img7} /> */}
        </div>
        <div className="flex">
          <button className="btn-1">Open</button>

          <div className="fx">
            <span className="amount">₦1,132,550</span>
            <small className="raised">Raised</small>
          </div>

          <div className="immg">
            <img src={immg} />
          </div>
          <div className="cl">
            <button className="btn2">Goal</button>
            <span className="cash">₦100,000,000</span>
          </div>
          <div className="card">
            <div className="pp">
              <img className="pl" src={pics} />
              <div>
                <small className="sponsored">sponsored</small>
                <p className="naira">₦10,000</p>
              </div>
            </div>
            <small className="months">9 months ago</small>
          </div>
          <div className="card">
            <div className="pp">
              <img className="pl" src={pics} />
              <div>
                <small className="sponsored">sponsored</small>
                <p className="naira">₦250,000</p>
              </div>
            </div>
            <small className="months">9 months ago</small>
          </div>
          <div className="card1">
            <div className="pp">
              <img className="pl" src={pics} />
              <div>
                <small className="sponsored">sponsored</small>
                <p className="naira">₦10,000</p>
              </div>
            </div>
            <small className="months">9 months ago</small>
          </div>

          <div className="tp">
            <img className="sign" src={pic} />
            <small className="see">See More</small>
          </div>

          <button className="btn-2">Invest Now</button>
          <button className="btn-3">Share Project</button>

          <img className="vn" src={picc} />
        </div>
      </div>
    </div>
  );
};

export default Main;
