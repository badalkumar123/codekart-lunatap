import React from "react";
import "./Features.css";
import mobile from "../../img/mobile1.png";
import { AccountBoxOutlined, AddCardOutlined, CalendarMonth, CreditCardRounded, DocumentScannerOutlined, WysiwygOutlined } from "@mui/icons-material";

export default function Features() {
  return (
    <div className="featurescontainer">
      
      <div className="1ststage">
        <div className="mobile2"></div>
        <div className="featpara"></div>

        <img className="mobile3" src={mobile} alt=""></img>
        <div className="features">Features</div>
        <div className="featlogo1">
          <CreditCardRounded fontSize="large" />
        </div>
        <div className="charge">Charge in less than 27 seconds</div>
        <div className="tapout">
          Tap out an account, type or scan a card number and hit charge. Add a
          customer to send out a receipt!
        </div>
      </div>

      <div className="2ndstage">
        <div className="mob3"></div>
        <div className="featpara2"></div>

        <img className="mobile4" src={mobile} alt=""></img>

        <div className="featlogo2">
          <AccountBoxOutlined fontSize="large" />
        </div>
        <div className="useyour">Use your Existing Strip Account</div>
        <div className="fepara2">
          You already work with the best payment platform on the planet, witch
          means there's nothing more that you need to do. Sing in with Your
          Stripe account and you're and running!
        </div>
      </div>

      <div className="3rdstage">
        <div className="mob5"></div>
        <div className="featpara3"></div>

        <img className="mobile5" src={mobile} alt=""></img>

        <div className="featlogo3">
          <CalendarMonth fontSize="large" />
        </div>
        <div className="zeromonthly">
          Zero monthly fees, minimums or subscriptions
        </div>
        <div className="fepara3">
          Lunatap takes a really tiny fee of 0.1% on every charge. That's only
          10cents on every $100 charge. There are no setup fees, no monthly
          charges. no minimums and absolutely nothing else on top!
        </div>
      </div>

      <div className="4thstage">
        <div className="mob6"></div>
        <div className="featpara4"></div>

        <img className="mobile6" src={mobile} alt=""></img>

        <div className="featlogo4">
          <DocumentScannerOutlined fontSize="large" />
        </div>
        <div className="typeor">
          Type or Scan
        </div>
        <div className="fepara4">
          Tab in a card number or scan a card using your smartphone's built
          in camera. It's completely private and 100% secure, we promise.
        </div>
      </div>

      <div className="5thstage">
        <div className="mob7"></div>
        <div className="featpara5"></div>

        <img className="mobile7" src={mobile} alt=""></img>

        <div className="featlogo5">
          <AddCardOutlined fontSize="large" />
        </div>
        <div className="multicurrency">
          Multi Currency
        </div>
        <div className="fepara5">
          Lunatap supports all of the more than 135 currencies that Strip
          supports. Charge customers in their native Currency. get paid in 
          yours.
        </div>
      </div>

      <div className="6thstage">
        <div className="mob8"></div>
        <div className="featpara6"></div>

        <img className="mobile8" src={mobile} alt=""></img>

        <div className="featlogo6">
          <WysiwygOutlined fontSize="large" />
        </div>
        <div className="atiny">
         A Tiny POS in Your Pocket
        </div>
        <div className="fepara6">
          import, add and view your customers, add a sale note, send out 
          receipts and view your pervious transactions. Add a beautiful
          dashboard to boot. Your POS, in your Pocket.
        </div>
      </div>
    
    </div>
  );
}
