import React, { useContext } from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { RooterContext } from "../index";
import About from "./components/about";

function Details() {
  const { BtnEnterRef, setNowRooter } = useContext(RooterContext);

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <div className="wrapper wrapper_Bottom" ref={BtnEnterRef}>
            <Link to="/Itroduction">
              <div className="icon Itroduction">
                <div className="tooltip">Itroduction / 關於我</div>
                <span>
                  <i className="bi bi-person-lines-fill"></i>
                </span>
              </div>
            </Link>
            <Link to="/Portfile">
              <div className="icon Portfolio">
                <div className="tooltip">Portfolio / 作品集</div>
                <span>
                  <i className="bi bi-archive-fill"></i>
                </span>
              </div>
            </Link>
            <Link to="/Contact">
              <div className="icon Contact">
                <div className="tooltip">Contact / 聯絡資訊</div>
                <span>
                  <i className="bi bi-info-lg"></i>
                </span>
              </div>
            </Link>
          </div>
          <Switch>
            <Route path="/:id" children={<Child />} />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

function Child() {
  let { id } = useParams();

  switch (id) {
    case "Itroduction":
      return <About />;
    case "Portfile":
      return (
        <div>
          <h3>ID: {id}</h3>
        </div>
      );
    case "Contact":
      return (
        <div>
          <h3>ID: {id}</h3>
        </div>
      );
    default:
      break;
  }
}

export { Details };
