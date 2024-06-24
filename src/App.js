import React, { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const[mode, setMode] = useState('light');  
  const[alert, setAlert] = useState(null);
  const[tog, settog] = useState('light');

  const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() =>{
      setAlert(null);
    },1500)
  }
  
  const togMode = () => {
    if(tog==='light'){
      settog('#FF0000');
      document.body.style.backgroundColor= " #FA2A55";
      document.body.style.color="white";
      showAlert("red mode enabled", "success")
    }
    else{
      settog('light');
      document.body.style.backgroundColor= "white" ;
      document.body.style.color= "black" ;
      showAlert("light mode has been enabled", "success")
    }
  }
  const toggleMode = () => {
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor= "#343a40" ;
      document.body.style.color="white";
      document.title = "TextUtils - Darkmode";
      showAlert("Dark mode has been enabled", "success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor= "white" ;
      document.body.style.color= "black" ;
      showAlert("light mode has been enabled", "success")
      document.title = "TextUtils - lightmode";
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} tog={tog} toggleMode={toggleMode} togMode={togMode}/>
        <Alert alert={alert}/>
        <div className='container my-3'>
          <Routes>
          {/* /*use exact*/ }
            <Route exact path="/about" element={<About />} />
            <Route path="/" element={<Textform showAlert={showAlert} heading="Enter your text" mode={mode} tog={tog} />} />
          </Routes>
        </div>
      </Router>
    </>
  );

}

export default App