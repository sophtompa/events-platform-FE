import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NewEvent from "./NewEvent";
import EventsByUsername from "./EventsByUser";
import DeleteUser from "./DeleteUser";

function StaffUser() {
    const loggedInUsername = localStorage.getItem("loggedInUsername") || "User";
    const [showNewEvent, setShowNewEvent] = useState(false);
    const [showMyEvents, setShowMyEvents] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    const navigate = useNavigate();
    

    const handleToggle = () => {
        setShowNewEvent((state) => !state);
        if (!showNewEvent) setShowMyEvents(false);
    };

    const handleToggleMyEvents = () => {
        setShowMyEvents((prev) => !prev);
      };

    function handleLogout() {
        const confirmLogout = window.confirm("Are you sure you want to log out?");
        if (!confirmLogout) return;

        localStorage.removeItem("token");
        localStorage.removeItem("loggedInUsername");
        navigate("/");
    }

    const handleInfoToggle = () => {
        setShowInfo((prev) => !prev);
      };


    return (
        <>
        <h2>Welcome {loggedInUsername}!</h2>
        <button onClick={handleInfoToggle}>
                {showInfo ? "Hide Info" : "Show Staff Info"}
                </button>

            {showInfo && (
                <>
            <h3 className="info-card">

            <p>This is your staff profile, where you can create a new event, view your existing events, delete an existing event, log out, or delete your account. </p>
                
            <p>Click <strong>"Create Event"</strong> to post a new event.</p>

            <p>Click <strong>"View My Events"</strong>  to view existing events, where you can also delete events.</p>
            
            <p>Click <strong>"Log Out"</strong> to log out of your account. </p>
            
            <p className="staff-warning">It is recommended to log out if you share your computer as you will remain logged in for 24 hours after logging in.</p>

            <p>Click <strong>"Delete Account"</strong> to delete your account. </p>
            
            <p className="staff-warning">If you delete your account, all your existing events will be removed.</p>
            </h3> 
            
            </>
        )}
        <p className="staff-message">What would you like to do?</p>
        <div className="button-group">
        <button className = "post-cancel-button" onClick={handleToggle}>{showNewEvent ? "Cancel" : "Create Event"}</button>
        </div>

        {showNewEvent && 
        <NewEvent username={loggedInUsername} 
        onPostSuccess={() => setShowNewEvent(false)}/>}
            
        {!showNewEvent && (
            <>
            <div className="button-group">
            <button className="view-events" onClick={handleToggleMyEvents}>
            {showMyEvents ? "Hide My Events" : "View My Events"}
            </button>
            </div>
            {showMyEvents && (
                <>
                <h2>My Events:</h2>
                <EventsByUsername username={loggedInUsername}/>
                </>)} 
            </>
            
        )}
        

        {!showNewEvent && !showMyEvents &&  (
            <>
            <div className="button-group">
            <button className="logout" onClick={handleLogout}>Log Out</button>
            </div>
            <DeleteUser />
            </>)}
        
        </>
    )
}

export default StaffUser;