import React, { useState } from "react";
import IntroductionUI from "./Introduction_UI";
import SkillUI from "./Skill_UI";
import ThoughtUI from "./Thought";
import Deco2 from "../../../Assets/dots.png";

var intFrameWidth = window.innerWidth;
const About = () => {
  const [Tag, setTag] = useState("IntroductionUI");

  function SelectPannel() {
    switch (Tag) {
      case "IntroductionUI":
        return <IntroductionUI />;
      case "SkillUI":
        return <SkillUI intFrameWidth={intFrameWidth} />;
      default:
        return <ThoughtUI intFrameWidth={intFrameWidth} />;
    }
  }

  return (
    <div className="divMainContent">
      {/* <img src={Deco2} className="PicDeco PicDecoBG1" alt="" />
      <img src={Deco2} className="PicDeco PicDecoBG2" alt="" /> */}

      <div className="divTag">
        <label
          onClick={() => {
            setTag("IntroductionUI");
          }}
          className={
            "labTag " + (Tag === "IntroductionUI" ? "labTag-selected" : "")
          }
        >
          自我介紹
        </label>
        <label
          onClick={() => {
            setTag("SkillUI");
          }}
          className={"labTag " + (Tag === "SkillUI" ? "labTag-selected" : "")}
        >
          技能表
        </label>
        <label
          onClick={() => {
            setTag("ThoughtUI");
          }}
          className={"labTag " + (Tag === "ThoughtUI" ? "labTag-selected" : "")}
        >
          工作理念
        </label>
      </div>
      <div className={"MainTxt " + (Tag === "SkillUI" ? "MainTxt-Top" : "")}>
        <SelectPannel />
      </div>
    </div>
  );
};

export default About;
