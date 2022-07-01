import './App.css';
import BlackjackContainer from './blackjack/containers/BlackjackContainer';
import NavBar from './general/NavBar';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import './styles/Modal.css';
import ReactModalLogin from "react-modal-login";

function App() {
  return (
    <div>

      <NavBar />
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
