
// App.js (with React Router v6)

import React from "react";



import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import WebP from "./Component/WebP";
import Footp from "./Component/Footp";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Webcrawl from "./pages/Webcrawl";
import Test2 from "./pages/Test2";
import PersonFoot from "./pages/PersonFoot";
import Portscan from "./pages/Portscan";

function App() {
  return (
    <>
      <Router>
       <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/Webcrawl" element={<Webcrawl />} />
       <Route path="/PersonFoot" element={<PersonFoot />} />
       <Route path="/test2" element={<Test2 />} />
       <Route path="/blog" element={<Blog />} />
       <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/webp" element={<WebP/>}/>
        <Route path="/footp" element={<Footp />} />
        <Route path="/Portscan" element={<Portscan />} />
      </Routes>
     </Router> 
  
   </>
  );
}

export default App;
