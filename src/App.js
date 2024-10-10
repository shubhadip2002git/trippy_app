import React, { Component } from "react";
import "./App.css"
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import SingUp from "./pages/SingUp"
import OneServices from "./pages/OneServices";
import Book from "./pages/Book";


export default class App extends Component {
  render() {
    return (
      <>
     <BrowserRouter>
     <Routes>
      <Route  path="/" element={<Home/>} />
      <Route  path="/about" element={<About/>} />
      <Route  path="/services" element={<Services/>} />
      <Route  path="/booking" element={<Book/>} />
      <Route  path="/services/:services_id" element={<OneServices/>} />
      <Route  path="/contact" element={<Contact/>} />
      <Route  path="/singup" element={<SingUp/>} />
      
     
     </Routes>
        
        </BrowserRouter>
      </>
    );
  }
}
