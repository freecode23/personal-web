import "./register.css"
import axios from "axios"
import { useState } from "react";
import { useNavigate } from "react-router-dom"


export default function Register() {
    // 1. Create user object
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();


    // 2. handle form submit
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // create user
            const res = await axios.post("/auth/register", {
                username,
                email,
                password
            })

            // redirect
            res.data && navigate("/login");
        } catch (err) {
            setError(true);
        }
    }

    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm" onSubmit={handleSubmit}>

                <label>Username</label>
                <input
                    className="registerInput"
                    type="text"
                    placeholder="abc_user"
                    onChange={event => setUsername(event.target.value)}
                />

                <label>Email</label>
                <input
                    className="registerInput"
                    type="email"
                    placeholder="abc@gmail.com"
                    onChange={event => setEmail(event.target.value)}

                />

                <label>Password</label>
                <input
                    className="registerInput"
                    type="password"
                    placeholder="enter password"
                    onChange={event => setPassword(event.target.value)}
                />

                <button className="registerButton" type="submit">register</button>
            </form>

            <button className="registerLoginButton">Login</button>
        </div>
    )
}
