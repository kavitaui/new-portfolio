import React from "react";
import service1 from "../../Asset/images/service-11.jpg";
import service2 from "../../Asset/images/service-21.jpg";
export default function AboutUs(){
    return(
        <div className="col-12 px-2 py-2">
            <div className="row">

         <div className="heanding">Our Venue Services</div>  
          <div className="col-6">
            <img src={service2} alt =""/>


          </div>
          <div className="col-6">
          <img src={service1} alt =""/>
          </div>
          </div>
        </div>
    )

}