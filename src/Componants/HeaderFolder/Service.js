import React from "react";
import service1 from "../../Asset/images/service-11.jpg";
import service2 from "../../Asset/images/service-21.jpg";
import { motion } from "framer-motion";
export default function AboutUs() {
    const varient = {
        initial: {
            opacity: 0
        },
        animate: { opacity: 1 },
        transition: { duration: 1, delay: 0, type: "spring" },
        whileHover: { scale: 1.2 },
        whileTap: { scale: 2 }
    }
    return (
        <div className="col-12 px-5 py-2 ">
            <div className="row ">

                <div className="heading">Our Venue Services</div>
                <div className="row " >
                    <div className="col-6  movement ">
                        <motion.div {...varient} ><img src={service2} alt="" /></motion.div>
                    </div>

                
                <div className="col-6  movement ">
                    <motion.div {...varient}> <img src={service1} alt="" /></motion.div></div>
</div>
                <div className="row px-2 py-2">
                    <div className="col-6">
                        <h3>Wedding Ceremony</h3>
                        Praesent elementum felis a orci convallis accumsan. Pellentesque vel dui a nulla feugiat vestibulum sed sit amet ligula.</div>
                    <div className="col-6">
                        <h3>Wedding Reception</h3>
                        Elementum felis a orci convallis accumsan. Pellentesque vel dui a nulla feugiat vestibulum lorem ipsum dolorsit amet.</div>
                </div>

            </div>
        </div>
    
    )

}