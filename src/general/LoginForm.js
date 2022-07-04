import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Modal.css"
import { useState } from "react"
import { eventWrapper } from "@testing-library/user-event/dist/utils"


const LoginForm = ({ toggle, user, setUser, isLoggedIn, setIsLoggedIn, users, setUsers, closeModal }) => {

  const [stateUser, setStateUser] = useState(
    {
      username: "",
      email: "",
      password: "",
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
    console.log(user)
    let foundUser = users.filter(client => client.username === stateUser.username && client.password === stateUser.password);
    if (foundUser.length === 1) {
        setUser(foundUser[0]);
        console.log("set user to " + foundUser[0].username);
        closeModal();
        setIsLoggedIn(true);
    }
    else {
        // alert("Username or password are incorrect")
        setIsLoginAlertShowing(true)
    }
}

  return (
    <>
      <form className="modal-form" onSubmit={handleLoginSubmit}>
        <label htmlFor="username"><b>Username: </b></label>
        <input type="text" placeholder="Enter Username" name="username"
          onChange={handleInputChange} value={stateUser.username} required />
        <label htmlFor="password"><b>Password: </b></label>
        <input type={showPassword ? "text":"password"} placeholder="Enter Password" name="password"
          onChange={handleInputChange} value={stateUser.password} required />
        <div className='password-checkbox-container'>
          <label htmlFor="password-checkbox">Show password? </label>
          <input type="checkbox" id="password-checkbox" checked={showPassword} onChange={togglePassword} />
        </div>
        {isLoginAlertShowing ? <div className="alert alert-danger" role="alert">Username or password is incorrect.</div> : <></>}
        <button type="submit">Login</button>

      </form>

      <div className="toggle-modal-text"> Don't have an account? <p className="modal-toggle-link" onClick={toggle}>Sign up</p> </div>

    </>
  );
}


export default LoginForm;