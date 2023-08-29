import React, { useState } from "react";
import { Outlet  } from "react-router-dom";
import Footer  from "./Componants/SharedComponants/Footer"
import Header from "./Componants/SharedComponants/Header";
import Model from "./Componants/Model";

export default function App(){
  const [model, setModel] = useState(false);
  return(
  
   
   <div className="App">
   
    <Header/>
    <Outlet />
    <Model model={model} setModel={setModel}/>
   <Footer/>
   

   </div> 
  )
}

