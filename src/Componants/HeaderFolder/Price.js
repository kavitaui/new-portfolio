import pricing1 from "../../Asset/images/pricing-img-1.jpg";
import pricing2 from "../../Asset/images/pricing-img-3.jpg";
import pricing3 from "../../Asset/images/service-11.jpg";
export default function Price() {
    return (
        <div className="col-12">
            <div className="row "><div><h2>Wedding Packages and Offers</h2></div>
            
            </div>
            <div className="row picture">
                <div className="col-4">
                    <img src ={pricing1} alt =""/>
                    Romance Package
                   <p> $400.00</p>
               <h5>2 Nights in a Luxurious Bridal Suite</h5>
          <hr/>
             
             Glass of Sparkling Wine to celebrate
               Beautiful gardens for photographs
               
                </div>
                <div className="col-4"> <img src ={pricing2} alt =""/>
                Dream Package
                <p>$700.00</p>
                </div>
                <div className="col-4"> <img src ={pricing3} alt ="" height ="240"/>Celebration Package
                <p >$900.00</p></div>
            </div>
            </div>
    )
}