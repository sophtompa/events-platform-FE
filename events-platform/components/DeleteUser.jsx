import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteUserByUsername } from "../api";

function DeleteUser() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const username = localStorage.getItem("loggedInUsername");

    function handleDelete() {

        if (!window.confirm("Are you sure you want to delete your account?")) return;
        setLoading(true);

        deleteUserByUsername(username)
            .then(() => {
                localStorage.removeItem("token");
                localStorage.removeItem("loggedInUsername");
                alert("Your account has been deleted.");
                navigate("/");
            })
            .catch((err) => {
                console.error("Error deleting user:", err);
                alert("Failed to delete account. Check console for details.");
            })
            .finally(() => setLoading(false));
    

}

    return(
        <button className='delete-button' onClick={handleDelete} disabled={loading}>{loading ? "Deleting..." : "Delete Account"}</button>
    )
}

export default DeleteUser;