import "../styles/Modal.css"
import { useState } from "react"

const LoginForm = ({ toggle, user, setUser, isLoggedIn, setIsLoggedIn, users, setUsers,closeModal }) => {

    const [stateUser, setStateUser] = useState(
        {
            username: "",
            email: "",
            password: ""
        }
    )

    const handleInputChange = (event) => {
      let formName = event.target.name;
      let copiedUser = {...stateUser};
      copiedUser[formName] = event.target.value;
      setStateUser(copiedUser);
    }

    const handleLoginSubmit = (event) => {

      event.preventDefault();
      let foundUser = users.filter(client =>  client.username === stateUser.username && client.password === stateUser.password);
      if (foundUser.length === 1) {
        setUser(foundUser[0]);
        console.log("set user to " + foundUser[0].username);
        closeModal();
        setIsLoggedIn(true);
      } 
      else {
        alert("Username or password are incorrect")
      }
    }

    return (
        <>
            <form className="modal-form" onSubmit={handleLoginSubmit}>
                <label htmlFor="username"><b>Username: </b></label>
                <input type="text" placeholder="Enter Username" name="username" 
                        onChange={handleInputChange}  value={stateUser.username} required/>
                <label htmlFor="password"><b>Password: </b></label>
                <input type="password" placeholder="Enter Password" name="password" 
                        onChange={handleInputChange} value={stateUser.password} required/>
                <button type="submit">Login</button>
               
            </form>

            <div className="toggle-modal-text"> Don't have an account? Sign up <p className="modal-toggle-link" onClick={toggle}> here</p> </div>

        </>
    );
}


export default LoginForm;