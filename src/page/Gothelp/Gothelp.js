import React from "react";
import "./Gothelp.css";

export default function Gothelp() {
  return (
    <div className="helppage">
      <div className="gethelp">Get Help!</div>
      <div className="helppara">
        If you’ve got a problem with Lunatap, please use the form below to reach
        out or drop us a line at help@lunatap.com
      </div>
      <form className="form1">
        <label className="label1">
          <div className="nametext">NAME</div>
          <input type="text" name="name" className="nameinput" />
          <div className="emailtext">EMAIL ADDRESS</div>
          <input type="text" name="Email" className="emailinput" />
          <div className="phonetext">PHONE NUMBER</div>
          <input type="text" name="" className="phoneinput" />
          <div className="messagetext">MESSANGE</div>
          
          <input type="text" name="" className="messageinput" />
          <button className="helpbutton">
              <h3>Contact us</h3>
            </button>
          
        </label>
      </form>
    </div>
  );
}
