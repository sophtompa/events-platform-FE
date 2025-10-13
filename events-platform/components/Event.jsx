import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getEvent } from "../api"
import Events from "./Events";

function Event() {
    const {id} = useParams();
    const [isLoading, setLoading] = useState(true)
    const [event, setEvent] = useState(null)

    useEffect(
        () => {
            getEvent(id).then((eventData) => {
                setEvent(eventData.events[0])
                setLoading(false)
            })
        }, [id]
    )
    if (isLoading) return <p>Loading...</p>
    if (!event) return <p>No event found</p>

    return(
        <>
        <h1>{event.title}</h1>
        <p>Details: {event.description}</p>
        <p>Location: {event.location}</p>
        <p>Date: {event.event_date}</p>
        <p>Posted By: {event.username}</p>
        <button>Sign up</button>
        </>
    )
}

export default Event;