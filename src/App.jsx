import React, { useState } from "react";
import { BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import TextForm from "./components/TextForm.jsx";   
import Alert from "./components/Alert.jsx";
import About from "./components/About.jsx";


function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message,type) => {
    setAlert({
      message,
      type
    });
    setTimeout(() => {
      setAlert(null)
    },2000)
  }

  const toggleMode = () => {
    if (mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled","success");
      setInterval(() => {
        document.title = "Textform - Light Mode";
      },1500);
      setInterval(() => {
        document.title = "Install Textform now!";
      },2000);
    } else {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode is enabled","success");
      document.title = "Textform - Dark Mode";
      setInterval(() => {
        document.title = "Textform - Dark Mode";
      },1500);
      setInterval(() => {
        document.title = "Install Textform now!";
      },2000);




    }
  }

  return (
    <> 
      <Navbar title="Textform" aboutText="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} ></Alert>
      <div className="container my-5">
         <TextForm showAlert={showAlert} mode={mode} heading="Enter text below to analyze"></TextForm>      
     </div>
      
    </>
  );
}

export default App;
