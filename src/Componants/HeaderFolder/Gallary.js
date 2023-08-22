import gallarya from "../../Asset/images/gallery-3.jpg";
import gallaryb from "../../Asset/images/gallery-4.jpg";
import gallaryc from "../../Asset/images/gallery-5.jpg";
import gallaryd from "../../Asset/images/gallery-7.jpg";
import gallarye from "../../Asset/images/gallery-1.jpg";
import gallaryf from "../../Asset/images/gallery-8.jpg";

export default function Gallary() {

   return (
      <div className="col-12 px-2 py-2 ">
         <div className="row  images">
            <h2>Wedding Venue Gallery</h2>
            The Gallery provides Wedding Ceremony & Reception Venue in Texas – Houston, Beaumont, and surrounding areas.</div>
         <div className="row">
            <div className="col-2">
               <img src={gallarye} alt="" />
            </div>
            <div className="col-2">
               <img src={gallarya} alt="" />
            </div>
            <div className="col-2">
               <img src={gallaryb} alt="" />
            </div>
            <div className="col-2">
               <img src={gallaryc} alt="" />
            </div>
            <div className="col-2">
               <img src={gallaryd} alt="" />
            </div>
            <div className="col-2">
               <img src={gallaryf} alt="" />
            </div>
         </div>
      </div>

   )
}
