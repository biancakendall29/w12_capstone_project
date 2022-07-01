import './App.css';
import BlackjackContainer from './blackjack/containers/BlackjackContainer';
import NavBar from './general/NavBar';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import './styles/Modal.css';
import ReactModalLogin from "react-modal-login";
import { useState } from 'react';

function App() {
  
  const [user, setUser] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState()
  
  return (
    <div>

    

      <NavBar user={user} setUser={setUser} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      {/* <div id="navbar">
          <div><Link to="/">Home</Link></div>
      </div> */}
      <h1>House of Cardzzzzzz</h1>
      <p>Gamblin is k00l</p>
      {/* <BlackjackContainer /> */}


      <Router>
        <Routes>
          <Route path="/" element={<BlackjackContainer />}/>
        </Routes>

      </Router>

    </div>


  );
}

export default App;
