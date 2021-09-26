import React, { useContext } from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import { RooterContext } from "../../index";

const Btnicons = () => {
  const { BtnEnterRef, setNowRooter } = useContext(RooterContext);
  let history = useHistory();

  function setLink(sName) {
    setNowRooter(sName);
    history.push("/" + sName);
  }

  return (
    <Router>
      <div className="wrapper" ref={BtnEnterRef}>
        <Link to="/Itroduction" onClick={() => setLink("Itroduction")}>
          <div className="icon Itroduction">
            <div className="tooltip">Itroduction / 關於我</div>
            <span>
              <i className="bi bi-person-lines-fill"></i>
            </span>
          </div>
        </Link>
        <Link to="/Portfile" onClick={() => setLink("Portfile")}>
          <div className="icon Portfolio">
            <div className="tooltip">Portfolio / 作品集</div>
            <span>
              <i className="bi bi-archive-fill"></i>
            </span>
          </div>
        </Link>
        <Link to="/Contact" onClick={() => setLink("Contact")}>
          <div className="icon Contact">
            <div className="tooltip">Contact / 聯絡資訊</div>
            <span>
              <i className="bi bi-info-lg"></i>
            </span>
          </div>
        </Link>
      </div>
      <Switch>
        <Route path="/:id" />
      </Switch>
    </Router>
  );
};

export default Btnicons;
