import './App.css';
import BlackjackContainer from './blackjack/containers/BlackjackContainer';
import NavBar from './general/NavBar';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import './styles/Modal.css';
import ReactModalLogin from "react-modal-login";
import { useEffect, useState } from 'react';

import './styles/Cards.css';
import Slider from './general/Slider';
import StatsContainer from './general/containers/StatsContainer';


function App() {

  const [user, setUser] = useState();
  const [users, setUsers] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState();

  useEffect(() => {
    fetch("http://localhost:8080/users")
    // .then(response => console.log(response.json()))
    .then(response => response.json())
    .then(data => {
      setUsers(data)
      console.log("set users")
    })  
  }, [])

  
  return (
    <div>

    

      <NavBar user={user} setUser={setUser} isLoggedIn={isLoggedIn} 
              setIsLoggedIn={setIsLoggedIn} users={users} 
              setUsers={setUsers}/>
      {/* <div id="navbar">
          <div><Link to="/">Home</Link></div>
      </div> */}
      <h1>House of Cardzzzzzz</h1>
      <p>Gamblin is k00l</p>
      {/* <BlackjackContainer /> */}
      {/* <Slider /> */}



      <Router>
        <Routes>
          <Route path='/' element={<Slider/>}/>
          <Route path="/stats" element={<StatsContainer/>}/>
          <Route path="/blackjack" element={<BlackjackContainer/>} />
        </Routes>
      </Router>

    </div>


  );
}

export default App;
