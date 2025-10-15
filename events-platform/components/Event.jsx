import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getEvent } from "../api"

function Event() {
    const {id} = useParams();
    const [isLoading, setLoading] = useState(true)
    const [event, setEvent] = useState(null)
    const [showForm, setShowForm] = useState(false)
    const [signedUp, setSignedUp] = useState(false)
    const [enteredName, setEnteredName] = useState("")
    const navigate = useNavigate()

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

    const handleSubmit = (e) => {
        e.preventDefault() 
        if (!enteredName.trim()) {
            alert("Please enter you name to sign up.")
            return
        }
    
    setSignedUp(true)
    setShowForm(false)
    }

    return(
        <>
        <h1>{event.title}</h1>
        <p>Details: {event.description}</p>
        <p>Location: {event.location}</p>
        <p>Date: {event.event_date}</p>
        <p>Posted By: {event.username}</p>
        <button onClick={() => setShowForm(true)}>Sign up</button>

        {showForm && (
             <form onSubmit={handleSubmit}>
             <label>
               Enter your name:
               <input
                 type="text"
                 value={enteredName}
                 onChange={(e) => setEnteredName(e.target.value)}
                 placeholder="Your name"
                 required
               />
             </label>
             <button type="submit">Continue</button>
           </form>
        )}

        {signedUp && (
            <button>Add To Calendar</button>
        )}
        </>
    )
}

export default Event;