import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import useModal from "../hooks/useModal";
import LogInModal from "./LogInModal";

const NavBar = () => {
    const {isShowing, toggle} = useModal();
    //const {isSignUpShowing, hideSignUp} = useModal();


    const handleSignIn = () => {
      
    }
    
    return (
        <Router>
            <div id="navbar">
                <div><Link to="/">Home</Link></div>
            </div>
            <div onClick={toggle}>Sign in</div>
            <LogInModal isShowing={isShowing} toggle={toggle} />
        </Router>
    )
}

export default NavBar;