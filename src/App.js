import BlackjackContainer from './blackjack/containers/BlackjackContainer';
import NavBar from './general/NavBar';
import { BrowserRouter as Router, Routes, Route, Link, withRouter } from "react-router-dom";
import ReactModalLogin from "react-modal-login";
import { useEffect, useState } from 'react';
import Slider from './general/Slider';
import StatsContainer from './general/containers/StatsContainer';
import HomeContainer from './general/containers/HomeContainer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './index.css'
import './styles/Modal.css';
import './styles/Cards.css';
import './styles/Home.css';
import './styles/Navbar.css'
import './styles/Stats.css';
import "./styles/Slider.css";
import "./styles/Blackjack.css"


function App() {

  const [user, setUser] = useState();
  const [users, setUsers] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [sessionStart, setSessionStart] = useState(false);
  const [putUser, setPutUser] = useState()
    // {
    //   blackjackWins: 0,
    //   blackjackLosses: 0,
    //   blackjackPushes: 0,
    //   blackjackBlackjacks: 0
    // })

  useEffect(() => {
    fetch("http://localhost:8080/users")
      // .then(response => console.log(response.json()))
      .then(response => response.json())
      .then(data => {
        setUsers(data)
        console.log("set users")
      })

  }, [ isLoggedIn, sessionStart])

  useEffect(() => {
    console.log("set user")
    if (user !== undefined && user !== null) {
      setUser((el) => {
        let foundUser = users.filter(client => client.id === el.id);
        return foundUser[0]
      }
      )
    }
  }, [users, sessionStart])


  return (
    <div id='outer-div'>
      <Router>
        <NavBar user={user} setUser={setUser} isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn} users={users}
          setUsers={setUsers} setSessionStart={setSessionStart}
          setPutUser={setPutUser} putUser={putUser} />

        <Routes>
          <Route path='/' element={<HomeContainer sessionStart={sessionStart} setSessionStart={setSessionStart} user={user} setUser={setUser} users={users} isLoggedIn={isLoggedIn} />} />
          <Route path="/stats" element={<StatsContainer user={user} />} />
          <Route path="/blackjack" element={<BlackjackContainer user={user} setUser={setUser} sessionStart={sessionStart} setSessionStart={setSessionStart} setPutUser={setPutUser} putUser={putUser} />} />
        </Routes>
      </Router>

    </div>


  );
}

export default App;
