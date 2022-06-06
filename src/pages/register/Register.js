import "./register.css"


export default function Register() {
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm">
                {/* <label>Username</label>
                <input className="registerInput" type="text" placeholder="abc@gmail.com" /> */}
                <label>Email</label>
                <input className="registerInput" type="email" placeholder="abc@gmail.com" />
                <label>Password</label>
                <input className="registerInput" type="password" placeholder="enter password" />
                <button className="registerButton">register</button>
            </form>

            <button className="registerLoginButton">Login</button>
        </div>
    )
}
