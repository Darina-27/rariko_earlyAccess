import React from "react";
import Service_box from "./Service_box";

export default function Services() {
  return (
    <div className="container-fluid Services">
    <div class="container" style={{paddingTop:'50px'}}>
      <div class="row justify-content-md-center">
        <div class="col-sm-6">
            <Service_box servicetitle='PORTFOLIO TRACKER' servicedetails='Gone are the days where you have to switch between 5 to 10 apps to track your portfolio' imageS="./imag/s1.png"/>
        </div>
        <div class="col-sm-6"><Service_box servicetitle='CRYPTO INSIGHTS' servicedetails='Tired of spending time in front of your monitor? We arre bringing the most sofisticated crypto price alerts and recommendations'  imageS="./imag/s2.png"/></div>
      </div>

      <div class="row justify-content-md-center">
        <div class="col-sm-6">
            <Service_box servicetitle='ARBITRAGE FINDER' servicedetails='What if we tell you that you can take advantage of price difference in different exchanges using our algorithm' imageS="./imag/s3.png"/>
        </div>
        <div class="col-sm-6"><Service_box servicetitle='SOCIAL PLATFORM' servicedetails='Have your heard about metaverse or are you living under the rock? Here comes the smart way to interact with like minded people'  imageS="./imag/s4.png"/></div>
      </div>
    </div>
    </div>
  );
}
