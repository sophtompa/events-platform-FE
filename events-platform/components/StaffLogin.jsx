import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api";

function StaffLogin() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        loginUser(username, password)
        .then((res) => {
            localStorage.setItem("token", res.token)
        })
        .catch((err) => {
            return err
        })
        };


    return (
        <>
        <h3>Staff Login</h3>
        <form onSubmit={handleSubmit}>
            <label> Username:
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required/>
            </label>
            <label> Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
            </label>
            <button type="submit">Login</button>

        </form>
        </>
    )
}

export default StaffLogin;