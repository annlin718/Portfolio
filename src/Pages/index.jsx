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

  const BtnEnterRef = useRef();
  const [NowRooter, setNowRooter] = useState(query);

  useEffect(() => {
    // console.log(NowRooter);
  }, [NowRooter]);

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
        <Router>
          <RooterContext.Provider value={{ BtnEnterRef, setNowRooter }}>
            <Intro />
          </RooterContext.Provider>
        </Router>
      );
  }
}

export { App };
