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

  const authenticateUser = (stateUser) => {
    let foundUser = users.filter(client =>  client.username === stateUser.username && client.password === stateUser.password);
    if (foundUser.length === 1) {
       setUser(foundUser[0]);
      console.log("set user to " + foundUser[0].username);
  } 
  else {
    alert("Username or password are incorrect")
  }
    
   
  }
  
  return (
    <div>

    

      <NavBar user={user} setUser={setUser} isLoggedIn={isLoggedIn} 
              setIsLoggedIn={setIsLoggedIn} users={users} 
              setUsers={setUsers} authenticateUser={authenticateUser}/>
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
