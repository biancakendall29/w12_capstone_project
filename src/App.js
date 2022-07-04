import './App.css';
import BlackjackContainer from './blackjack/containers/BlackjackContainer';
import NavBar from './general/NavBar';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import './styles/Modal.css';
import ReactModalLogin from "react-modal-login";
import { useEffect, useState } from 'react';

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


      <Router>
        <Routes>
          <Route path="/" element={<BlackjackContainer />}/>
        </Routes>

      </Router>

    </div>


  );
}

export default App;
