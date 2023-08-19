import { Link } from "react-router-dom";


export default function Header() {
    return (
        <div className = "head-wrapper">
            <div className = "col-12 px-2 py-2">
                <div className = "row px-2 py-2">
                    <div className="col-5 px-2 py-2 ">
                
                        VENUE BOOK 
                </div>
                 <div className="col-7 px-2 py-2">
                        <ul><Link to="/home">HOME</Link>
                            <Link to="/about-us">ABOUTUS</Link>
                            <Link to="/blog">BLOG</Link>
                            <Link to="/gallary">GALLARY</Link>
                            <Link to="/price">PRICE</Link>
                            <Link to="/service">SERVICE</Link>
                            <Link to="/testimonial">TESTIMONIAL</Link>
                    </ul>
                   </div>
                    </div>
                </div>
            </div>
       
    );
}