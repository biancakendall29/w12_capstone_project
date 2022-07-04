import Avatar from "react-avatar";

const NavBarDropdown = ({user, setUser, setIsLoggedIn, isLoggedIn, handleClickSignIn}) => {


    return (
        <div id="navbar-dropdown-container">
            {isLoggedIn ?
                <div id="navbar-myaccount">
                    <h2>My Account</h2>
                    <Avatar name={user.username} round={true} color={Avatar.getRandomColor(user.username, ['red', 'green', 'blue'])} />
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