import { deleteEventById, getEventsByUsername } from "../api"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function DeleteEvent({id, username, setEvents}) {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    function handleDelete() {

        if (!window.confirm("Are you sure you want to delete this event?")) return;

        setLoading(true);

        deleteEventById(id)
        .then(() => {
            return getEventsByUsername(username);
        })
        .then((eventsData) => {
            navigate("/staff-user");
            setEvents(eventsData);
            
        })
        .catch((err) => {
            console.error("Error deleting event:", err);
        });
}

    return(
        <button className='delete-button' onClick={handleDelete} disabled={loading}>delete event</button>
    )
}

export default DeleteEvent;