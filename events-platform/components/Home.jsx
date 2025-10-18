import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate()
    const [loggedInUsername, setLoggedInUsername] = useState(
        localStorage.getItem("loggedInUsername"))

    function handleLogout() {
        localStorage.removeItem("token");
        localStorage.removeItem("loggedInUsername");
        setLoggedInUsername(null);
        navigate("/");
    }

    return (
        <section>
            <h1>Welcome to the Events-Platform</h1>
            {loggedInUsername ? (
                <>
                    <p>Logged in as: {loggedInUsername}</p>
                    <button onClick={handleLogout}>Log Out</button>
                    <p>Browse events:</p>
                    <button onClick={() => navigate("events")}>Browse</button>
                </>
            ) : (
                <>
                    <p>Staff can login to post events:</p>
                    <button onClick={() => navigate("staff-signup")}>Staff Sign Up</button>
                    <button onClick={() => navigate("staff-login")}>Staff Log In</button>
                    <p>Browse events as non-staff with the button below:</p>
                    <button onClick={() => navigate("events")}>Browse</button>
                </>
            )}
        </section>
    )
}

export default Home;