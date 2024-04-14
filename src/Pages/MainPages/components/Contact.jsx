import React from "react";
import ImgBGPhoto from "../../../Assets/mailbox.svg";
import ImgBGPhoto2 from "../../../Assets/mailbox2.svg";
const Contact = () => {
  return (
    <div>
      <img className="ImgBGPhoto" src={ImgBGPhoto} alt="" />
      <img className="ImgBGPhoto2" src={ImgBGPhoto2} alt="" />
      <div className="divContact_item divContact_MainItem">Ann Lin</div>
      <div className="divContact_item">
        <i class="bi bi-pin-map"></i>
        <span className="Contact_val">Taiwan, Taipei</span>
      </div>
      <div className="divContact_item">
        <i class="bi bi-envelope-open"></i>
        <span className="Contact_val">
          <a href="mailto:benny800718@gmail.com">benny800718@gmail.com</a>
        </span>
      </div>
    </div>
  );
};

export default Contact;
