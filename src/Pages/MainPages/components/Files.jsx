import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import $ from "jquery";
import jsonData from "../../../db.json";

const TypeArray = [
  "互動網站與遊戲開發",
  "RWD 活動頁面",
  "平面設計",
  "動畫 / 影片剪輯",
];

const Contact = () => {
  const [Filedata, setFiledata] = useState([]);

  const [SelectType, setSelectType] = useState(TypeArray[0]);

  useEffect(() => {
    const fetchData = async () => {
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
      setFiledata(data);
      $(".divFileLists").animate({ scrollTop: 0 }, "fast");
    };

    fetchData();
  }, [SelectType]);

  const goURL = (sURL) => {
    window.open(sURL, "_blank");
  };

  return (
    <div className="divFileMain">
      <div className="divFileType">
        {TypeArray.map((TypeName) => (
          <label
            key={uuidv4()}
            onClick={() => setSelectType(TypeName)}
            className={SelectType === TypeName ? "labelSelect" : ""}
          >
            {TypeName}
          </label>
        ))}
      </div>
      <div className="divFileLists">
        {Filedata.map((Type) => (
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
            className={Type.URL === "" ? "divFileList divFileList_NotLink" : "divFileList"}
          >
            <img src={process.env.PUBLIC_URL + "/Files/" + Type.img} alt="" />
            <h3>{Type.title}</h3>
            <div className="divFileSpecial">{Type.Special}</div>
            <div className="divFileSkill">{Type.Skill}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
