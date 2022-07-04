import "../styles/Modal.css"
import { useState } from "react"

const SignUpForm = ({ toggle, user, setUser, isLoggedIn, setIsLoggedIn, users, setUsers, closeModal }) => {

    const [stateUser, setStateUser] = useState(
        {
            username: "",
            email: "",
            password: ""
        }
    )
    const [isLoginAlertShowing, setIsLoginAlertShowing] = useState(false);
    const [showPassword, setShowPassword] = useState(false)

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
        
        fetch("http://localhost:8080/users", {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(stateUser)
        })

      }
    

    return (
        <>
            <form className="modal-form" onSubmit={handleLoginSubmit}>
                <label><b>Username:</b></label>
                <input type="text" placeholder="Enter Username" name="username" onChange={handleInputChange} required />
                <label><b>Email:</b> </label>
                <input type="text" placeholder="Enter Email" name="email" onChange={handleInputChange} required />
                <label><b>Password:</b>  </label>
                <input type={showPassword ? "text":"password"} placeholder="Enter Password" name="password" onChange={handleInputChange} required />
                <div className='password-checkbox-container'>
                    <label htmlFor="password-checkbox">Show password? </label>
                    <input type="checkbox" id="password-checkbox" checked={showPassword} onChange={togglePassword}/>
                </div>
                <button type="submit">Sign up</button>
            </form>
            <div className="toggle-modal-text" onClick={toggle}>Already have an account?<p className="modal-toggle-link">Log in</p></div>
        </>
    )
}


export default SignUpForm;