import { useState, useEffect } from "react";
import { getAllEvents } from "../api";
import { useNavigate } from "react-router-dom";

function Events() {
    const [isLoading, setLoading] = useState(true)
    const [events, setEvents] = useState([])

    useEffect(
        () => { 
            getAllEvents().then((eventData) => { 
                setEvents(eventData)
                setLoading(false)
            })
        }, [])


    // function handleClick(title) {
    //     navigate(`/events/${title}`)
    // }

        if (isLoading) return <h3>Getting Events...</h3>

    return (
        <>
        <header>
            <h1>Events</h1>
        </header>
        <section>
        {events.map((event) => {
            return (
                <ul key={event.title} className='event-display' value={event.id} onClick={() => handleClick(event.title)}>
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