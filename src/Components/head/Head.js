import React from "react";
import { FaGithub, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

function Head() {
  return (
    <div className="headWrap">
      <div>
        <h2>Welcome to the Personal Coding Playground of</h2>
        <h1>Kenneth Brook</h1>
        <h3>Full Stack Web Developer</h3>
      </div>
      <div className="socialBlock">
        <h1>
          <FaGithub />
        </h1>
        <h1>
          <FaLinkedin />
        </h1>
        <h1>
          <FaTwitterSquare />
        </h1>
      </div>
    </div>
  );
}

export default Head;
