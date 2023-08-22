import { Link } from "react-router-dom";
import logo from "../../Asset/images/logo1.png";
export default function Header() {
    return (
        <div className = "head-wrapper">
            <div className = "col-12 px-3 py-2">
                <div className = "row  py-2">
                    <div className="col-4  py-2  ">
                
                    <img src={logo} alt="" className="img-responsive" />   
                </div>
                <div className="col-8  py-2 ">
                    <div className="head-wrapper  "> <li><Link to="/home">HOME</Link>
                   <Link to="/about-us">ABOUTUS</Link>
                    <Link to="/HowWorks">HOW-WORKS</Link>
                        <Link to="/gallary">GALLARY</Link>
                   <Link to="/price">PRICE</Link>
                         <Link to="/service">SERVICE</Link>
                     <Link to="/testimonial">TESTIMONIAL</Link>
                     <Link to="/blog">BLOG</Link>
                   </li> </div>
                   </div>
                    </div>
                </div>
            </div>
       
    );
}