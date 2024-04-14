import React, { useState, useEffect } from "react";
import Introduction_UI from "./Introduction_UI";
import Skill_UI from "./Skill_UI";
import Thought_UI from "./Thought";
import "./about.scss";

const About = () => {
  const [Tag, setTag] = useState("Introduction_UI");

  function SelectPannel() {
    switch (Tag) {
      case "Introduction_UI":
        return <Introduction_UI />;
      case "Skill_UI":
        return <Skill_UI />;
      default:
        return <Thought_UI />;
    }
  }

  return (
    <div>
      <div className="PicDeco PicDeco1"></div>
      <div className="divTag">
        <label
          onClick={() => {
            setTag("Introduction_UI");
          }}
          className={
            "labTag " + (Tag === "Introduction_UI" ? "labTag-selected" : "")
          }
        >
          自我介紹
        </label>
        <label
          onClick={() => {
            setTag("Skill_UI");
          }}
          className={"labTag " + (Tag === "Skill_UI" ? "labTag-selected" : "")}
        >
          技能表
        </label>
        <label
          onClick={() => {
            setTag("Thought_UI");
          }}
          className={
            "labTag " + (Tag === "Thought_UI" ? "labTag-selected" : "")
          }
        >
          工作理念
        </label>
        <div className="MainTxt">
          <SelectPannel />
        </div>
      </div>
    </div>
  );
};

export default About;
