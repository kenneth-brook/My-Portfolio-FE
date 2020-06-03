import React from "react";

import html5 from "../images/html5.png";
import css from "../images/css.png";
import js from "../images/js.png";
import less from "../images/less.png";
import react from "../images/react.png";
import gatsby from "../images/gatsby.png";
import spring from "../images/spring.png";
import github from "../images/github.png";
import git from "../images/git.png";

function SkillsContent() {
  return (
    <div className="skillWrap">
      <img src={html5} alt="html" />
      <img src={css} alt="css" />
      <img src={js} alt="javascript" />
      <img src={less} alt="less" />
      <img src={react} alt="react" />
      <img src={gatsby} alt="gatsby" />
      <img src={spring} alt="react spring" />
      <img src={github} alt="github" />
      <img src={git} alt="git" />
    </div>
  );
}

export default SkillsContent;
