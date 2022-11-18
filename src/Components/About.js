import React from "react";
import "./About.css";

const About = () => {
  return (
    <div>
      <div className="about-container">
        <div className="box2">
          <h4 className="the">About The Project</h4>
          <p className="project">Project Description</p>
        </div>
        <div className="box2">
          <h4 className="the1">About The Company</h4>
          <p className="project1">Learn About the Raiser</p>
        </div>
        <div className="box2">
          <h4 className="the1">Investment Risk</h4>
          <p className="project1">See Risk Levels</p>
        </div>
        <div className="box2">
          <h4 className="the1">Project Disclaimer</h4>
          <p className="project1">Be Aware</p>
        </div>
        <div className="box2">
          <h4 className="the1">Reviews</h4>
          <p className="project2">See what clients are saying</p>
        </div>
      </div>
      <div className="border"></div>

      <div className="mid">
        <div className="p1">
          <p className="wait">Wait Period Before ROI</p>
          <h2 className="month">12 Months</h2>
        </div>

        <div className="p1">
          <p className="roi">ROI Percentage</p>
          <h2 className="perc">20%</h2>
        </div>
      </div>
    </div>
  );
};

export default About;
