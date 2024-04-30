import React, { useRef, useEffect, useState } from "react";
import { HashRouter as Router } from "react-router-dom";
import "./index.scss";
import { Intro } from "./Intro";
import { Details } from "./MainPages";

export const RooterContext = React.createContext();

function useQuery() {
  return String(window.document.location.hash);
}

function App() {
  let query = useQuery().replace(/\//g, "").replace(/#/g, "");

  useEffect(() => {
    const handlePopstate = () => {
      // 在這裏執行你需要的操作，例如重新加載數據等
      setNowRooter(String(window.document.location.hash).replace(/\//g, "").replace(/#/g, ""));
    };

    // 添加 popstate 事件監聽器
    window.addEventListener('popstate', handlePopstate);

    // 在組件卸載時移除事件監聽器
    return () => {
      window.removeEventListener('popstate', handlePopstate);
    };
  }, []);

  const BtnEnterRef = useRef();
  const [NowRooter, setNowRooter] = useState(query);

  switch (NowRooter) {
    case "Itroduction":
    case "Portfile":
    case "Contact":
      return (
        <RooterContext.Provider value={{ BtnEnterRef, setNowRooter }}>
          <Details />
        </RooterContext.Provider>
      );
    default:
      return (
        <RooterContext.Provider value={{ BtnEnterRef, setNowRooter }}>
          <Router>
            <Intro />
          </Router>
        </RooterContext.Provider>
      );
  }
}

export { App };
