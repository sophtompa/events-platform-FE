import { useState, useEffect } from "react";
import { getAllUsers } from "../api";

function Users() {
    const [isLoading, setLoading] = useState(true)
    const [users, setUsers] = useState([])

    useEffect(
        () => { 
            getAllUsers().then((userData) => { 
                setUsers(userData)
                setLoading(false)
            })
        }, [])

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
                    <li className='user'>{user.username}</li>
                </ul>
            )
        })}
        </section>
        
        </>
    )
}

export default Users;