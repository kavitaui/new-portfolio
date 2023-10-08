import ImageCrousel from "./ImageCrousel"
import React  from "react";
export default function Gallary() {
   const images=[
     
      'https://images-kavita.s3.eu-west-1.amazonaws.com/gallery-8.jpg',
      'https://images-kavita.s3.eu-west-1.amazonaws.com/gallery-1.jpg',
     ' https://images-kavita.s3.eu-west-1.amazonaws.com/gallery-4.jpg',
     ' https://images-kavita.s3.eu-west-1.amazonaws.com/gallery-3.jpg',
     ' https://images-kavita.s3.eu-west-1.amazonaws.com/gallery-5.jpg',
     ' https://images-kavita.s3.eu-west-1.amazonaws.com/gallery-7.jpg'
  
   ]

   return (
     <> <div className="col-12 px-5 py-5 ">
         <div className="row  images">
            <h2>Wedding Venue Gallery</h2>
            The Gallery provides Wedding Ceremony & Reception Venue in Texas – Houston, Beaumont, and surrounding areas.</div></div>
    
         <div  className="img-container ">
      
             <ImageCrousel images={images} interval={3000} />

            </div>
        </>
     
    

   )
}
