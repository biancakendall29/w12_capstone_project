import "../styles/Modal.css"

const LoginForm = ({ toggle }) => {
    return (
        <>
            <form>
                <label htmlFor="uname"><b>Username: </b></label>
                <input type="text" placeholder="Enter Username" name="uname" required />
                <label htmlFor="psw"><b>Password: </b></label>
                <input type="password" placeholder="Enter Password" name="psw" required />
                <button type="submit">Login</button>
               
        
            </form>

            <p>Create an account <a href='' onClick={toggle}>here</a> </p>

        </>
    );
}


export default LoginForm;