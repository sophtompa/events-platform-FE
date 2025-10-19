import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NewEvent from "./NewEvent";
import EventsByUsername from "./EventsByUser";
import DeleteUser from "./DeleteUser";

function StaffUser() {
    const loggedInUsername = localStorage.getItem("loggedInUsername") || "User";
    const [showNewEvent, setShowNewEvent] = useState(false);
    const [showMyEvents, setShowMyEvents] = useState(false);
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


    return (
        <>
        <h2>Welcome {loggedInUsername}!</h2>
        <h3>This is your staff profile, where you can create a new event, view your existing events, or delete your account. WARNNING: If you delete your account, all your existing events will be removed.</h3>
        <p>Would you like to post a new event?</p>
        <button className = "post-cancel-button" onClick={handleToggle}>{showNewEvent ? "Cancel" : "Create Event"}</button>

        {showNewEvent && 
        <NewEvent username={loggedInUsername} 
        onPostSuccess={() => setShowNewEvent(false)}/>}
            
        {!showNewEvent && (
            <>
            <button onClick={handleToggleMyEvents}>
            {showMyEvents ? "Hide my events" : "View my events"}
            </button>
            {showMyEvents && (
                <>
                <h2>My Events:</h2>
                <EventsByUsername username={loggedInUsername}/>
                </>)} 
            </>
            
        )}
        

        {!showNewEvent && !showMyEvents &&  (
            <>
            <DeleteUser />
            <button className="logout" onClick={handleLogout}>Log Out</button>
            </>)}
        
        </>
    )
}

export default StaffUser;