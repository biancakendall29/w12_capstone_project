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
        <div onClick={toggle}>Already have an account? Log in <p className="modal-toggle-link">here</p></div>
        </>
    )
}


export default SignUpForm;