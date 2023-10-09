import { useState, useEffect } from "react"




const ImageCrousel = ({ images, interval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const autoScroll = true;
    let slideInterval;
    const bullet = Array.from({ length: images.length % 4 }, () => 0);

    let box1;
    const interval2 = setInterval(() => {
        box1 = document.querySelector('.images');
        if (box1) {
            clearInterval(interval2)
        }
    }, 3000)
    // const handleClickLeft = () => {
    //     if (!box) return;
    //     let width = box.clientWidth;
    //     if (width === box.scrollLeft) {
    //         box.scrollLeft = 0;
    //     }
    //     else {
    //         box.scrollLeft -= 300;
    //     }
    // }
    // const handleClickRight = () => {
    //     if (!box) return;
    //     let width = box.clientWidth;
    //     if (width === box.scrollRight) {
    //         box.scrollRight = 0;
    //     }
    //     else {
    //         box.scrollRight += 300;
    //     }
    // }
    const handleDotClick =(index)=>{
        const box11 = document.querySelector(".carousel");
        debugger;
       if(index===0){
        box11.scrollLeft =0;

       }
       else{
        box11.scrollLeft += 1265;
       }
    }







    useEffect(() => {
        const intervalId = setInterval(interval)
        return () => {
            clearInterval(intervalId)
        }
    }, [currentIndex]);

    return (
        <>  <div className="carousel-container box">
            <ul className="carousel ">
                {images.map((image, index) => (
                    <li> <img
                        key={index}
                        src={image} alt={Image}
                    /></li>
                ))}

            </ul></div>
            
            <div className="crousel-dots">
                {bullet.map((_, index) =>
                    <span
                        key={index}
                        className={`dot ${index === currentIndex ? 'active-dot' : ''}`}
                         onClick={()=>handleDotClick(index)}
                         >

                        
                       </span>
                    
                )}</div>
        </>
    )
}
export default ImageCrousel;