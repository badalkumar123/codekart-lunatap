import React from "react";
import "./Top.css";
import googleplay from "../../img/google-play-badge.png";
import apple from "../../img/apple.png";
import girl from "../../img/girl.jpg";
import mobile from "../../img/mobile1.png";
import { AccountBalanceOutlined, ArrowRightAlt, CreditCard } from "@mui/icons-material";


export default function Top() {
  return (
    <div className="container">
      <div className="posi">
        <div className="topheading">
          Lunatab is the beautiful easy way to take your Stripe account on the
          road
        </div>

        <div className="store">
          <img className="googlestore" src={googleplay} alt=""></img>
          <img className="appleestore" src={apple} alt=""></img>
        </div>
      </div>
      
      <div className="grlpage">
      
      
        <img className="girlpic" src={girl} alt=""></img>
        
      </div>
      <div className="colorwall"></div>
      <img className="mobi" src={mobile} alt=""></img>

      <div className="logo1"><CreditCard fontSize="large"/></div>
      <div className="logo2"><ArrowRightAlt fontSize="large"/></div>
      <div className="logo3"><AccountBalanceOutlined fontSize="large"/></div>
      
      
      <div className="strip">Stripe on your phone</div>
      <div className="money">Money in your bank account</div>
      <div className="paraone">Mexic carte lshav ebeenblamed for the arrival ?<br></br><br></br>

of fentanyl into Ohio, including a new deadly para-fluorofentanyl,dq the Ohio Bureau of dbd hhgd uwgd CriminalInvestigation said in 
</div>
    </div>
    
  );
}
