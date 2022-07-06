import Avatar, { RedirectSource } from "react-avatar";
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";


const NavBarDropdown = ({ user, setUser, setIsLoggedIn, isLoggedIn, handleClickSignIn, setSessionStart, setPutUser }) => {
    const navigate = useNavigate();

    const handleClickLogOut = () => {
        navigate("/", { replace: true })
        setIsLoggedIn(false)
        setSessionStart(false)
        setUser(null)
        setPutUser(null)
    }
    return (

        <div id="navbar-dropdown-container">
            {isLoggedIn ?

                <div id="navbar-myaccount">
                    <DropdownButton id="dropdown-item-button" title="My Account">
                        <Dropdown.ItemText>You are Signed in as {user.username}!</Dropdown.ItemText>
                        <Link to="/stats"><Dropdown.Item as="button">Cool Stats</Dropdown.Item></Link>
                        <Dropdown.Item onClick={handleClickLogOut} as="button">Logout</Dropdown.Item>
                    </DropdownButton>
                    <Avatar name={user.username} round={true} color={Avatar.getRandomColor(user.username, ['#EEE0CB','#000'])} size='60' textSizeRatio={1.75} fgColor='black' style={{
                        outline: '2px solid black',
                        margin: '2px'
                    }} />
                </div>
                :
                <div id="navbar-signin-button" onClick={handleClickSignIn}>Sign in</div>}

        </div>

    )
}

/* 
<div>{user.username}</div>
<div onClick={() => { setIsLoggedIn(false); setUser() }}>logout</div>

*/

export default NavBarDropdown;