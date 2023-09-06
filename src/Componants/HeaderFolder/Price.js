import pricing1 from "../../Asset/images/pricing-img-1.jpg";
import pricing2 from "../../Asset/images/pricing-img-3.jpg";
import pricing3 from "../../Asset/images/service-11.jpg";

export default function Price() {
    return (
        <div className="col-12">
            <div className="row "><div><h2>Wedding Packages and Offers</h2></div>
            
            </div>
            <div className="col-12">
            <div className="row px-2 picture">
                <div className="col-4">
                   <img src ={pricing1} alt =""/>
                    Romance Package
                   <p> $400.00</p>
                  
 <h6><i class="bi bi-chevron-double-right"></i>2 Nights in a Luxurious Bridal Suite</h6><hr/>
                <h6>Glass of Sparkling Wine to celebrate</h6><hr/>
                   <h6>Beautiful gardens for photographs</h6><hr/></div>
                   
                   <div className="col-4"> <img src ={pricing2} alt =""/>
                Dream Package
                <p>$700.00</p>
                <h6>Bridal Suite with bubbly & chocolates</h6><hr/>
                <h6>Traditional Scottish Piper</h6><hr/>
                <h6>16 8×6 Photographs in a boxed presentation album</h6><hr/>
                </div>
                <div className="col-4"> <img src ={pricing3} alt ="" height ="240"/>Celebration Package
                <p >$900.00</p>
                <h6>Bridal Hair & Make-up in the privacy</h6><hr/>
                <h6>20 10×8 Photographs album</h6><hr/>
                <h6>Private 4 course wedding meal for happy couple and 18 guests</h6><hr/></div></div>
             <div className="col-12 px-2 py-2">
                <div className="row px-2 ">
                    <div className="col-6">
                   <h3 className="bot"> Book with us for best Rates!</h3>
                   <h6>Sed consectetur tortor dictum dolor bibendumut suscipit orci volutpusce efficitur tellus eu dui tempor consecteturer metus.</h6>
                    </div>
                    <div className="col-6 px-5 ">
                        <button>BOOK NOW</button>
                    </div>
                </div>
             </div>
        
             
             
               
                </div>
               
               
            </div>
           
    )
}