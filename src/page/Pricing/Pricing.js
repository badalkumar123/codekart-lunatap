import React from "react";
import "./Pricing.css";

export default function Pricing() {
  return (
    <div className="pricecointainer">
        
      <div className="pric">Pricing</div>
      <div className="pricpara">
        Lunatap takes a really tiny fee of 0.1% on every chargr. thats only 10
        cents on every $100 charge. there's no monthly charge, no minimums and
        absolutely nothing else on top.
      </div>
      <div className="pricebox">
        <div className="ten">0.10%</div>
        <div className="percharge">per charge</div>
      </div>
      <div className="box2">
          <div className="box2text">Only 10 cents on every $100 charge</div>
      </div>
      
      <div className="pricelastnote">Pleaase note that Strip will continue to apply their regular fees to your account</div>
      </div>
   
  );
}
