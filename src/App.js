
import Navbar from './components/Navbar';
import Texta from './components/Texta';
import Alert from './components/Alert';
//import About from './components/About';
import './App.css';
import { useState } from 'react';
//import { BrowserRouter as Main, Route, Routes } from 'react-router-dom';

//from reactdom.com/web to change specific part of the pages without reloading



function App() {
  const toggleMode = ()=>{
    if(mode==='light'){
      showAlert("Dark Mode Enabled","success");
      changeMode('dark');
      document.body.style.backgroundColor='#042743';
      //setInterval(() => {
        //document.title = 'Textutils is amazing';
      //}, 2000);
      //setInterval(() => {
       // document.title='install textutils now';
      //}, interval);

    }else{
      changeMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode Enabled","success");
    }
  }
  const[mode,changeMode]=useState('light');
  const[alert,setAlert]=useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }
  return (
   <>
{/*<Main>*/}

<Navbar title="TextUtils2" mode={mode} toggleMode={toggleMode} />

<Alert alert={alert}/>
{/*<Routes>
  <Route exact path='/' element={ <Texta heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/>}/>
  <Route exact path='/about' element={<About mode={mode} showAlert={showAlert}/>}/>
</Routes>

         
  </Main>*/}
<Texta heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/>
   </>
  );
}

export default App;
