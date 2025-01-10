import React from "react";
import './App.css';
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Contacts from "./Components/Contacts";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="bg-gradient-to-b from-beige via-white to-beige text-white">
      <Navbar/>
      <Main/>
      <Projects/>
      <About/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
