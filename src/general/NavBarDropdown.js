import Avatar from "react-avatar";
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const NavBarDropdown = ({ user, setUser, setIsLoggedIn, isLoggedIn, handleClickSignIn }) => {

    const handleClickLogOut = () => {
        setIsLoggedIn(false)
        setUser(null)
    }
    return (

            <div id="navbar-dropdown-container">
                {isLoggedIn ?
                   
                    <div id="navbar-myaccount"> 
                        <DropdownButton id="dropdown-item-button" title="MyAccount">
                            <Dropdown.ItemText>You are Signed in as {user.username}!</Dropdown.ItemText>
                            <Dropdown.Item as="button">My Games</Dropdown.Item>
                            <Link to="/stats"><Dropdown.Item as="button">Cool Stats</Dropdown.Item></Link>
                            <Dropdown.Item onClick={handleClickLogOut} as="button">Logout</Dropdown.Item>
                        </DropdownButton>
                        <Avatar name={user.username} round={true} color={(Avatar.getRandomColor(user.username), ['#EEE0CB']) } size='60' textSizeRatio={1.75} fgColor='black'  style={{
             outline: '2px solid black',
             margin: '2px'
          }}/>
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