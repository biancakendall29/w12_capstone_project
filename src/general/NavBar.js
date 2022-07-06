import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import useModal from "../hooks/useModal";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import Modal from "react-modal";
import Avatar from "react-avatar";
import NavBarDropdown from "./NavBarDropdown"



const NavBar = ({ user, setUser, isLoggedIn, setIsLoggedIn, users, setUsers, setSessionStart,putUser,setPutUser }) => {
    // const {isShowing, toggle} = useModal();
    //const {isSignUpShowing, hideSignUp} = useModal();

    const [isModalShowing, setIsModalShowing] = useState(false);
    const [isLogin, setIsLogin] = useState(true);

    const handleClickSignIn = () => {
        console.log("sign in");
        setIsModalShowing(true);
        setIsLogin(true)
    }

    const toggle = () => {
        setIsLogin((prev) => {
            return (!prev)
        })
    }

    const closeModal = () => {
        setIsModalShowing(false);
    }

    const handleClickLogOut = () => {
        setIsLogin(false)
    }

    const handleSessionEnd = () => {
        setSessionStart(false)
        console.log('session end');
        console.log(JSON.stringify(putUser))
        fetch('http://localhost:8080/users/' + user.id, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(putUser)
        })
    }

    const handleOnMouseOver = (event) => {
      console.log("mouse over dropdown");
      fetch("http://localhost:8080/users")
      .then(response => response.json())
      .then(data => setUsers(data))
    }

    return (

        <>
            <div id="navbar">
                <div id="navbar-home">
                    <Link to="/" onClick={handleSessionEnd}>Home</Link>
                </div>
                <h1 id="website-banner">House of Cardz</h1>
                <div onMouseOver={handleOnMouseOver}>
                    <NavBarDropdown user={user} setUser={setUser} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} handleClickSignIn={handleClickSignIn} handleClickLogOut={handleClickLogOut} />

                </div>
            </div>

            <Modal isOpen={isModalShowing} onRequestClose={closeModal} ariaHideApp={false} data-backdrop="static">
                <div id='modal-header'>
                    <button onClick={closeModal} id="modal-close-button"><span aria-hidden="true">&times;</span></button>
                </div>
                <div id='modal-content'>
                    {isLogin ?
                        <>
                            <h2 className="modal-title">Login</h2>
                            <LoginForm toggle={toggle} user={user} setUser={setUser}
                                isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}
                                users={users} setUsers={setUsers} closeModal={closeModal} />
                        </>
                        : <>
                            <h2 className='modal-title'>Sign up</h2>
                            <SignUpForm toggle={toggle} user={user} setUser={setUser}
                                isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}
                                users={users} setUsers={setUsers} closeModal={closeModal} />
                        </>
                    }
                </div>


            </Modal>
            {/* <LogInModal isShowing={isShowing} toggle={toggle} /> */}

        </>
    )
}

export default NavBar;