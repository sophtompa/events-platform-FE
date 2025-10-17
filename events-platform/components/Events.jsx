import { useState, useEffect } from "react";
import { getAllEvents } from "../api";
import { useNavigate } from "react-router-dom";

function Events() {
    const [isLoading, setLoading] = useState(true)
    const [events, setEvents] = useState([])
    const navigate = useNavigate()

    useEffect(
        () => { 
            getAllEvents().then((eventData) => { 
                setEvents(eventData)
                setLoading(false)
            })
        }, [])


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
        {events.map((event) => {
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

export default Events;