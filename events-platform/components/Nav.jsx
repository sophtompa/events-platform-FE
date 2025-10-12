import { Link } from "react-router"

function Nav() {

    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/events'>Events</Link>
            <Link to='/users'>Users</Link>
        </nav>
    )
}

export default Nav;