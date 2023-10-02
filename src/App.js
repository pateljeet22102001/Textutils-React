import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      Alert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
      {/* <Router> */}
      <Navbar title="Texttutils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
      {/* <Switch> */}
            {/* <Route exact path="/about">
               <About />
             </Route>
            <Route exact path="/"> */}
              <TextForm heading="Enter the text" mode={mode}/>   
            {/* </Route> */}
      {/* </Switch> */}
      </div> 
      {/* </Router>   */}
      </>
  );
}

export default App;
