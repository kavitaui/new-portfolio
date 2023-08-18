import Footer  from "./Componants/SharedComponants/Footer"
import HomeComponant from "./Componants/HomeComponant";
import Header from "./Componants/SharedComponants/Header";
import AboutUs from "./Componants/HeaderFolder/AboutUs";
import Blog from "./Componants/HeaderFolder/Blog";
import Home from "./Componants/HeaderFolder/Home";
import HowWorks from "./Componants/HeaderFolder/How-Works";
import Price from "./Componants/HeaderFolder/Price";
import Service from "./Componants/HeaderFolder/Service";
import Testimonial from "./Componants/HeaderFolder/Testimonial";
import Gallary from "./Componants/HeaderFolder/Gallary";
export default function App(){
  return(
   <div>
    <Header />
    <HomeComponant/>
    <Home/>
    <Service/>
    <HowWorks/>
    <Price/>
   <Gallary/>
   <AboutUs/>
    <Testimonial/>
    <Blog/>
   <Footer/>

   </div> 
  )
}

