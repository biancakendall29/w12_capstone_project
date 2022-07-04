import Avatar from "react-avatar";
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

const NavBarDropdown = ({user, setUser, setIsLoggedIn, isLoggedIn, handleClickSignIn}) => {

    const handleClickLogOut = () => {
        setIsLoggedIn(false)
      }
    return (
            <div id="navbar-dropdown-container">
                {isLoggedIn ?
                    <div id="navbar-myaccount">
                        <DropdownButton id="dropdown-item-button" title="MyAccount">
                            <Dropdown.ItemText>You are Signed in</Dropdown.ItemText>
                            <Dropdown.Item as="button">Action</Dropdown.Item>
                            <Dropdown.Item as="button">Another action</Dropdown.Item>
                            <Dropdown.Item onClick={handleClickLogOut} as="button">Logout</Dropdown.Item>
                        </DropdownButton>
                        <Avatar name={user.username} round={true} color={Avatar.getRandomColor(user.username, ['red', 'green', 'blue'])} size='70' textSizeRatio={1.75} />
                    </div>
                    :
                    <div onClick={handleClickSignIn}>Sign in</div>}
    
            </div>
        )
}

/* 
<div>{user.username}</div>
<div onClick={() => { setIsLoggedIn(false); setUser() }}>logout</div>

*/

export default NavBarDropdown;