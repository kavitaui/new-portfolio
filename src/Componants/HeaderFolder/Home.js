import React from "react";
export default function Home (){
    return(
        <div className="col-12 ">
            <div className="row px-5 py-5 pic">
            <div className="= col-6 content "><h1>Get Special Offer
                 upto 15% in Our
                  Wedding Venue</h1></div>
                <div className="col-6 py-4 px-5">
                <div className="col-6"></div>
                  <div className=" col-10 px-5 booking"> <h4> Book 
                A Wedding Venue</h4>
                <div className="form-group px-5 py-2">
              <form>
                <div className="form-row   py-2   ">
                <div> <input type = "text" className="form-control mt-2 " placeholder="Name"/></div>
                 <div></div> <input type = "text" className="form-control mt-2  " placeholder="Phone"/>
                  <input type = "text" className="form-control mt-2 " placeholder="Email"/>
                  <input type = "text" className="form-control mt-2 " placeholder="Package"/>
                  <input type = "text" className="form-control mt-2" id="datepicker" placeholder="Avilability"/>
                  <input type = "submit" className="custom-button mt-2  " value="CHECK AVILABILITY "/>
                </div>
                
              </form>
              </div>
              </div>
</div>
                  </div>
                   </div> 
           
     
    )
}