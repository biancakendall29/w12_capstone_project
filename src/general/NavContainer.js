import BlackjackContainer from "../blackjack/containers/BlackjackContainer";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

const NavContainer = () => {

    return (
    <>
    <h1> Hello from nav container</h1>
    <Router>
        <div id="navBar">
        <ul id='navbarlink'>
            <li><Link to='/'>Home</Link></li>  
            <li><Link to='/customerContainer'>Sign in</Link></li>
        </ul>
        </div>
        <div>
        <Routes>
            <Route path="/" element={<BlackjackContainer />} />
            {/* <Route path="/customerContainer" element={<SignIn/>} />  */}
        </Routes>
        </div>
    </Router>
    </>
    );
}

export default NavContainer;