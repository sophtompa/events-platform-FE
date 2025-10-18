import { useState } from "react";
import { postUser } from "../api";
import { useNavigate } from "react-router-dom";

function StaffSignUp() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("");
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        const formValue = { username, password }

        postUser(formValue.username, formValue.password)
        .then((res) => {
        if (res.error) {
            setError(res.error);
        } else {
            setUsername("");
            setPassword("");
            setError("");
            navigate("/staff-login");
        }
        })
        .catch(err => {
            if (err.response?.status === 409) {
                setError("Username already exists. Please choose another.");
            } else {
                setError("Something went wrong. Please try again.");
            }
            console.error(err);
        });

    }

    return (
        <>
        <h3>Staff Sign Up</h3>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={handleSubmit}>
            <label> Username:
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required/>
            </label>
            <label> Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
            </label>
            <button type="submit">Create Account</button>

        </form>
        </>
    )
}

export default StaffSignUp;