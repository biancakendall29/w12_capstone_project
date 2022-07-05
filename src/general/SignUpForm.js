import "../styles/Modal.css"
import { useState } from "react"

const SignUpForm = ({ toggle, user, setUser, isLoggedIn, setIsLoggedIn, users, setUsers, closeModal }) => {

    const [stateUser, setStateUser] = useState(
        {
            username: "",
            email: "",
            password: "",
            wallet: 1000,
        }
    )
    const [isSignupAlertShowing, setIsSignupAlertShowing] = useState(false);
    const [showPassword, setShowPassword] = useState(false)
    const [usernameAlert, setUsernameAlert] = useState(false)
    const [emailAlert, setEmailAlert] = useState(false)
    const [usernameEmailAlert, setUsernameEmailAlert] = useState(false)
    

    const togglePassword = () => {
        setShowPassword(!showPassword)
    }

    const handleInputChange = (event) => {
        let formName = event.target.name;
        let copiedUser = { ...stateUser };
        copiedUser[formName] = event.target.value;
        setStateUser(copiedUser);
    }

    const handleLoginSubmit = (event) => {
        event.preventDefault()
        const checkDuplicatesUsername = users.filter(user => user.username === stateUser.username)
        const checkDuplicatesEmail = users.filter(user => user.email === stateUser.email)

        if (checkDuplicatesUsername.length === 0 && checkDuplicatesEmail.length === 0) {
            fetch("http://localhost:8080/users", {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(stateUser)
            })
            .then(() => {
                setUser(stateUser);
                console.log("set user to " + stateUser.username);
                closeModal();
                setIsLoggedIn(true);
            })
        }
        else if(checkDuplicatesEmail.length !== 0 && checkDuplicatesUsername.length === 0) {
            setEmailAlert(true)
            setUsernameAlert(false)
            setUsernameEmailAlert(false)

        }
        else if(checkDuplicatesEmail.length === 0 && checkDuplicatesUsername.length !== 0) {
            setEmailAlert(false)
            setUsernameAlert(true)
            setUsernameEmailAlert(false)        
        }
        else {
            setEmailAlert(false)
            setUsernameAlert(false)
            setUsernameEmailAlert(true)
        }
    }


    return (
        <>
            <form className="modal-form" onSubmit={handleLoginSubmit}>
                <label><b>Username:</b></label>
                <input type="text" placeholder="Enter Username" name="username" onChange={handleInputChange} required />
                <label><b>Email:</b> </label>
                <input type="text" placeholder="Enter Email" name="email" onChange={handleInputChange} required />
                <label><b>Password:</b>  </label>
                <input type={showPassword ? "text" : "password"} placeholder="Enter Password" name="password" onChange={handleInputChange} required />
                <div className='password-checkbox-container'>
                    <label htmlFor="password-checkbox">Show password? </label>
                    <input type="checkbox" id="password-checkbox" checked={showPassword} onChange={togglePassword} />
                </div>
                {usernameAlert ? <div className="alert alert-danger" role="alert">Username already taken.</div> : <></>}
                {emailAlert ? <div className="alert alert-danger" role="alert">Email already exists.</div> : <></>}
                {usernameEmailAlert ? <div className="alert alert-danger" role="alert">Username and email already taken.</div> : <></>}
                <button type="submit">Sign up</button>
            </form>
            <div className="toggle-modal-text" onClick={toggle}>Already have an account?<p className="modal-toggle-link">Log in</p></div>
        </>
    )
}


export default SignUpForm;