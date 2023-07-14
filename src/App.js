import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert(
      {
        msg: message,
        tp: type

      }
    )
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
      document.title = "TextUtils-Light Mode";
      setTimeout(() => {
        document.title = "TextUtils  is Amazing";
      }, 1500)
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = '#041033';
      showAlert("Dark Mode has been enabled", "success");
      document.title = "TextUtils-Dark Mode";
    }
  }

  const toggleModee = () => {
    setMode('dark');
    document.body.style.color = 'white';
    document.body.style.backgroundColor = 'black';

  }
  const toggleModee2 = () => {
    setMode('dark');
    document.body.style.backgroundColor = 'darkslategray';
  }
  const toggleModee3 = () => {
    setMode('dark');
    document.body.style.backgroundColor = '#024046';

  }
  const toggleModee4 = () => {
    setMode('dark');
    document.body.style.backgroundColor = 'darkcyan';
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} toggleModee={toggleModee} toggleModee2={toggleModee2} toggleModee3={toggleModee3} toggleModee4={toggleModee4} />
        <Alert alert={alert} />
        <Routes>
          <Route path='/' element={<TextForm showAlert={showAlert} heading="Enter the Text to analyze" mode={mode} />}></Route> 
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;

// sabse pehle imports dekhle
// pehle saari cheezo ko Router tag me daalne ka
// fir jo teri links h na usko Routes tag me daalne ka
// ab fir jo apne links honge na navbar ke usko apan Route wale tag me daalenge
// saare tag similar h to yaad rkhna konsa kaha lagta hai

// syntax
{/* <Route path='/' element={}></Route> */}

//ye ho gaya apna
//lekin abhi link banana baaki hai wo apan navbar me banayenge
