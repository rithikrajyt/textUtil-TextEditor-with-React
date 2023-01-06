//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{ useState } from 'react';
// import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = ()=>{
      if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      }
      else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
      }
      setInterval(() => {
        document.title =  'TextUtil is am amazing website';
      }, 1500);
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    {/* < Alert alert="This is a Alert" /> */}
    <div className="container my-3">
    <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
          <TextForm heading="Enter the text to analyze" mode={mode} toggleMode={toggleMode}/>
          </Route>
        </Switch>
    {/* <About/> */}
    </div>
    </Router>
    </>
  );
}

export default App;
