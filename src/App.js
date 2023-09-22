
// App.js (with React Router v6)

import React from "react";



import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import WebP from "./Component/WebP";

function App() {
  return (
    <>
      <Router>
       <Routes>
       <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
       <Route path="/login" element={<Login />} />
        <Route path="/webp" element={<WebP/>}/>
      </Routes>
     </Router> 
  
   </>
  );
}

export default App;
