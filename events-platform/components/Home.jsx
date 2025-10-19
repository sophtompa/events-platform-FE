import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate()
    const [loggedInUsername, setLoggedInUsername] = useState(
        localStorage.getItem("loggedInUsername"))

    function handleLogout() {
        const confirmLogout = window.confirm("Are you sure you want to log out?");
        if (!confirmLogout) return;

        localStorage.removeItem("token");
        localStorage.removeItem("loggedInUsername");
        setLoggedInUsername(null);
        navigate("/");
    }

    return (
        <section>
            <h2>Welcome to the Platform</h2>
           
            {loggedInUsername ? (
                <> 
                    <p>Logged in as: {loggedInUsername}</p>
                    <p>Manage your account:</p>
                    <div className="button-group">
                    <button onClick={() => navigate("staff-user")}>Go to My Account</button>
                    <button className="logout" onClick={handleLogout}>Log Out</button>
                    </div>
                    <p>Browse events:</p>
                    <button onClick={() => navigate("events")}>Browse</button>
                </>
            ) : (
                <>
                <h3 className="info-card">This is a platform where staff can create an account, login, and post events. Staff and non-staff can view all posted events. You can sign up to an event, and add it to your google calendar. You can also view all existing users to acces their events.</h3>
                    <p>Staff can create and account and login to post events:</p>
                    <div className="button-group">
                    <button onClick={() => navigate("staff-signup")}>Staff Sign Up</button>
                    <button onClick={() => navigate("staff-login")}>Staff Log In</button>
                    </div>
                    <p>Non-staff can browse events below:</p>
                    <button onClick={() => navigate("events")}>Browse</button>
                </>
            )}
        </section>
    )
}

export default Home;