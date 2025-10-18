import { useState, useEffect } from "react";
import { getEventsByUsername } from "../api";
import { useNavigate } from "react-router-dom";

function EventsByUsername({username}) {
        const [isLoading, setLoading] = useState(true)
        const [events, setEvents] = useState([])
        const navigate = useNavigate()

    useEffect(() => { 
        if(!username) return;
        getEventsByUsername(username).then((eventData) => { 
            setEvents(eventData)
            setLoading(false)
        })
        .catch((err) => {
            console.error("Error fetching user events:", err);
            setLoading(false);
        });
    }, [username])
        

    function handleClick(id) {
        navigate(`/events/${id}`)
    }

        if (isLoading) return <h3>Getting Events...</h3>


    return (
    <>
    <header>
        <h1>Events</h1>
    </header>
    <section className="event-user-section">
    {events.events.map((event) => {
        return (
            <ul key={event.id} className='event-user-display' value={event.id} onClick={() => handleClick(event.id)}>
                <li className='title'>{event.title}</li>
                <li>Details: {event.description}</li>
                <li>Location: {event.location}</li>
                <li>Date: {event.event_date}</li>
                <li>Posted By: {event.username}</li>
            </ul>
        )
    })}
    </section>
    </>
    )
}

export default EventsByUsername;