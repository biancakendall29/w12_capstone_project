import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import useModal from "../hooks/useModal";
import LogInModal from "./LogInModal";
import SLModal from "./SLModal";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import Modal from "react-modal";


const NavBar = () => {
    // const {isShowing, toggle} = useModal();
    //const {isSignUpShowing, hideSignUp} = useModal();

    const [isModalShowing, setIsModalShowing] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
  


    const handleSignIn = () => {
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
            <div onClick={handleSignIn}>Sign in</div>
            
            <Modal isOpen={isModalShowing} onRequestClose={closeModal} ariaHideApp={false} >
                {isLogin ? <LoginForm toggle = {toggle}/> : <SignUpForm toggle = {toggle}/>}
                <button onClick={closeModal}>X</button>


            </Modal>
            {/* <LogInModal isShowing={isShowing} toggle={toggle} /> */}
        </Router>
    )
}

export default NavBar;