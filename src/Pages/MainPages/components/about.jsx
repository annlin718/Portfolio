import React, { useState } from "react";
import "./about.scss";

const About = () => {
  const [Tag, setTag] = useState("Basic");
  return (
    <div>
      <div className="PicDeco PicDeco1"></div>
      <div className="divTag">
        <label className="labTag labTag-selected">自我介紹</label>
        <label className="labTag">技能表</label>
        <label className="labTag">工作理念</label>
      </div>
      <div className="MainTxt">
        您好，我是Ann 林君維 世新大學資訊傳播學系畢業
        <br />
        畢業後已經累積多年資訊開發相關的工作經驗 對前後端程式開發與網頁規劃與 UX
        <br />
        設計具高度熱誠 喜歡學習新的技術並多方涉略嘗試
        <br />
        可以有效率地進行獨立作業，也可與團隊互相激盪合作產生新創意
        <br />
        樂觀進取、善於分析思考是我的個人特質
        <br />
        <br />
        很幸運的在求學和工作的經歷中能多方累積跨領域的知識
        <br />
        從最初在傳播產業負責撰寫社群貼文到後來從事資訊工作
        <br />
        一步一步扎實地累積技術實力與開發經驗
        <br />
        從最初的測試/導入系統、到後端資料庫運用與程式開發...最後走到前端開發應用
        <br />
        讓我能從了解使用者的需求開始到最終有能力撰寫出第一線讓使用者使用的產品服務
        <br />
        這種種的挑戰與學習過程，雖然辛苦但非常的充實且有趣
        <br />
        希望在未來可以持續發揮自己的專長及經驗，利用科技與設計為公司與社會解決問題，持續開發好的服務及應用
      </div>
    </div>
  );
};

export default About;
