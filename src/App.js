
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './App.css';
import { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState("light");
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }
  const toggleMode=()=>{
    if(mode==='dark')
    {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("LightMode has been enabled","success");
  //    document.title="TextUtils-LightMode";
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("DarkMode has been enabled","success");
  //    document.title="TextUtils-DarkMode";
    }
  }
  return (
    <>
  <Router>
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
       
        <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}>
           
          </Route>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils-Word Counter,Character Counter,Clear Text" mode={mode}> </TextForm> }>
        
          </Route>
        </Routes>
      
      </div>
      </Router>
    </>
  );
}


export default App;
