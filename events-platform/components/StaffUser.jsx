import { useLocation } from "react-router-dom";

function StaffUser() {
    const location = useLocation();
    const username = location.state?.username || "User";

    return (
        <>
        <h2>Welcome {username}!</h2>
        <p>Would you like to post a new event?</p>
        <button>Post an event</button>
        </>
    )
}

export default StaffUser;