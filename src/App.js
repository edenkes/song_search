import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainScreen from "./components/MainScreen";
import SignIn from "./components/authentication/SignIn";
import SignUp from "./components/authentication/SignUp";

function App() {
  const [userLogin, setUserLogin] = useState({})

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainScreen/>}/>
          <Route path="/sign_in" element={<SignIn/>}/>
          <Route path="/sign_up" element={<SignUp/>}/>
        </Routes>

      </BrowserRouter>
  );

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
