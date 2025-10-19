import { useState } from "react";
import { postEvent } from "../api";

function NewEvent({username, onPostSuccess}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [event_date, setEvent_date] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    function handleSubmit(e) {
        e.preventDefault();

    const formValues = {
        title,
        description,
        location,
        event_date,
        username,
        };

        setLoading(true);
        setError(null);

    postEvent(formValues)
    .then(() => {
        setTitle("")
        setDescription("")
        setLocation("")
        setEvent_date("")
        if (onPostSuccess) onPostSuccess();
    })
    .catch((err) => {
        console.error("Failed to post event:", err);
        setError("Failed to post event. Please try again.");
    })
    .finally(() => setLoading(false));
    }

    return (
        <>
        <form className="post-form" onSubmit={handleSubmit}>
        <label className="post-label">
            Title:
            <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required />
        </label>

        <label className="post-label">
            Description:
            <input
            type="textarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required />
        </label>

        <label className="post-label">
            Location:
            <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required />
        </label>

        <label className="post-label">
            Date:
            <input
            type="date"
            value={event_date}
            onChange={(e) => setEvent_date(e.target.value)}
            required />
        </label>

        <p><strong>Posting as:</strong> {username}</p>

        {error && <p style={{ color: "red" }}>{error}</p>}


        <div className="button-group">
        <button type="submit" disabled={loading}>{loading ? "Posting..." : "Post Event"}</button>
        </div>
        </form>
        </>
    )
}

export default NewEvent;