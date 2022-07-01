import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import useModal from "../hooks/useModal";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import Modal from "react-modal";


const NavBar = (user, setUser, isLoggedIn, setIsLoggedIn) => {
    // const {isShowing, toggle} = useModal();
    //const {isSignUpShowing, hideSignUp} = useModal();

    const [isModalShowing, setIsModalShowing] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
  
    const handleClickSignIn = () => {
        setIsModalShowing(true);
        setIsLogin(true)
    }

    const toggle = () => {
        setIsLogin((prev)=>{
            return (!prev)
        })
    }

    const closeModal = () => {
        setIsModalShowing(false);
    }
    
    return (
        <Router>
            <div id="navbar">
                <div><Link to="/">Home</Link></div>
            </div>
            <div onClick={handleClickSignIn}>Sign in</div>
            
            <Modal isOpen={isModalShowing} onRequestClose={closeModal} ariaHideApp={false} >
                {isLogin ? 
                    <LoginForm toggle = {toggle} user={user} setUser={setUser} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} /> 
                    : <SignUpForm toggle = {toggle} user={user} setUser={setUser} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}
                <button onClick={closeModal}>X</button>
            </Modal>
            {/* <LogInModal isShowing={isShowing} toggle={toggle} /> */}
        </Router>
    )
}

export default NavBar;