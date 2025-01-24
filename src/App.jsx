import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import TextForm from "./components/TextForm.jsx"
import About from "./components/About.jsx";


function App() {

  return (
    <>
      <Navbar title="Textform" aboutText="About"/> 
      {/* <Navbar/>  For deafult props */}
      <div className="container my-5">

      <TextForm heading="Enter text below to analyze"></TextForm>
      </div>

      <About/>
    </>
  );
}

export default App;
