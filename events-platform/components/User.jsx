import { useParams } from "react-router-dom";
import EventsByUsername from "./EventsByUser";

function User() {
    const { username } = useParams();

    return (
        <>
        <h2>{username}'s Profile</h2>
        <h3>Posted Events:</h3>
        <EventsByUsername username={username}/>
        </>
    )


}

export default User;