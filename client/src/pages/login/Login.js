import "./login.css"
import axios from "axios";
import { useRef, useContext } from "react";
import { UserContext } from "../../context/Context";


export default function Login() {

    // 1. get user context
    const { dispatch, isFetching } = useContext(UserContext);

    // 2. get email and password from input field
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    // 3. handle submit. don't need to do onChange on the input JSX since we are using useRef
    // make async since we are making a call to our API
    const handleSubmit = async (event) => {
        event.preventDefault();
        dispatch({ type: "LOGIN_START" }); // will set is fetching to true

        try {
            const res = await axios.post("/auth/login", {
                // will refer to our email input 
                email: emailRef.current.value,
                password: passwordRef.current.value,

            })

            dispatch({
                type: "LOGIN_SUCCESS",
                payload: res.data
            });
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE" });
        }
    }

    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm" onSubmit={handleSubmit}>
                <label>Email</label>
                <input
                    className="loginInput"
                    type="email"
                    placeholder="abc@gmail.com"
                    ref={emailRef}
                />

                <label>Password</label>
                <input
                    className="loginInput"
                    type="password"
                    placeholder="enter password"
                    ref={passwordRef}

                />

                <button className="loginButton" type="submit" disabled={isFetching}>Login</button>
            </form>

            <button className="loginRegisterButton">Register</button>
        </div>
    )
}
