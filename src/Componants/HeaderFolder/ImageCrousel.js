import { useState, useEffect } from "react"
import { Images } from "react-bootstrap-icons"
const  ImageCrousel = ({images,interval=3000})=> {
    const [currentIndex, setcurrentIndex] = useState(0);
    const nextImage =()=>{
        setcurrentIndex((prevIndex)=>(prevIndex+1)%images.length)
    };
    useEffect(()=>{
        const intervalId =setInterval(nextImage,interval);
        return ()=>{
            clearInterval(intervalId)
        }
    },[currentIndex]);

    return (
       <div  className="box">
            {images.map((image, index) => (
    <img 
    key={index}
     src={image} alt={Image}         />
         ))}
      </div>
       
    )
}
export default ImageCrousel;