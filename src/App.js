
import './App.css';
import About from './components/about';
import Navbar from './components/Navbar';
import Textform from './components/textform';
import Alert from './components/Alert';
import { useState } from 'react';
import {
  BrowserRouter ,
  Routes,
  Route,
} from "react-router-dom";


// alert here is a object   
function App() {
  const[alert,setAlert]=useState(null);
  
  const showAlert=(message,type)=>{
    setAlert(
      {
        msg:message,
        type:type
      }
    )
    setTimeout(()=>(
      setAlert(null)
    ),2000 )// alert disappear after 2 secs
  }

  return (

    <BrowserRouter>
    <Navbar
      title="TextUtils"
      aboutText="About"
    />
    <Alert alert={alert} />
    <div className="container my-4">
      <Routes>
        <Route exact path="/about" element={<About />}></Route>
        <Route
          exact path="/"
          element={
            <Textform
              showt={showAlert}
              heading="Enter Text to analyze "
            />
          }
        ></Route>
      </Routes>
    </div>
  </BrowserRouter>
    /* <>        
      <Navbar title="textutils" aboutText="About Textutils"/> 
      <Alert alert={alert}/> 
      <div className="container my-3"> 

      <Textform showt={showAlert} heading ="Enter your text to analyze"/>
      {<About/>}
      </div>
     </>*/
  );
}

export default App;
/* my-3 for margin */
