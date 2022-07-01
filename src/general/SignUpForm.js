import "../styles/Modal.css"

const SignUpForm = ({toggle}) => {

    return(
        <>
        <form>
            <label>Username:</label>
            <input type="text" placeholder="Enter Username" name="Uname" required />
            <label>Email: </label>
            <input type="text" placeholder="Enter Email" name="Email" required />
            <label>Password:  </label>
            <input type="text" placeholder="Enter Password" name="Password" required />
            <button type="submit">Sign up</button>
        </form>    
        <p onClick={toggle}>Hello from Sign up form</p>
        </>
    )
}


export default SignUpForm;