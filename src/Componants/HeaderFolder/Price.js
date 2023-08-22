import pricing1 from "../../Asset/images/pricing-img-1.jpg";
import pricing2 from "../../Asset/images/pricing-img-3.jpg";
import pricing3 from "../../Asset/images/service-11.jpg";
export default function Price() {
    return (
        <div className="col-12">
            <div className="row">Wedding Packages and Offers
            
            </div>
            <div className="row">
                <div className="col-4">
                    <img src ={pricing1} alt =""/>
                    Romance Package
                    $400.00
                </div>
                <div className="col-4"> <img src ={pricing2} alt =""/>
                Dream Package
                $700.00
                </div>
                <div className="col-4"> <img src ={pricing3} alt =""/>Celebration Package
                $900.00</div>
            </div>
            </div>
    )
}