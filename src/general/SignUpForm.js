import "../styles/Modal.css"

const SignUpForm = ({toggle}) => {

    return(
        <>
        <form className="modal-form">
            <label><b>Username:</b></label>
            <input type="text" placeholder="Enter Username" name="Uname" required />
            <label><b>Email:</b> </label>
            <input type="text" placeholder="Enter Email" name="Email" required />
            <label><b>Password:</b>  </label>
            <input type="text" placeholder="Enter Password" name="Password" required />
            <button type="submit">Sign up</button>
        </form>    
        <div className="toggle-modal-text" onClick={toggle}>Already have an account? Log in <p className="modal-toggle-link">here</p></div>
        </>
    )
}


export default SignUpForm;