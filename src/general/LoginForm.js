import "../styles/Modal.css"

const LoginForm = ({ toggle, user, setUser, isLoggedIn, setIsLoggedIn }) => {



    return (
        <>
            <form className="modal-form" onSubmit={handle}>
                <label htmlFor="uname"><b>Username: </b></label>
                <input type="text" placeholder="Enter Username" name="uname" required />
                <label htmlFor="psw"><b>Password: </b></label>
                <input type="password" placeholder="Enter Password" name="psw" required />
                <button type="submit">Login</button>
               
            </form>

            <div className="toggle-modal-text"> Don't have an account? Sign up <p className="modal-toggle-link" onClick={toggle}> here</p> </div>

        </>
    );
}


export default LoginForm;