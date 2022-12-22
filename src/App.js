//all webpage components of website will be executes in this file.

import './App.css';
import Navbar from './components/Navbar';//use to set navigation bar in every web page
import FormTextarea from './components/FormTextarea';//home page component
import Features from './components/Features';//Feature page component
import { useState } from 'react';
import Alert from './components/Alert';
import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

//App function is entry point for this website all components will render within this function
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  //showAlert function will execute showAlert function which show alert message on webpage for certain time
  const showAlert =(message, type) =>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }

  //toggleMode arrow function is use for change color mode in webpage
  
  const toggleMode = () =>{
    if( mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("Dark mode Enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode Enabled","success");
    }
  }

  return (
    //this empty container use for bind all content in one block because we can return only one block
    <>
      <Router>
      <Navbar title="Full Demo" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
        <div className="container my-3">
          <Routes>
          {/* Routes replace Switch in new version of React router dom. exact use for to match exact path.FormTextarea component is home page */}
            <Route exact path="/Features" element={<Features/>}/>
            <Route exact path="/" element={<FormTextarea heading="Enter Text Below" mode={mode} showAlert={showAlert}/>}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
