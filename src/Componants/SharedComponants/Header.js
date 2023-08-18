import { Link } from "react-router-dom";


export default function Header() {
    return (
       <> 
       <Link to="/home">HOME</Link>
       <Link to="/about-us">ABOUTUS</Link>
       <Link to="/blog">BLOG</Link>
       <Link to="/gallary">GALLARY</Link>
       <Link to="/price">PRICE</Link>
       <Link to="/service">SERVICE</Link>
       <Link to="/testimonial">TESTIMONIAL</Link>
     </>
    );
}