import { Link } from "react-router"

function StaffNav() {

    return (
        <nav>
            <Link to='/'>Back to Home</Link>
            <Link to='/events'>Events</Link>
            <Link to='/users'>Users</Link>
            <Link to='/staff-user'>My Account</Link>
        </nav>
    )
}

export default StaffNav;