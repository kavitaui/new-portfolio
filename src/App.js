import React from "react";
import { Outlet  } from "react-router-dom";
import Footer  from "./Componants/SharedComponants/Footer"
import Header from "./Componants/SharedComponants/Header";
import Model from "./Componants/Model";

export default function App(){
  return(
  
   
   <div className="App">
   
    <Header/>
    <Outlet />
    <Model/>
   <Footer/>
   

   </div> 
  )
}

