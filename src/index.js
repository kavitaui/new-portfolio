import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter, Route, Routes}from "react-router-dom";
import AboutUs from "./Componants/HeaderFolder/AboutUs";
import Blog from "./Componants/HeaderFolder/Blog";
import Home from "./Componants/HeaderFolder/Home";
import HowWorks from "./Componants/HeaderFolder/HowWorks";
import Price from "./Componants/HeaderFolder/Price";
import Service from "./Componants/HeaderFolder/Service";
import Testimonial from "./Componants/HeaderFolder/Testimonial";
import Gallary from "./Componants/HeaderFolder/Gallary";
 

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  
<BrowserRouter>
<Routes>
   <Route path="/" element={<App/>}>
 <Route path ="about-us" element ={<AboutUs/>}/>
 <Route path ="home" element ={<Home/>}/>
 <Route path ="howWorks" element ={<HowWorks/>}/>
 <Route path ="blog" element ={<Blog/>}/>
 <Route path ="gallary" element ={<Gallary/>}/>
 <Route path ="price" element ={<Price/>}/>
 <Route path ="service" element ={<Service/>}/>
 <Route path ="testimonial" element ={<Testimonial/>}/>

 </Route>
        </Routes>
  </BrowserRouter>
);



