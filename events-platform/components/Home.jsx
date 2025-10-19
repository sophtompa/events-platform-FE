import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const [showInfo, setShowInfo] = useState(false);
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

    const handleInfoToggle = () => {
        setShowInfo((prev) => !prev);
      };

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
                <button onClick={handleInfoToggle}>
                {showInfo ? "Hide Info" : "Show Platform Info"}
                </button>

            {showInfo && (
            <h3 className="info-card">
                <p>This is a platform where staff can create an account, login, and post
                events. Staff and non-staff can view all posted events. You can sign up
                to an event, and add it to your google calendar. You can also view all
                existing users to access their specific events.</p>

            <p>Click <strong>"Staff Sign In"</strong> to create an account. You will then be redirected to the login page.</p>

            <p>Click <strong>"Staff Login"</strong>  to login with an existing account. Please create a complex password to improve your account security.</p>
            
            <p>Click <strong>"Browse"</strong> If you are not a staff member, and wish to browse available events and sign up. </p>
            </h3>
        )}
                    <p className="homepage-message">Create and account or login:</p>
                    <div className="button-group">
                    <button onClick={() => navigate("staff-signup")}>Staff Sign Up</button>
                    <button onClick={() => navigate("staff-login")}>Staff Login</button>
                    </div>
                    <p className="homepage-message">Browse events as a guest:</p>
                    <button onClick={() => navigate("events")}>Browse</button>
                </>
            )}
        </section>
    )
}

export default Home;