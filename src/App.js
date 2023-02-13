import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light')
  //weather dark mode is enable or not
  const [alert, setAlert] = useState(null)
  const showMe = (message, type) => {
    setAlert({
      msg: message,
      kind: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'yellow';
       
    }

    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      


    }
  }
  const BlueFun = () => {
      document.body.style.backgroundColor = 'pink';
      document.body.color='white';
  }
  const GreenFun = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = ' #20c997';
    }

    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';


    }
  }
  
  const RedFun = () => {
    
      document.body.style.backgroundColor = ' red';
    
 
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} about="About" toggleMode={toggleMode} BlueFun={BlueFun} GreenFun={GreenFun} RedFun={RedFun}/>
      <Alert alert={alert} />
      
      <Textform heading="welcome "  showAlert={showMe} />
      {/* <About/> */}
    </>

  );
}

export default App;
