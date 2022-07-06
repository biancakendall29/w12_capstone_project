import { useState } from "react"
import { eventWrapper } from "@testing-library/user-event/dist/utils"
import { Eye, EyeSlash } from "react-bootstrap-icons"



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
    // console.log(user)
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
        <input type="text" placeholder="Username" name="username"
          onChange={handleInputChange} value={stateUser.username} required />
        <div className="password-and-button-container">
          <div className="password-container">

            <label htmlFor="password"><b>Password: </b></label>
            <input type={showPassword ? "text" : "password"} placeholder="Password" name="password"
              onChange={handleInputChange} value={stateUser.password} required />
          </div>
          <label htmlFor='show-password-button' />
          <button name='show-password-button' className='password-show' type="button" onClick={togglePassword}>{showPassword ? <Eye /> : <EyeSlash />}</button>
        </div>
        {/* <div className='password-checkbox-container'>
          <label htmlFor="password-checkbox">Show password? </label>
          <input type="checkbox" id="password-checkbox" checked={showPassword} onChange={togglePassword} />
        </div> */}
        {isLoginAlertShowing ? <div className="alert alert-danger" role="alert">Username or password is incorrect.</div> : <></>}
        <button type="submit"><b>Login</b></button>

      </form>

      <hr/>

      <div className="toggle-modal-text"><p> Don't have an account?</p> <p className="modal-toggle-link" onClick={toggle}>Sign up</p> </div>

    </>
  );
}


export default LoginForm;