import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api";

function StaffLogin() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        loginUser(username, password)
        .then((res) => {
            setLoading(false);
            if (!res.token) {
                alert("Invalid username or password");
                return;
            }
            localStorage.setItem("token", res.token)
            navigate("/staff-user", {state: { username }})
        })
        .catch((err) => {
            setLoading(false);
            alert("Invalid username or password")
            console.error(err)
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
            <button type="submit" disabled={loading}> {loading ? "Logging in..." : "Login"} </button>

        </form>
        </>
    )
}

export default StaffLogin;