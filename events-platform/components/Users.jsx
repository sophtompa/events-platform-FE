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

        if (isLoading) return <h3>Getting Users...</h3>


    return (
        <>
        <header>
            <h2>Users</h2>
            <h3 className="info-card">Here you can find a list of all existing users. Click on a user to view all of their existing events.</h3>
        </header>
        <section className="event-user-section" >
        {users.map((user) => {
            return (
                <ul key={user.username} className='event-user-display' value={user.id} onClick={() => handleClick(user.username)}>
                    <li className='user'>{user.username} </li>
                </ul>
            )
        })}
        </section>
        
        </>
    )
}

export default Users;