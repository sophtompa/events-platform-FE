import { useState } from "react";
import { useLocation } from "react-router-dom";
import NewEvent from "./NewEvent";
import EventsByUsername from "./EventsByUser";

function StaffUser() {
    const location = useLocation();
    const username = location.state?.username || "User";

    const [showNewEvent, setShowNewEvent] = useState(false);
    const [showMyEvents, setShowMyEvents] = useState(false);

    const handleToggle = () => {
        setShowNewEvent((state) => !state);
        if (!showNewEvent) setShowMyEvents(false);
    };

    const handleToggleMyEvents = () => {
        setShowMyEvents((prev) => !prev);
      };

    return (
        <>
        <h2>Welcome {username}!</h2>
        <p>Would you like to post a new event?</p>
        <button onClick={handleToggle}>{showNewEvent ? "Cancel" : "Create Event"}</button>
        {showNewEvent && <NewEvent username={username} onPostSuccess={() => setShowNewEvent(false)}/>}
        {!showNewEvent && (
            <>
            <button onClick={handleToggleMyEvents}>
            {showMyEvents ? "Hide my events" : "View my events"}
            </button>
            {showMyEvents && <EventsByUsername username={username} />}
            </>
        )}
        </>
    )
}

export default StaffUser;