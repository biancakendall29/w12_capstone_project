import "../styles/Modal.css"
import { useEffect, useState } from "react"
import { Eye, EyeSlash } from "react-bootstrap-icons"

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
                .then(response => response.json())
                .then(data => {
                    // console.log(data);
                    setUser(data);
                    closeModal();
                    setIsLoggedIn(true);
                })
        }
        else if (checkDuplicatesEmail.length !== 0 && checkDuplicatesUsername.length === 0) {
            setEmailAlert(true)
            setUsernameAlert(false)
            setUsernameEmailAlert(false)

        }
        else if (checkDuplicatesEmail.length === 0 && checkDuplicatesUsername.length !== 0) {
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
                <label htmlFor="username"><b>Username:</b></label>
                <input type="text" placeholder="Username" name="username" onChange={handleInputChange} required />
                <label><b>Email:</b> </label>
                <input type="text" placeholder="Email" name="email" onChange={handleInputChange} required />
                <div className="password-and-button-container">
                    <div className="password-container">
                        <label htmlFor="password"><b>Password: </b></label>
                        <input type={showPassword ? "text" : "password"} placeholder="Password" name="password"
                            onChange={handleInputChange} value={stateUser.password} required />
                    </div>
                    <label htmlFor='show-password-button' />
                    <button name='show-password-button' className='password-show' type="button" onClick={togglePassword}>{showPassword ? <Eye /> : <EyeSlash />}</button>
                </div>
                {usernameAlert ? <div className="alert alert-danger" role="alert">Username already taken.</div> : <></>}
                {emailAlert ? <div className="alert alert-danger" role="alert">Email already exists.</div> : <></>}
                {usernameEmailAlert ? <div className="alert alert-danger" role="alert">Username and email already taken.</div> : <></>}
                <button type="submit">Sign up</button>
            </form>
            <hr />

            <div className="toggle-modal-text"><p>Already have an account?</p> <p className="modal-toggle-link" onClick={toggle}>Login</p> </div>
        </>
    )
}


export default SignUpForm;