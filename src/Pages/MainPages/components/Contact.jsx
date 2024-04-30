import React from "react";
import imgBGPhoto from "../../../Assets/mailbox.svg";
import imgBGPhoto2 from "../../../Assets/mailbox2.svg";

const Contact = () => {
  return (<div> <img className="imgBGPhoto" src={
    imgBGPhoto
  }

    alt="" /> <img className="imgBGPhoto2" src={
      imgBGPhoto2
    }

      alt="" /> <div className="divContact_item divContact_MainItem">Ann Lin</div> <div className="divContact_item"> <i className="bi bi-pin-map"></i> <span className="Contact_val">Taiwan, Taipei</span> </div> <div className="divContact_item"> <i className="bi bi-envelope-open"></i> <span className="Contact_val"> <a href="mailto:benny800718@gmail.com">benny800718@gmail.com</a> </span> </div> </div>);
}

  ;

export default Contact;