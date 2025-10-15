import { useState } from "react";
import { postUser } from "../api";
import { useNavigate } from "react-router-dom";

function StaffSignUp() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        const formValue = { username, password }

        postUser(formValue.username, formValue.password)
        .then((res) => {
            setUsername("")
            setPassword("")
        })
        .catch((err) => {
            return err
        })

    }

    return (
        <>
        <h3>Staff Sign Up</h3>
        <form onSubmit={handleSubmit}>
            <label> Username:
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required/>
            </label>
            <label> Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
            </label>
            <button type="submit" onClick={() => navigate("staff-user")}>Create Account</button>

        </form>
        </>
    )
}

export default StaffSignUp;