import { useState, useEffect } from "react"
import { Images } from "react-bootstrap-icons"


const  ImageCrousel = ({images,interval=3000})=> {
    const [currentIndex, setcurrentIndex] = useState(0);
    const bullet = Array.from({ length: images.length%4 }, () => 0);
    const nextImage =()=>{
        setcurrentIndex((prevIndex)=>(prevIndex+1)%images.length)
    };
    useEffect(()=>{
        const intervalId =setInterval(nextImage,interval);
        return ()=>{
            clearInterval(intervalId)
        }
    },[currentIndex,interval]);
    const handleDotClick =(index)=>{
        setcurrentIndex(index);
    }
   

    return (
     <div>  <div  className="carousel-container box">
         <div className="carousel">
            {images.map((image, index) => (
    <img
    key={index}
     src={image} alt={`Image${index}`} 
     className ={`crousel-image ${index === currentIndex ? 'active' : ''}`}     />
         ))}
       
      </div></div>
<div className="crousel-dots">
    {bullet.map((_,index)=>
  <span
  key={index}
  className={`dot${index===currentIndex ? 'active-dot':''}`} 
   onClick={()=>handleDotClick(index)}></span>
)}</div>
       </div>
    )
}
export default ImageCrousel;