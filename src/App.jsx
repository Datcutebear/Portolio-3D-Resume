import { Route, BrowserRouter as Router, Routes } from "react-router-dom";   
import React from "react";
import Navbar from "./components/Navbar"; // Import your Navbar component
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import About from "./sections/About";
import Projects from "./components/Projects";
import Footer from "./sections/Footer";
import Experience from "./sections/Experience";



const App = () => {
  return (
    <main className="max-w-8xl mx-auto">
      <Navbar />
      <Hero />
      <About /> 
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      {/* Include the Hero component here */}
    </main>
  ); 
}   
export default App;