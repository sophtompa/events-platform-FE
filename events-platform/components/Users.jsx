import { useState, useEffect } from "react";
import { getAllUsers } from "../api";
import { useNavigate } from "react-router-dom";

function Users() {
    const [isLoading, setLoading] = useState(true)
    const [users, setUsers] = useState([])
    const navigate = useNavigate();

    useEffect(
        () => { 
            getAllUsers().then((userData) => { 
                setUsers(userData)
                setLoading(false)
            })
        }, [])

        function handleClick(username) {
            navigate(`/users/${username}`)
        }

        if (isLoading) return <h3>Getting Events...</h3>


    return (
        <>
        <header>
            <h1>Users</h1>
        </header>
        <section className="event-user-section">
        {users.map((user) => {
            return (
                <ul key={user.username} className='event-user-display' value={user.id}>
                    <li className='user'onClick={() => handleClick(user.username)}>{user.username} </li>
                </ul>
            )
        })}
        </section>
        
        </>
    )
}

export default Users;