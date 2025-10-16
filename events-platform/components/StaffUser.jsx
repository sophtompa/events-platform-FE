import { useState } from "react";
import { useLocation } from "react-router-dom";
import NewEvent from "./NewEvent";

function StaffUser() {
    const location = useLocation();
    const username = location.state?.username || "User";

    const [showNewEvent, setShowNewEvent] = useState(false);

    const handleToggle = () => {
        setShowNewEvent((state) => !state);
    };

    return (
        <>
        <h2>Welcome {username}!</h2>
        <p>Would you like to post a new event?</p>
        <button onClick={handleToggle}>{showNewEvent ? "Cancel" : "Create Event"}</button>
        {showNewEvent && <NewEvent username={username} onPostSuccess={() => setShowNewEvent(false)}/>}
        </>
    )
}

export default StaffUser;