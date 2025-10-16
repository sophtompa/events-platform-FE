import { useState } from "react";
import { postEvent } from "../api";

function NewEvent({username, onPostSuccess}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [event_date, setEvent_date] = useState("");


    function handleSubmit(e) {
        e.preventDefault();

    const formValues = {
        title,
        description,
        location,
        event_date,
        username,
        };

        console.log("Posting event:", formValues);

    postEvent(formValues)
    .then(() => {
        setTitle("")
        setDescription("")
        setLocation("")
        setEvent_date("")
        if (onPostSuccess) onPostSuccess();
    })
    .catch((err) => {
        return err
    })
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
        <label>
            Title:
            <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required />
        </label>

        <label>
            Description:
            <input
            type="textarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required />
        </label>

        <label>
            Location:
            <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required />
        </label>

        <label>
            Date:
            <input
            type="date"
            value={event_date}
            onChange={(e) => setEvent_date(e.target.value)}
            required />
        </label>

        <p><strong>Posting as:</strong> {username}</p>


        <button type="submit">Post Event</button>
        </form>
        </>
    )
}

export default NewEvent;