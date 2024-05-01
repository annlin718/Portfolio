import { v4 as uuidv4 } from "uuid";

const Skill_UI = (props) => {
  let intFrameWidth = props.intFrameWidth;

  let SkillType = [
    [["前端"], ["開發應用"]],
    [["後端/DB"], ["開發應用"]],
    [["多媒體"], ["設計製作"]],
    [["辦公軟體"], ["應用"]],
  ];

  let SkillList = [
    [
      "HTML",
      "CSS/SCSS",
      "JavaScript",
      "jQuery",
      "React",
      "GSAP(動畫)",
      "Webpack",
      "Git / GitHub",
    ],
    ["Asp.Net (C#)", "SQL Server"],
    ["Photoshop", "Illustrator ", "Flash / Animate", "Premiere", "Figma"],
    ["PowerPoint", "Word", "Excel", "Outlook / Gmail", "ChatGPT", "GitMind"],
  ];

  return (
    <div className="divSkill">
      {SkillType.map(function (Type, index) {
        return (
          <div key={uuidv4()} className="SkillBlock">
            <div className={"SkillTitle SkillTitle" + index}>
              {Type[0]}
              {intFrameWidth <= 768 ? "" : <br />}
              {Type[1]}
            </div>
            <div className="SkillList">
              {SkillList[index].map(function (list) {
                return <span key={uuidv4()}>{list}</span>;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Skill_UI;
