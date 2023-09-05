import pricing1 from "../../Asset/images/pricing-img-1.jpg";
import pricing2 from "../../Asset/images/pricing-img-3.jpg";
import pricing3 from "../../Asset/images/service-11.jpg";
export default function Price() {
    return (
        <div className="col-12">
            <div className="row "><div><h2>Wedding Packages and Offers</h2></div>
            
            </div>
            <div className="col-12">
            <div className="row picture">
                <div className="col-4">
                   <img src ={pricing1} alt =""/>
                    Romance Package
                   <p> $400.00</p>
                   <ul class="angle-double-right">
 <li ><h6>2 Nights in a Luxurious Bridal Suite</h6></li><hr/>
                   <li><h6>Glass of Sparkling Wine to celebrate</h6></li><hr/>
                  <li> <h6>Beautiful gardens for photographs</h6></li></ul><hr/></div>
                   
                   <div className="col-4"> <img src ={pricing2} alt =""/>
                Dream Package
                <p>$700.00</p>
                <h6>Bridal Suite with bubbly & chocolates</h6><hr/>
                <h6>Traditional Scottish Piper</h6><hr/>
                <h6>16 8×6 Photographs in a boxed presentation album</h6><hr/>
                </div>
                <div className="col-4"> <img src ={pricing3} alt ="" height ="240"/>Celebration Package
                <p >$900.00</p></div></div>
             
        
             
             Glass of Sparkling Wine to celebrate
               Beautiful gardens for photographs
               
                </div>
               
               
            </div>
           
    )
}