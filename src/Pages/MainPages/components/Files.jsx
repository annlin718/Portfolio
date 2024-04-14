import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import $ from "jquery";
// import { API_GET_DATA } from "../../../global/constants";
import jsonData from "../../../db.json";

const TypeArray = [
  "互動網站與遊戲開發",
  "RWD 活動頁面",
  "平面設計",
  "動畫 / 影片剪輯",
];
const Contact = () => {
  let fetchData = async function (setFiledata) {
    // async function fetchData(setFiledata) {
    // const res = await fetch(API_GET_DATA);
    // const res = await fetch(jsonData);
    // const { data } = await res.json();

    console.log(SelectType);
    let data;
    switch (SelectType) {
      case TypeArray[0]:
        data = jsonData.Files.InterWeb;
        break;
      case TypeArray[1]:
        data = jsonData.Files.RWD;
        break;
      case TypeArray[2]:
        data = jsonData.Files.Image;
        break;
      case TypeArray[3]:
        data = jsonData.Files.Film;
        break;
      default:
        data = jsonData.Files.InterWeb;
        break;
    }

    setFiledata((prevdata) => (prevdata = data));
    $(".divFileLists").animate({ scrollTop: 0 }, "fast");
  };

  const [Filedata, setFiledata] = useState(() => {
    return [];
  });

  const [SelectType, setSelectType] = useState(() => {
    return TypeArray[0];
  });

  useEffect(() => {
    fetchData(setFiledata);
  }, [SelectType]);

  const goURL = (sURL) => {
    window.open(sURL, "_blank");
  };

  return (
    <div className="divFileMain">
      <div className="divFileType">
        {TypeArray.map(function (TypeName) {
          //
          return (
            <label
              key={uuidv4()}
              onClick={() => setSelectType((prevdata) => (prevdata = TypeName))}
              className={SelectType === TypeName ? "labelSelect" : ""}
            >
              {TypeName}
            </label>
          );
        })}

        {/* <label onClick={() => (setSelectType = "")} className="labelSelect">
          互動網站與遊戲開發
        </label>
        <label>RWD 活動頁面</label>
        <label>LOGO 形象 / Banner 平面設計</label>
        <label>動畫 / 影片剪輯</label> */}
      </div>
      <div className="divFileLists">
        {Filedata.map(function (Type) {
          return (
            <div
              key={uuidv4()}
              onClick={() => {
                if (Type.URL === "") {
                  // 影片、圖片
                } else {
                  // 網頁
                  goURL(Type.URL);
                }
              }}
              className={
                Type.URL === ""
                  ? "divFileList divFileList_NotLink"
                  : "divFileList"
              }
            >
              <img src={process.env.PUBLIC_URL + "/Files/" + Type.img} alt="" />
              <h3>{Type.title}</h3>
              <div className="divFileSpecial">{Type.Special}</div>
              <div className="divFileSkill">{Type.Skill}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Contact;
