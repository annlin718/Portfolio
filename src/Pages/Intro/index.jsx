import React, { useRef, useEffect, useContext } from "react";
import ImgPhoto from "../../Assets/Photo.png";
import Circle from "./components/CircleAnimation";
import Btnicons from "./components/BtnIcons";
import { gsap } from "gsap";
import { RooterContext } from "../index";

function Intro() {
  const { BtnEnterRef } = useContext(RooterContext);
  const NameRef = useRef();

  useEffect(() => {
    var tl = gsap.timeline({});

    tl.fromTo(
      NameRef.current,
      {
        opacity: 0,
        y: "+1",
      },
      {
        opacity: 1,
        y: "-0",
      },
      "+=1"
    ).fromTo(
      BtnEnterRef.current,
      {
        opacity: 0,
        y: "+1",
      },
      {
        opacity: 1,
        y: "-0",
      }
    );
  }, [BtnEnterRef]);

  return (
    <div className="App">
      <header className="App-header">
        <div className="divPhoto">
          <img className="ImgPhoto" src={ImgPhoto} alt="" />
          <Circle />
        </div>
        <p className="IntroName" ref={NameRef}>
          Ann Lin
        </p>
        <Btnicons />
      </header>
    </div>
  );
}

export { Intro };
