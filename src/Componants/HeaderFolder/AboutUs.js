import React from "react";
import service1 from "../../Asset/images/service-11.jpg";
import service2 from "../../Asset/images/service-21.jpg";
export default function AboutUs(){
    return(
        <div className="col-12 ">
            <div className="row px-2 py-2">

         <div className="heading">Our Venue Services</div>  
          <div className="col-6">
            <img src={service2} alt =""/>
           <h3>Wedding Ceremony</h3> 
Praesent elementum felis a orci convallis accumsan. Pellentesque vel dui a nulla feugiat vestibulum sed sit amet ligula.

          </div>
          <div className="col-6">
          <img src={service1} alt =""/>
         <h3>Wedding Reception</h3>
Elementum felis a orci convallis accumsan. Pellentesque vel dui a nulla feugiat vestibulum lorem ipsum dolorsit amet.
          </div>
          </div>
        </div>
    )

}