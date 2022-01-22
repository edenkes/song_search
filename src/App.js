import './App.css';
import React, {useState} from "react";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import MainScreen from "./MainScreen";
import SignIn from "./authentication/SignIn";
import SignUp from "./authentication/SignUp";

function App() {
    const [userLogin, setUserLogin] = useState({})

    return (
        <Router>
            <Routes>
                <Route path="/app/*" element={userLogin ? <MainScreen/> : <Navigate to="/sign_in"/>}/>
                <Route exact path="/sign_in" element={!userLogin ? <SignIn/> : <Navigate to="/app"/>}/>
                <Route exact path="/sign_up" element={!userLogin ? <SignUp/> : <Navigate to="/app"/>}/>
                <Route
                    path="*"
                    element={userLogin ? <Navigate to="/app"/> : <Navigate to="/sign_in"/>}
                />
            </Routes>
        </Router>
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
